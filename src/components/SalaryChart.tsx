import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { CheckCircle2, TrendingUp, MapPin } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ACCENT = "#00bfff";

const salaryData = [
  { name: "25th%ile", value: 115, color: "#94a3b8" },
  { name: "Median", value: 161.5, color: ACCENT },
  { name: "75th%ile", value: 225, color: "#059669" },
  { name: "90th%ile", value: 300, color: "#7c3aed" },
];

const companyData = [
  {
    company: "Netflix",
    location: "San Francisco, CA",
    level: "L5",
    title: "Web Development (Front-End)",
    experience: "10 yrs",
    compensation: "$430,000",
    breakdown: "430K | N/A | N/A",
    verified: true,
  },
  {
    company: "Sumo Logic",
    location: "San Francisco, CA",
    level: "Senior II",
    title: "Web Development (Front-End)",
    experience: "10 yrs",
    compensation: "$216,000",
    breakdown: "216K | N/A | N/A",
    verified: false,
  },
  {
    company: "The Home Depot",
    location: "Atlanta, GA",
    level: "SWE II",
    title: "Web Development (Front-End)",
    experience: "5 yrs",
    compensation: "$142,000",
    breakdown: "128K | 12K | 2K",
    verified: false,
  },
  {
    company: "Amazon",
    location: "Seattle, WA",
    level: "SDE II",
    title: "Web Development (Front-End)",
    experience: "7 yrs",
    compensation: "$174,000",
    breakdown: "154K | 19K | N/A",
    verified: true,
  },
  {
    company: "Google",
    location: "Mountain View, CA",
    level: "L4",
    title: "Web Development (Front-End)",
    experience: "8 yrs",
    compensation: "$360,000",
    breakdown: "195K | 115K | 50K",
    verified: true,
  },
  {
    company: "Cisco",
    location: "San Jose, CA",
    level: "SWE III",
    title: "Web Development (Front-End)",
    experience: "10 yrs",
    compensation: "$250,000",
    breakdown: "178K | 56K | 16K",
    verified: false,
  },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
        <p className="text-sm font-semibold text-slate-900">{payload[0].payload.name}</p>
        <p className="text-lg font-bold" style={{ color: payload[0].payload.color }}>
          ${payload[0].value}K
        </p>
      </div>
    );
  }
  return null;
};

export default function SalaryChart() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium mb-4" style={{ borderColor: ACCENT, color: ACCENT, backgroundColor: `${ACCENT}15` }}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified by levels.fyi, Google & Indeed
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Web Development (Front-End) Salary
          </h2>
          <p className="text-sm text-slate-600 uppercase tracking-wide">SOFTWARE ENGINEER</p>
        </div>

        {/* Main Stats */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-2xl p-6" style={{ backgroundColor: `${ACCENT}10` }}>
            <div className="text-5xl md:text-6xl font-extrabold mb-2" style={{ color: ACCENT }}>
              $161,500
            </div>
            <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Median Total Compensation
            </div>
          </div>
        </motion.div>

        {/* Percentile Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {salaryData.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
            >
              <div className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                ${item.value}K
              </div>
              <div className="text-xs text-slate-600 font-medium">{item.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-6"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" style={{ color: ACCENT }} />
            Salary Distribution
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salaryData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 12 }} tickFormatter={(value) => `$${value}K`} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 191, 255, 0.05)" }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {salaryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Company Data Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="rounded-xl border border-slate-200 overflow-hidden"
        >
          <div className="bg-slate-900 px-6 py-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: ACCENT }} />
              Real Compensation Data
            </h3>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="font-bold text-slate-900">Company</TableHead>
                  <TableHead className="font-bold text-slate-900">Level</TableHead>
                  <TableHead className="font-bold text-slate-900">Experience</TableHead>
                  <TableHead className="font-bold text-slate-900 text-right">Total Comp</TableHead>
                  <TableHead className="font-bold text-slate-900 text-right">Base | Stock | Bonus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companyData.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.05, duration: 0.3 }}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900">{row.company}</span>
                        {row.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ACCENT }} />
                        )}
                      </div>
                      <div className="text-xs text-slate-500">{row.location}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm font-semibold text-slate-900">{row.level}</div>
                      <div className="text-xs text-slate-500">{row.title}</div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-700">{row.experience}</TableCell>
                    <TableCell className="text-right">
                      <div className="text-base font-bold" style={{ color: ACCENT }}>
                        {row.compensation}
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-xs text-slate-600 font-mono">
                      {row.breakdown}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-slate-500">
          Data verified and aggregated from levels.fyi, Google, and Indeed • Updated 10/10/2025
        </div>
      </div>
    </section>
  );
}
