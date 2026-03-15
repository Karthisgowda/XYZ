'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) {
      setShowSuccess(true)
      setEmail('')
      setTimeout(() => setShowSuccess(false), 3000)
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  return (
    <div className="layout-main">
      {/* Main Content Area */}
      <div className="layout-content">
        {/* Header Section */}
        <div className="fade-in-up mb-8">
          <h1 className="text-2xl font-semibold text-heading mb-2">Design System Showcase</h1>
          <p className="text-secondary">Modern, clean UI with advanced animations and interactions</p>
        </div>

        {/* Feedback Messages */}
        {showSuccess && (
          <div className="message-success">
            Welcome! Your email has been registered successfully.
          </div>
        )}
        {showError && (
          <div className="message-error">
            Please enter a valid email address.
          </div>
        )}

        {/* Cards Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-heading mb-4">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Modern Design', 'Smooth Animations', 'Clean Interface'].map((title, idx) => (
              <div key={idx} className="card fade-in-up">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-heading">{title}</h3>
                  <span className="text-sm bg-light px-3 py-1 rounded">Active</span>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Experience a beautiful and modern interface with smooth transitions
                </p>
                <button className="btn-primary text-sm">Learn More</button>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-heading mb-4">Button Components</h2>

          {/* Primary Buttons */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-label mb-3">Primary Buttons (Blue with Shine Effect)</h3>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">Click Me</button>
              <button className="btn-primary">Hover for Shine</button>
              <button className="btn-primary">Interactive Button</button>
            </div>
            <p className="text-secondary text-sm mt-3">Features: Gradient background, shine sweep on hover, lift animation</p>
          </div>

          {/* Action Buttons */}
          <div>
            <h3 className="text-lg font-medium text-label mb-3">Action Buttons (Green with Ripple)</h3>
            <button className="btn-action">Submit Application • Hover for Ripple Effect</button>
            <p className="text-secondary text-sm mt-3">Features: Full-width, expanding ripple on hover, smooth transitions</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-heading mb-4">Form Inputs</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <label className="text-label">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="focus:outline-none"
              />
            </div>
            <div>
              <label className="text-label">Email Address</label>
              <input
                type="email"
                placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:outline-none"
              />
            </div>
            <div>
              <label className="text-label">Message</label>
              <textarea
                placeholder="Your message here..."
                rows={4}
                className="focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-action">Send Message</button>
          </form>
        </div>

        {/* Animation Showcase */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-heading mb-4">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-semibold text-heading mb-3">Fade In Up</h3>
              <div className="fade-in-up bg-light px-4 py-8 rounded text-center">
                <p>Element fades in and slides up</p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-heading mb-3">Pulse</h3>
              <div className="pulse-animation bg-blue text-white w-16 h-16 mx-auto rounded flex items-center justify-center">
                ✓
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-heading mb-3">Loading Spin</h3>
              <div className="loading-spin bg-green text-white w-16 h-16 mx-auto rounded flex items-center justify-center">
                ⟳
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-heading mb-3">Hover Effect</h3>
              <div className="card hover:cursor-pointer">
                Hover over me to see lift effect
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-heading mb-4">Design Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Primary Blue', color: '#007bff' },
              { name: 'Success Green', color: '#28a745' },
              { name: 'Background', color: '#f8f9fa' },
              { name: 'Card White', color: '#ffffff' },
              { name: 'Text Dark', color: '#333333' },
              { name: 'Text Light', color: '#666666' },
              { name: 'Border', color: '#dee2e6' },
              { name: 'Success BG', color: '#d4edda' },
            ].map((token) => (
              <div key={token.name} className="card text-center">
                <div
                  className="w-full h-24 rounded mb-3 border"
                  style={{ backgroundColor: token.color }}
                />
                <p className="text-sm font-medium text-heading">{token.name}</p>
                <p className="text-xs text-secondary">{token.color}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-heading mb-4">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1>Heading 1 - 2rem</h1>
            </div>
            <div>
              <h2>Heading 2 - 1.75rem</h2>
            </div>
            <div>
              <h3>Heading 3 - 1.5rem</h3>
            </div>
            <div>
              <p className="text-base">Body text - Regular paragraph with line height for readability</p>
            </div>
            <div>
              <p className="text-secondary text-sm">Secondary text - Smaller, lighter color for supporting content</p>
            </div>
          </div>
        </div>

        {/* Spacing & Layout Utilities */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-heading mb-4">Utilities & Spacing</h2>
          <div className="space-y-4">
            <div className="card">
              <div className="flex gap-2 mb-3">
                <div className="bg-blue text-white px-2 py-1 rounded text-xs font-medium">flex</div>
                <div className="bg-blue text-white px-2 py-1 rounded text-xs font-medium">gap-2</div>
                <div className="bg-blue text-white px-2 py-1 rounded text-xs font-medium">justify-center</div>
              </div>
              <p className="text-secondary text-sm">Flexbox utilities for modern layouts</p>
            </div>
            <div className="card p-xl">
              <p className="text-secondary text-sm">Padding large (20px) - p-xl class applied</p>
            </div>
            <div className="card m-lg">
              <p className="text-secondary text-sm">Margin large (16px) - m-lg class applied</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="layout-sidebar">
        <div className="sticky top-0">
          <h3 className="text-lg font-semibold text-heading mb-4">Quick Links</h3>

          <div className="space-y-3 mb-8">
            <div className="card p-md cursor-pointer hover:border-blue">
              <p className="font-medium text-heading">Components</p>
              <p className="text-xs text-secondary">Cards, Buttons, Forms</p>
            </div>
            <div className="card p-md cursor-pointer hover:border-blue">
              <p className="font-medium text-heading">Colors</p>
              <p className="text-xs text-secondary">Design tokens palette</p>
            </div>
            <div className="card p-md cursor-pointer hover:border-blue">
              <p className="font-medium text-heading">Animations</p>
              <p className="text-xs text-secondary">Keyframes & transitions</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold text-label mb-3">Design Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary">Colors</span>
                <span className="font-medium text-heading">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Components</span>
                <span className="font-medium text-heading">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Animations</span>
                <span className="font-medium text-heading">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Utilities</span>
                <span className="font-medium text-heading">40+</span>
              </div>
            </div>
          </div>

          <div className="border-t mt-4 pt-4">
            <p className="text-xs text-secondary mb-3">Built with modern CSS and React</p>
            <Link href="/">
              <button className="btn-primary w-full text-sm">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
