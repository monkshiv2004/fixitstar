"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ShieldCheck,
  MapPinned,
  Sparkles,
  Activity,
  BellRing,
  ScanSearch,
  ChevronRight,
  Star,
  Building2,
  Users,
  BrainCircuit,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900 dark:bg-[#020617] dark:text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-30 overflow-hidden">
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />

        {/* GLOWS */}
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-[#020617]/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                FixIt
              </div>

              <div className="text-[11px] text-muted-foreground">
                Civic Intelligence Platform
              </div>
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Features
            </Link>

            <Link
              href="#how"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              How It Works
            </Link>

            <Link
              href="#stats"
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-xl"
              asChild
            >
              <Link href="/login/citizen">
                Citizen Login
              </Link>
            </Button>

            <Button
              className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/20"
              asChild
            >
              <Link href="/login/admin">
                Admin Portal
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 px-4 py-24 md:grid-cols-2 md:px-6">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <Sparkles className="h-4 w-4" />
              AI-Powered Governance Infrastructure
            </div>

            {/* HEADING */}
            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Smarter Cities.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                Faster Civic Action.
              </span>
            </h1>

            {/* TEXT */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              FixIt transforms civic issue reporting into
              intelligent governance workflows using AI,
              geospatial intelligence, and real-time
              analytics.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-base shadow-xl shadow-blue-500/20 transition hover:scale-[1.02]"
                asChild
              >
                <Link href="/citizen/dashboard/report">
                  Report an Issue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8 text-base"
                asChild
              >
                <Link href="#features">
                  Explore Features
                </Link>
              </Button>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-5">
              {[
                ["12K+", "Issues Resolved"],
                ["98%", "AI Accuracy"],
                ["24/7", "Monitoring"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="text-2xl font-black">
                    {value}
                  </div>

                  <div className="mt-1 text-sm text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT DASHBOARD MOCKUP */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

            {/* PANEL */}
            <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white/70 p-6 shadow-[0_10px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.03]">
              {/* TOP */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">
                    Governance Dashboard
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Real-time civic intelligence
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                  <span className="text-xs font-semibold text-emerald-600">
                    Live
                  </span>
                </div>
              </div>

              {/* MOCK CARDS */}
              <div className="space-y-4">
                {[
                  {
                    icon: MapPinned,
                    title:
                      "Pothole Cluster Detected",
                    subtitle:
                      "14 reports near school zone",
                  },

                  {
                    icon: BellRing,
                    title:
                      "High Severity Alert",
                    subtitle:
                      "Waterlogging in Sector 12",
                  },

                  {
                    icon: BrainCircuit,
                    title:
                      "AI Priority Analysis",
                    subtitle:
                      "Immediate intervention suggested",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold">
                        {item.title}
                      </div>

                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.subtitle}
                      </div>
                    </div>

                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </div>

              {/* ANALYTICS */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Activity className="h-4 w-4" />
                    Resolution Rate
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    94%
                  </div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-violet-500/10 to-pink-500/10 p-5 dark:border-white/10">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ScanSearch className="h-4 w-4" />
                    AI Detection
                  </div>

                  <div className="mt-2 text-3xl font-black">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Platform Capabilities
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Built for Modern Urban Governance
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title:
                  "AI Classification",
                text:
                  "Automatically detects issue categories, severity levels, and urgency using multimodal intelligence.",
              },

              {
                icon: MapPinned,
                title:
                  "Geospatial Intelligence",
                text:
                  "Interactive heatmaps, clustering, and location-aware civic analytics for smarter interventions.",
              },

              {
                icon: Users,
                title:
                  "Citizen Collaboration",
                text:
                  "Community-driven reporting, upvoting, and transparent issue tracking workflows.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-[32px] border border-black/5 bg-white/70 p-8 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10">
                  <item.icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-10">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-black/5 bg-gradient-to-br from-blue-600 to-violet-600 p-14 text-white shadow-[0_10px_80px_rgba(59,130,246,0.35)]">
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
                <Building2 className="h-4 w-4" />
                Smart Governance Infrastructure
              </div>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Build Cleaner,
                <br />
                Smarter Cities.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
                Empower citizens and authorities with
                AI-driven civic intelligence and real-time
                governance analytics.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-2xl bg-white px-8 text-base text-blue-600 hover:bg-blue-50"
                  asChild
                >
                  <Link href="/login/citizen">
                    Citizen Portal
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-2xl border-white/20 bg-white/10 px-8 text-base text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/login/admin">
                    Admin Dashboard
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
