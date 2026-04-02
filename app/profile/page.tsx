"use client";

import StatusBar from "@/components/StatusBar";
import AppHeader from "@/components/AppHeader";
import GlassNav from "@/components/GlassNav";
import HomeIndicator from "@/components/HomeIndicator";
import TransitionWrapper from "@/components/TransitionWrapper";
import { user, savedItems } from "@/lib/districtData";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="relative h-full flex flex-col">
      <StatusBar />
      <AppHeader />

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <TransitionWrapper>
          {/* Profile hero */}
          <div className="px-6 pt-4 pb-8">
            <div className="w-20 h-20 rounded-full bg-brand-card border border-brand-border flex items-center justify-center">
              <span className="font-black text-4xl">{user.initial}</span>
            </div>
            <h1 className="text-2xl font-black mt-4">{user.name}</h1>
            <p className="font-mono text-xs text-brand-gray">
              Flynet {user.orbitTier} · New York
            </p>
            <span className="inline-block bg-brand-terracotta/10 border border-brand-terracotta/20 text-brand-terracotta font-mono text-[10px] uppercase px-3 py-1 rounded-full mt-2">
              {user.orbitTier} Tier · {user.flynetId}
            </span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 border-y border-brand-border py-6 my-6 mx-6">
            <div className="text-center">
              <p className="text-2xl font-black">{user.citiesVisited}</p>
              <p className="font-mono text-[10px] text-brand-gray uppercase tracking-widest">Cities Visited</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black">{user.flySpent.toLocaleString()}</p>
              <p className="font-mono text-[10px] text-brand-gray uppercase tracking-widest">
                <span className="font-script text-brand-orange">$FLY</span> Spent
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black">{user.experiences}</p>
              <p className="font-mono text-[10px] text-brand-gray uppercase tracking-widest">Experiences</p>
            </div>
          </div>

          {/* Taste fingerprint */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Your Taste Profile</h2>
            <div className="flex flex-wrap gap-2">
              {user.tasteTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`bg-brand-card border rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-widest ${
                    i === 0
                      ? "border-brand-terracotta text-brand-terracotta"
                      : "border-brand-border text-brand-white"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cities visited */}
          <div className="px-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Cities</h2>
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-3">
                {user.cities.map((city) => (
                  <div
                    key={city.name}
                    className="bg-brand-card border border-brand-border rounded-2xl px-5 py-3 whitespace-nowrap"
                  >
                    <p className="font-bold text-sm">{city.name}</p>
                    <p className="font-mono text-[10px] text-brand-gray">{city.visits} visits</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Saved experiences */}
          <div className="px-6 pb-8">
            <h2 className="text-lg font-bold mb-4">Saved</h2>
            <div className="flex flex-col gap-3">
              {savedItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/experience/${item.id}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-brand-border">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover img-editorial"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="font-mono text-xs text-brand-gray">{item.neighborhood}</p>
                  </div>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="white" stroke="white" strokeWidth="1.5">
                    <path d="M1 2.5A1.5 1.5 0 012.5 1h9A1.5 1.5 0 0113 2.5V15l-6-3.5L1 15V2.5z" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </TransitionWrapper>
      </div>

      <GlassNav />
      <HomeIndicator />
    </div>
  );
}
