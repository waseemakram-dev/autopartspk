"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GrowthPlanButton } from "./Button";

export default function Blog({ limit }: { limit?: number }) {
  const posts = [
    {
      id: "how-to-rank-on-adobe-stock-blog-card",
      date: "September 24, 2025",
      title: "How to Rank #1 on Adobe Stock with Smart AI Tags",
      description:
        "Master microstock SEO strategy: learn how optimal title lengths and 50 target keywords skyrocket your portfolio sales.",
      image:
        "https://framerusercontent.com/images/ZhlysEH1N7UsTHCFo1hQCsKqC0.png?width=1360&height=1096",
      href: "#blog-1",
    },
    {
      id: "automate-tagging-for-stock-photos-blog-card",
      date: "September 24, 2025",
      title: "Automate Tagging for 1,000+ Stock Photos in Minutes",
      description:
        "How stock photographers cut metadata entry time by 90% using batch CSV generation and AI prompt analysis.",
      image:
        "https://framerusercontent.com/images/iouoVtx5OlUe2s2lV1bhQQEP2c.png?width=1520&height=1096",
      href: "#blog-2",
    },
    {
      id: "ultimate-guide-to-microstock-csv-formats-blog-card",
      date: "September 24, 2025",
      title: "The Ultimate Guide to Microstock CSV Formats",
      description:
        "Everything you need to know about Adobe Stock, Shutterstock, and Freepik CSV specifications for error-free uploads.",
      image:
        "https://framerusercontent.com/images/M2y8gCVdzXfqCUXpsFBqVWTq2Q.png?width=1520&height=1096",
      href: "#blog-3",
    },
    {
      id: "ai-keyword-trend-analysis-stock-video-blog-card",
      date: "September 24, 2025",
      title: "AI Keyword Trend Analysis for Stock Video Contributors",
      description:
        "Discover high-demand search trends before competitors and optimize your footage for instant commercial sales.",
      image:
        "https://framerusercontent.com/images/Z0GWiEF8Uf0VyRYiTfjAv0L5Fg.png?width=1520&height=1096",
      href: "#blog-4",
    },
    {
      id: "zero-manual-data-entry-blog-card",
      date: "September 24, 2025",
      title: "Zero Manual Data Entry: The Future of Portfolio Tagging",
      description:
        "Why manual IPTC editing costs thousands in lost productivity and how AI visual recognition solves it instantly.",
      image:
        "https://framerusercontent.com/images/8pVzBjySLhw8t1yjZZzvkVXDyk.png?width=1520&height=1096",
      href: "#blog-5",
    },
    {
      id: "shutterstock-vs-adobe-stock-seo-blog-card",
      date: "September 24, 2025",
      title: "Shutterstock vs. Adobe Stock: Algorithmic Metadata Rules",
      description:
        "A deep dive into how different microstock search engines index titles, descriptions, and category tags.",
      image:
        "https://framerusercontent.com/images/ogwoNngvTSpvf85khbZfnuk1vs.png?width=1520&height=1096",
      href: "#blog-6",
    },
    {
      id: "optimizing-midjourney-art-stock-blog-card",
      date: "September 24, 2025",
      title: "Optimizing AI Midjourney Renders for Stock Marketplaces",
      description:
        "Step-by-step metadata workflow to get your AI-generated art accepted and monetized on top stock agencies.",
      image:
        "https://framerusercontent.com/images/znwnZ6ILUUFzvAg9JsKx6QryETk.png?width=1520&height=1096",
      href: "#blog-7",
    },
    {
      id: "vector-artists-guide-mass-tagging-blog-card",
      date: "September 24, 2025",
      title: "Vector Artists Guide: Mass Tagging SVG & EPS Assets",
      description:
        "How vector illustrators streamline metadata generation for complex graphic bundles using automated AI scripts.",
      image:
        "https://framerusercontent.com/images/g78qGpNlEfRTz5XUTrtiLhiKgac.png?width=1520&height=1096",
      href: "#blog-8",
    },
    {
      id: "5-title-keyword-mistakes-stock-blog-card",
      date: "September 24, 2025",
      title: "5 Common Title & Keyword Mistakes That Reduce Visibility",
      description:
        "Avoid keyword stuffing, spam tags, and vague descriptions that trigger rejection from stock review teams.",
      image:
        "https://framerusercontent.com/images/IE6wtrwiX9SQdoIprM2qQSkeI0.png?width=1520&height=1096",
      href: "#blog-9",
    },
  ];

  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <section
      id="blog"
      className="framer-bg44oo relative py-24 md:py-32 px-4 max-w-[1180px] mx-auto z-10 select-none"
      data-framer-name="Blog"
    >
      {/* 1. Header Section */}
      <div
        className="framer-qsk6sw flex flex-col items-start mb-16"
        data-framer-name="Header"
        id="blog-header"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-[40px] font-medium tracking-[-0.4px] leading-tight text-white mb-3 text-left"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Insights for{" "}
          <span className="font-serif-italic font-normal text-5xl md:text-[48px] text-[#fef9ff]">
            Stock Creators
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#cfcbd0] opacity-60 text-sm md:text-base font-normal max-w-xl text-left"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Stay ahead with microstock SEO strategies, AI tagging techniques, and workflow automation.
        </motion.p>
      </div>

      {/* 2. Blog Cards Grid (3 Columns) */}
      <div
        className="framer-d9kupf grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        data-framer-name="Content"
      >
        {displayedPosts.map((post, index) => (
          <motion.div
            key={post.id}
            id={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="framer-e2u7o6-container group relative rounded-[20px] bg-[#191919] border border-white/10 p-6 lg:p-7 flex flex-col justify-between overflow-hidden shadow-2xl transition-[border-color] duration-300 hover:border-white/25 cursor-pointer"
          >
            {/* Top Royal Blue Light Glow on Hover (Framer Ambient Light effect) */}
            <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#4555fd]/25 via-[#4555fd]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[20px] z-0" />
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#4555fd] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            {/* Framer Royal Blue Bottom Glow Shadow */}
            <div
              className="framer-1wm7c5n absolute -bottom-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500"
              data-framer-name="Shadow"
              style={{
                backgroundColor: "rgb(69, 85, 253)",
                filter: "blur(94.4px)",
                WebkitFilter: "blur(94.4px)",
              }}
            />

            {/* Top Text Content */}
            <div className="relative z-10 mb-6 flex-1 flex flex-col items-start text-left">
              {/* Date Badge */}
              <div
                className="framer-17k2pa6 inline-flex items-center px-4 py-1.5 rounded-full border border-[#4555fd] bg-[#191919] shadow-md mb-5"
                data-framer-name="Blog Subtitle"
              >
                <span
                  className="text-xs font-medium text-[#fef9ff] tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {post.date}
                </span>
              </div>

              {/* Title & Description */}
              <div className="framer-1u567o3" data-framer-name="Blog Title Description">
                <h3
                  className="text-xl lg:text-[22px] font-bold text-white tracking-tight leading-snug mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm text-[#cfcbd0] opacity-60 leading-relaxed font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {post.description}
                </p>
              </div>
            </div>

            {/* Bottom Image Container */}
            <div
              className="framer-1hzqmsj relative z-10 w-full h-[220px] rounded-[16px] overflow-hidden border border-white/10 shadow-lg mt-auto shrink-0"
              data-framer-name="Blog Image Wrapper"
            >
              {/* Blog Main Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Main Image Blur & Blue Shade (ONLY REVEALS ON CARD HOVER) */}
              <div
                className="framer-1g5e9hz absolute inset-0 rounded-[16px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2.5px] z-10"
                data-framer-name="Main Image Blur"
                style={{
                  background:
                    "linear-gradient(rgba(69, 85, 253, 0) 45%, rgba(69, 85, 253, 0.4) 100%)",
                }}
              />

              {/* Bottom-Centered Button: HIDDEN BY DEFAULT, SLIDES UP CENTERED AT THE BOTTOM ON CARD HOVER */}
              <div className="framer-1hzkmex-container absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center w-max opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 scale-95 group-hover:scale-100 transition-all duration-350 ease-out pointer-events-none group-hover:pointer-events-auto">
                <GrowthPlanButton text="Get My Growth Plan" href={post.href} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
