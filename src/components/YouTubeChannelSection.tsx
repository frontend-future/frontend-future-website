import React, { useEffect, useMemo, useState } from "react";
import { Play, Search, X, ExternalLink, RefreshCw } from "lucide-react";

/**
 * YouTubeChannelSection
 *
 * A drop-in, SEO-friendly, dynamic section that showcases the latest videos
 * from a YouTube channel with inline playback (stay-on-page) and optional
 * deep links to YouTube. Designed for Tailwind + shadcn/ui styling.
 *
 * ⚙️ Quick Setup (no build changes required):
 * - Add this component to your page.
 * - Provide a YouTube Data API v3 key via the `apiKey` prop.
 * - Provide a `channelId` (preferred) OR `handle` (e.g., "@frontendfuture").
 * - Optional: set `maxResults`, `initialQuery`, and `playlistId`.
 *
 * 🧠 SEO: Renders JSON-LD for the first 6 videos, improving rich results.
 *
 * 🧩 UX: Includes search, filters, load more (pagination), and a fast
 * inline player modal so users can watch without leaving the page.
 *
 * 🛟 Fallbacks:
 * - If no apiKey is provided, the section still renders a CTA and an
 *   embedded playlist (if `playlistId` is passed) so the page never looks empty.
 */

// --- Small design helpers
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative mx-auto w-full max-w-7xl px-4 md:px-6 ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`group rounded-2xl border border-slate-200/60 bg-white shadow-sm transition hover:shadow-md ${className}`}>
    {children}
  </div>
);

// Formatters
const fmtViews = (n: string | number | undefined) => {
  if (!n && n !== 0) return "";
  const num = Number(n);
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(num);
};
const fmtDate = (iso: string) => new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  viewCount?: string;
  duration?: string;
}

// Build JSON-LD schema.org objects
const buildVideoJsonLd = (v: Video) => ({
  "@type": "VideoObject",
  name: v.title,
  description: v.description?.slice(0, 160) || v.title,
  thumbnailUrl: v.thumbnail,
  uploadDate: v.publishedAt,
  embedUrl: `https://www.youtube.com/embed/${v.id}`,
  url: `https://www.youtube.com/watch?v=${v.id}`,
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: { "@type": "WatchAction" },
    userInteractionCount: Number(v.viewCount || 0),
  },
});

const JsonLd = ({ videos }: { videos: Video[] }) => {
  if (!videos?.length) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.slice(0, 6).map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: buildVideoJsonLd(v),
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
};

// Core fetchers for YouTube Data API v3
async function resolveChannelId({ apiKey, handle }: { apiKey: string; handle?: string }) {
  if (!handle) return null;
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "channel");
  url.searchParams.set("q", handle);
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("key", apiKey);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to resolve channel handle");
  const data = await res.json();
  return data.items?.[0]?.id?.channelId || null;
}

async function fetchVideosPage({ apiKey, channelId, query = "", pageToken = "", maxResults = 12 }: {
  apiKey: string;
  channelId: string;
  query?: string;
  pageToken?: string;
  maxResults?: number;
}) {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("channelId", channelId);
  url.searchParams.set("maxResults", String(maxResults));
  url.searchParams.set("order", "date");
  url.searchParams.set("type", "video");
  if (query) url.searchParams.set("q", query);
  if (pageToken) url.searchParams.set("pageToken", pageToken);
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to load videos");
  const data = await res.json();

  const ids = data.items?.map((it: any) => it.id.videoId).filter(Boolean) || [];
  if (!ids.length) return { videos: [], nextPageToken: data.nextPageToken || "" };

  // fetch details and statistics
  const durl = new URL("https://www.googleapis.com/youtube/v3/videos");
  durl.searchParams.set("part", "snippet,contentDetails,statistics");
  durl.searchParams.set("id", ids.join(","));
  durl.searchParams.set("key", apiKey);
  const dres = await fetch(durl.toString());
  if (!dres.ok) throw new Error("Failed to load details");
  const ddata = await dres.json();

  const videos: Video[] = ddata.items.map((it: any) => ({
    id: it.id,
    title: it.snippet.title,
    description: it.snippet.description,
    publishedAt: it.snippet.publishedAt,
    thumbnail: it.snippet.thumbnails?.maxres?.url || it.snippet.thumbnails?.high?.url || it.snippet.thumbnails?.medium?.url,
    viewCount: it.statistics?.viewCount,
    duration: it.contentDetails?.duration,
  }));

  return { videos, nextPageToken: data.nextPageToken || "" };
}

interface YouTubeChannelSectionProps {
  apiKey?: string;
  channelId?: string;
  handle?: string;
  playlistId?: string;
  heading?: string;
  subheading?: string;
  maxResults?: number;
  initialQuery?: string;
}

