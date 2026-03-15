'use client'

import { useMemo, useState } from 'react'

type Job = {
  id: number
  title: string
  company: string
  location: string
  stipend: string
  mode: 'Remote' | 'Hybrid' | 'On-site'
  duration: string
  applicants: number
  tags: string[]
  posted: string
  verified: boolean
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Intern (React + Next.js)',
    company: 'SkillSpark Labs',
    location: 'Bengaluru',
    stipend: '₹25,000 / month',
    mode: 'Hybrid',
    duration: '6 months',
    applicants: 241,
    tags: ['Immediate Start', 'Certificate', 'PPO'],
    posted: '1 day ago',
    verified: true,
  },
  {
    id: 2,
    title: 'UI/UX Design Intern',
    company: 'PixelForge Studio',
    location: 'Remote',
    stipend: '₹18,000 / month',
    mode: 'Remote',
    duration: '4 months',
    applicants: 189,
    tags: ['Portfolio Review', 'Flexible Hours'],
    posted: '3 days ago',
    verified: true,
  },
  {
    id: 3,
    title: 'Product Analyst Intern',
    company: 'CampusHire Tech',
    location: 'Mumbai',
    stipend: '₹30,000 / month',
    mode: 'On-site',
    duration: '3 months',
    applicants: 122,
    tags: ['Mentorship', 'Pre-placement Interview'],
    posted: '5 days ago',
    verified: false,
  },
]

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeJobId, setActiveJobId] = useState(jobs[0].id)
  const [search, setSearch] = useState('')
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const filteredJobs = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return jobs

    return jobs.filter((job) =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.tags.some((tag) => tag.toLowerCase().includes(term)),
    )
  }, [search])

  const activeJob = filteredJobs.find((job) => job.id === activeJobId) ?? filteredJobs[0] ?? jobs[0]

  const handleApply = () => {
    if (!activeJob) {
      setShowError(true)
      setTimeout(() => setShowError(false), 2500)
      return
    }

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2500)
  }

  const toggleSaved = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  return (
    <div className={`layout-main ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />
      <main className="layout-content">
        <section className="hero-card fade-in-up glass-layer">
          <div>
            <p className="eyebrow">Internship Discovery Experience</p>
            <h1>Attractive, animated internship board built for quick decisions.</h1>
            <p className="text-secondary">
              Find roles with trust signals, animated interactions, and a cleaner journey from discovery to apply.
            </p>
            <div className="hero-chip-row">
              <span className="hero-chip pop-in">🔥 Trending Roles</span>
              <span className="hero-chip pop-in">⚡ Fast Apply</span>
              <span className="hero-chip pop-in">✅ Verified Recruiters</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary btn-pop" onClick={() => setIsDarkMode((prev) => !prev)}>
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <button className="btn-action btn-pop" onClick={handleApply}>Quick Apply to Highlighted Role</button>
          </div>
        </section>

        {showSuccess && <div className="message-success">Application submitted successfully. Recruiter will contact you soon.</div>}
        {showError && <div className="message-error">No job selected. Please choose a card first.</div>}

        <section className="filters-row fade-in-up" style={{ animationDelay: '0.1s' }}>
          <input
            type="text"
            placeholder="Search by role, company, or keyword..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select defaultValue="Any Duration">
            <option>Any Duration</option>
            <option>1-3 months</option>
            <option>3-6 months</option>
            <option>6+ months</option>
          </select>
          <select defaultValue="All Modes">
            <option>All Modes</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>
        </section>

        <section className="job-grid">
          {filteredJobs.map((job, index) => {
            const isActive = job.id === activeJob?.id
            const isSaved = savedJobs.includes(job.id)

            return (
              <article
                key={job.id}
                className={`card fade-in-up ${isActive ? 'active' : ''} glow-hover`}
                style={{ animationDelay: `${0.15 + index * 0.08}s` }}
                onClick={() => setActiveJobId(job.id)}
              >
                <div className="card-top-row">
                  <h3>{job.title}</h3>
                  <button
                    className={`bookmark-btn ${isSaved ? 'saved pulse-animation' : ''}`}
                    onClick={(event) => {
                      event.stopPropagation()
                      toggleSaved(job.id)
                    }}
                  >
                    {isSaved ? 'Saved' : 'Save'}
                  </button>
                </div>
                <p className="company-text">
                  {job.company} • {job.location} {job.verified ? '• ✅ Verified' : ''}
                </p>
                <div className="meta-row">
                  <span>{job.mode}</span>
                  <span>{job.duration}</span>
                  <span>{job.stipend}</span>
                </div>
                <div className="tag-row">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
                <div className="card-footer">
                  <small>{job.posted}</small>
                  <small>{job.applicants}+ applicants</small>
                </div>
              </article>
            )
          })}
        </section>

        <section className="card insights-panel fade-in-up glass-layer">
          <div>
            <h2>Live application activity</h2>
            <p className="text-secondary">See what helps candidates stand out and improve your selection strategy.</p>
          </div>
          <div className="insights-metrics">
            <div>
              <strong>84%</strong>
              <span>Profiles with portfolio links shortlisted</span>
            </div>
            <div>
              <strong className="loading-spin">⟳</strong>
              <span>Auto-refreshing candidate insights</span>
            </div>
            <div>
              <strong>4.8/5</strong>
              <span>Average internship satisfaction score</span>
            </div>
          </div>
        </section>
      </main>

      <aside className="layout-sidebar">
        <div className="sidebar-sticky">
          <h3>Selected Internship</h3>
          <div className="card selected-preview glass-layer">
            <p className="text-label">{activeJob?.title ?? 'No role selected'}</p>
            <p className="text-secondary">{activeJob?.company}</p>
            <ul>
              <li>📍 {activeJob?.location}</li>
              <li>💼 {activeJob?.mode}</li>
              <li>💰 {activeJob?.stipend}</li>
            </ul>
            <button className="btn-action btn-pop" onClick={handleApply}>Apply Now</button>
          </div>

          <div className="card progress-card">
            <h4>Application Journey</h4>
            <div className="progress-step done">Profile Completed</div>
            <div className="progress-step done">Resume Uploaded</div>
            <div className="progress-step active-step">Skill Match Check</div>
            <div className="progress-step">Recruiter Review</div>
          </div>

          <div className="card">
            <h4>Quick Stats</h4>
            <p className="text-secondary">Saved jobs: {savedJobs.length}</p>
            <p className="text-secondary">Roles showing today: {filteredJobs.length}</p>
            <p className="text-secondary">Mode: {isDarkMode ? 'Dark' : 'Light'}</p>
          </div>
        </div>
      </aside>
    </div>
  )
}
