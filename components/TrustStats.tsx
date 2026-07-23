"use client";

import { statistics } from "@/data/doctorData";
import { Award, Users, HeartPulse, CheckCircle2 } from "lucide-react";
import CounterTrustStats from "./CounterTrustStats";

export default function TrustStats() {
  // Map icons to the 4 stats in sequence
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <Award className="w-5 h-5 text-medical-600" aria-hidden="true" />
        );
      case 1:
        return (
          <Users className="w-5 h-5 text-medical-600" aria-hidden="true" />
        );
      case 2:
        return (
          <HeartPulse className="w-5 h-5 text-medical-600" aria-hidden="true" />
        );
      case 3:
      default:
        return (
          <CheckCircle2
            className="w-5 h-5 text-medical-600"
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <section
      id="statistics"
      className="bg-white py-12 border-y border-slate-100 relative z-20"
      aria-label="Clinical Trust Metrics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap  justify-around gap-3 md:gap-0.5 lg:gap-12 ">
          {statistics.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-2 lg:px-6 first:pl-0 last:pr-0 "
            >
              {/* Icon Container */}
              <div className="bg-medical-50 p-2.5 rounded-xl text-medical-700 mb-4 inline-flex">
                {getIcon(idx)}
              </div>

              <CounterTrustStats value={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <p className="text-slate-500 text-[10px] sm:text-sm font-semibold tracking-wide uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
