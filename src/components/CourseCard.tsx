/**
 * CourseCard — shared card component used in PopularClasses and ClassesClient.
 * All card design lives here; both sections import this one component.
 */
"use client";

import { type ElementType } from "react";
import { motion, type Variants } from "framer-motion";
import { Star, Clock, User, ArrowRight } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────── */
export interface CourseCardData {
  /** Lucide icon component */
  icon: ElementType;
  iconColor: string;
  iconBg: string;

  title: string;
  desc?: string;           // optional — shown in Classes page view
  tag: string;
  tagColor: string;        // e.g. "bg-emerald-50 text-emerald-700"

  teacher?: string;        // optional — shown in Popular Classes view
  duration?: string;
  rating?: number;
  reviews?: number;
}

/* ─── Helper: Star Rating ────────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-3.5 h-3.5"
            fill={star <= Math.floor(rating) ? "#F59E0B" : "none"}
            stroke={star <= Math.floor(rating) ? "#F59E0B" : "#D1D5DB"}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-sm font-bold text-[#0F172A]">{rating.toFixed(1)}</span>
    </div>
  );
}

/* ─── Props ──────────────────────────────────────────────────────────── */
interface CourseCardProps {
  data: CourseCardData;
  /** Framer Motion variant — pass from parent stagger container */
  variants?: Variants;
  /** Extra className on the wrapper (e.g. hide on mobile) */
  className?: string;
}

/* ─── Component ──────────────────────────────────────────────────────── */
export default function CourseCard({ data, variants, className = "" }: CourseCardProps) {
  const Icon = data.icon;

  return (
    <motion.article
      variants={variants}
      className={`group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden
        hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1
        transition-all duration-300 ${className}`}
    >
      {/* ── Thumbnail ── */}
      <div
        className="w-full h-36 flex items-center justify-center flex-shrink-0 overflow-hidden"
        style={{ backgroundColor: data.iconBg }}
      >
        <Icon
          className="w-14 h-14 opacity-75 transition-transform duration-500 group-hover:scale-110"
          style={{ color: data.iconColor }}
          strokeWidth={1.3}
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-7 gap-3">
        {/* Tag */}
        <span className={`self-start text-[10px] font-bold px-3 py-1 rounded-full tracking-wide ${data.tagColor}`}>
          {data.tag}
        </span>

        {/* Title */}
        <h3 className="font-bold text-base text-[#0F172A] leading-snug tracking-tight group-hover:text-[#4C3BCF] transition-colors">
          {data.title}
        </h3>

        {/* Description (optional) */}
        {data.desc && (
          <p className="text-sm text-[#64748B] leading-relaxed flex-1">{data.desc}</p>
        )}

        {/* Teacher + Duration meta (optional) */}
        {(data.teacher || data.duration) && (
          <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
            {data.teacher && (
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[120px]">{data.teacher}</span>
              </span>
            )}
            {data.duration && (
              <span className="flex items-center gap-1.5 shrink-0 ml-auto">
                <Clock className="w-3.5 h-3.5" />
                {data.duration}
              </span>
            )}
          </div>
        )}

        {/* Rating row (optional) */}
        {data.rating !== undefined && (
          <div className="flex items-center justify-between">
            <StarRating rating={data.rating} />
            {data.reviews !== undefined && (
              <span className="text-xs text-slate-400">({data.reviews.toLocaleString()})</span>
            )}
          </div>
        )}

        {/* Divider before CTA */}
        <div className="border-t border-slate-100 mt-auto pt-4">
          <button
            className="w-full flex items-center justify-center gap-2 bg-[#4C3BCF] text-white
              font-bold py-3 rounded-xl text-sm
              hover:bg-[#3d2fb5] hover:shadow-lg hover:shadow-[#4C3BCF]/25
              transition-all group/btn"
          >
            පංතියට එක්වන්න
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
