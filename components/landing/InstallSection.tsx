'use client'

import { useState } from 'react'
import Image from "next/image"
import { SyntaxHighlighter } from '../SyntaxHighlighter'

const scriptCode = `<script 
  async 
  src="https://cdn.openfeed.ink/widget/v1/widget.iife.js" 
  data-project-id="your-project-id">
</script>`

const npmCode = `npm install @openfeed-ink/widget

import { OpenFeed } from '@openfeed-ink/widget'

<OpenFeed projectId="your-slug" />`

export function InstallSection() {
  const [activeTab, setActiveTab] = useState<'script' | 'npm'>('script')

  return (
    <div className="w-full text-white rounded-2xl shadow-xl flex flex-col md:flex-row gap-8">
      {/* LEFT: IMAGE (bigger) */}
      <div className="flex-4 min-w-0">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse -z-10" />

          <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="p-0">
              <Image
                src="/widget-builder.png"
                alt="Widget Builder Dashboard"
                width={1000}
                height={700}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: CODE */}
      <div className="flex-2 min-w-0">
        <h3 className="text-3xl font-bold mb-2">Install in 30 seconds</h3>
        <p className="text-gray-300 mb-6">
          Never touch it again. All customization from your dashboard.
        </p>

        <div className="space-y-4">
          <div className="flex gap-2 border-b border-slate-700">
            <button
              onClick={() => setActiveTab('script')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'script' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-gray-200'}`}
            >
              Script tag
            </button>
            <button
              onClick={() => setActiveTab('npm')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === 'npm' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-400 hover:text-gray-200'}`}
            >
              npm / React
            </button>
          </div>

          <div className="min-w-0">
            {activeTab === 'script' && (
              <SyntaxHighlighter language="html" code={scriptCode} />
            )}
            {activeTab === 'npm' && (
              <SyntaxHighlighter language="bash" code={npmCode} />
            )}

            <p className="text-xs text-gray-400 mt-3">
              That's it. Change colors, enable tabs, update branding — all from your dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>)
}
