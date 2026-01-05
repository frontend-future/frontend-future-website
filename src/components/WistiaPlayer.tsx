import { useEffect, useRef } from "react";

interface WistiaPlayerProps {
  mediaId: string;
  aspect?: string;
  seo?: string;
}

const WistiaPlayer = ({ mediaId, aspect = "1.7777777777777777", seo }: WistiaPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const player = document.createElement("wistia-player");
      player.setAttribute("media-id", mediaId);
      player.setAttribute("aspect", aspect);
      if (seo) {
        player.setAttribute("seo", seo);
      }
      containerRef.current.appendChild(player);

      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
      };
    }
  }, [mediaId, aspect, seo]);

  return (
    <>
      <style>{`wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
      <div ref={containerRef} />
    </>
  );
};

export default WistiaPlayer;