export default function YouTubeChannelSection({
  apiKey = "",
  channelId = "",
  handle = "@frontendfuture",
  playlistId = "",
  heading = "From our YouTube channel",
  subheading = "Learn how to code and land a 6-figure remote job in 12 weeks.",
  maxResults = 12,
  initialQuery = "",
}: YouTubeChannelSectionProps) {
  const [resolvedChannel, setResolvedChannel] = useState(channelId);
  const [query, setQuery] = useState(initialQuery);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const canFetch = Boolean(apiKey && (resolvedChannel || handle));

  useEffect(() => {
    let ignore = false;
    async function boot() {
      if (!apiKey) return;
      try {
        setError("");
        setLoading(true);
        let cid = channelId;
        if (!cid) {
          cid = await resolveChannelId({ apiKey, handle }) || "";
          if (!cid) throw new Error("Channel not found for handle " + handle);
          if (ignore) return;
          setResolvedChannel(cid);
        }
        const { videos: v, nextPageToken } = await fetchVideosPage({ apiKey, channelId: cid, maxResults, query });
        if (ignore) return;
        setVideos(v);
        setPageToken(nextPageToken);
      } catch (e: any) {
        if (!ignore) setError(e.message || "Failed to load YouTube data");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    boot();
    return () => { ignore = true; };
  }, [apiKey, channelId, handle, maxResults, query]);

  const onLoadMore = async () => {
    if (!canFetch || !pageToken) return;
    setLoading(true);
    try {
      const { videos: v, nextPageToken } = await fetchVideosPage({ apiKey, channelId: resolvedChannel, maxResults, pageToken, query });
      setVideos((prev) => [...prev, ...v]);
      setPageToken(nextPageToken);
    } catch (e: any) {
      setError(e.message || "Couldn't load more videos");
    } finally {
      setLoading(false);
    }
  };

  const embedSrc = useMemo(() => (selected ? `https://www.youtube.com/embed/${selected}?autoplay=1` : ""), [selected]);

  return (
    <div className="py-14 md:py-20">
      <Section>
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-start gap-3 text-left md:mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {heading}
          </h2>
          <p className="text-slate-600">{subheading}</p>
          <div className="mt-3 flex w-full items-center gap-2">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search videos (e.g. resume, roadmap, interviews)"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none ring-0 transition focus:border-slate-300 focus:shadow-sm"
                defaultValue={initialQuery}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setQuery(e.currentTarget.value);
                  }
                }}
              />
            </div>
            <button
              onClick={() => setQuery((q) => q)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50"
              title="Refresh"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
          {!!error && (
            <div className="mt-2 text-sm text-rose-600">{error}</div>
          )}
        </div>

        {canFetch ? (
          <>
            {!videos.length && !loading ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
                No videos found for this search.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((v) => (
                  <Card key={v.id}>
                    <button
                      onClick={() => setSelected(v.id)}
                      className="relative block w-full overflow-hidden rounded-t-2xl"
                      title={v.title}
                    >
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        loading="lazy"
                        className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-slate-900 shadow">
                          <Play className="h-4 w-4" />
                          Play
                        </span>
                      </span>
                    </button>
                    <div className="space-y-2 p-4">
                      <a
                        href={`https://www.youtube.com/watch?v=${v.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="line-clamp-2 text-base font-semibold leading-snug text-slate-900 hover:underline"
                      >
                        {v.title}
                      </a>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <span>{fmtViews(v.viewCount)} views</span>
                        <span>•</span>
                        <span>{fmtDate(v.publishedAt)}</span>
                      </div>
                      <div className="pt-1">
                        <a
                          href={`https://www.youtube.com/watch?v=${v.id}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch on YouTube <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            <div className="mt-8 flex items-center justify-center">
              <button
                onClick={onLoadMore}
                disabled={!pageToken || loading}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Loading…" : pageToken ? "Load more" : "All caught up"}
              </button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="aspect-video w-full overflow-hidden rounded-2xl">
                {playlistId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                    title="YouTube playlist"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-50">
                    <div className="max-w-md p-6 text-center text-slate-600">
                      <p className="mb-4 text-lg font-semibold text-slate-800">Connect your YouTube API key</p>
                      <p className="text-sm">Pass an <code>apiKey</code> and either a <code>channelId</code> or <code>handle</code> to render latest videos dynamically. Or provide a <code>playlistId</code> as a no-key fallback.</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">Never leave the page</h3>
                <p className="mt-2 text-sm text-slate-600">With inline playback and search, visitors can binge content without pogo-sticking to YouTube. Great for dwell time and conversions.</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>SEO JSON‑LD for top videos</li>
                  <li>Fast, responsive grid</li>
                  <li>Playlist fallback (no API key)</li>
                  <li>Zero-config Tailwind styles</li>
                </ul>
              </div>
            </Card>
          </div>
        )}
      </Section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -right-3 -top-3 z-10 rounded-full bg-white p-2 shadow"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                src={embedSrc}
                title="YouTube video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <JsonLd videos={videos} />
    </div>
  );
}
