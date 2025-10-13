'use client';

import { Play } from 'lucide-react';

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Create unique faceless videos for every niche
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From Image generation to video generation, StoryShort can generate any style of video in seconds.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Life with dinosaurs - Large */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                  3:30
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">Life with dinosaurs</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Julius Caesar */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-red-600 via-orange-700 to-amber-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  2:45
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-red-300 text-xs font-semibold mb-1">JULIUS CAESAR?</p>
                  <h3 className="text-white font-bold text-sm">The Story of Julius Caesar</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Turn images into videos */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-blue-500 via-cyan-600 to-teal-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  1:20
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-bold text-sm">Turn images into videos</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Cleopatra */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  4:15
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-bold text-sm">The story of Cleopatra</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Apollo 11 */}
          <div className="group cursor-pointer">
            <div className="relative bg-gradient-to-br from-slate-600 via-gray-700 to-blue-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                    <Play className="h-6 w-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  3:30
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-white font-bold text-sm">Apollo 11 Moon Landing</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Japanese Ink Style - Large */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative bg-gradient-to-br from-red-900 via-black to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                  2:10
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-red-400 text-sm font-semibold mb-1">WHEN OCTAVIAN</p>
                  <h3 className="text-white font-bold text-xl">Japanese Ink Style</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
