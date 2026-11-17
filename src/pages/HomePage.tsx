import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import catsImage from '../assets/about-cats.jpeg'
import { highlights } from '../data/highlights'
import { projects } from '../data/projects'

// Replace this text, or set it to an empty string to hide the caption.
const catPhotoCaption: string = 'My project managers'
const contactEmail = 'vidhathri.urala@gmail.com'

function EmailIcon() {
  return (
    <svg className="contact-button__icon" viewBox="0 0 20 20" aria-hidden="true">
      <rect x="2.5" y="4" width="15" height="12" rx="2" />
      <path d="m4 6 6 5 6-5" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg className="contact-button__icon" viewBox="0 0 20 20" aria-hidden="true">
      <rect x="6" y="6" width="11" height="11" rx="2" />
      <path d="M14 6V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="contact-button__icon" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="5" cy="5" r="1.5" className="contact-button__icon-fill" />
      <path className="contact-button__icon-fill" d="M3.7 8h2.6v8H3.7zM9 8h2.5v1.1c.8-1 1.8-1.4 3-1.4 2.2 0 3.5 1.4 3.5 4.2V16h-2.7v-3.8c0-1.3-.5-2.1-1.6-2.1-1.2 0-1.9.8-1.9 2.3V16H9z" />
    </svg>
  )
}

export function HomePage() {
  const { pathname } = useLocation()
  const [copyEmailLabel, setCopyEmailLabel] = useState('Copy email')
  const featuredProjects = projects.filter((project) => project.featured)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopyEmailLabel('Copied!')
    } catch {
      setCopyEmailLabel('Copy failed')
    }
  }

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({ top: 0 })
      return
    }

    const sectionId = pathname.slice(1)
    document.getElementById(sectionId)?.scrollIntoView()
  }, [pathname])

  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-section__intro">
          <p className="eyebrow hero-kicker">Hi there! I’m</p>
          <div className="hero-title-group">
            <h1 className="hero-name" id="hero-title">
              Vidhathri Kota<span className="hero-name__dot" aria-hidden="true">.</span>
            </h1>
            <p className="hero-description">
              I'm a software engineer working across mobile and web applications, with a
              background in data science.
            </p>
          </div>
        </div>
        <div className="hero-section__footer">
          <nav className="hero-links" aria-label="Social and contact links">
            <a
              href="https://www.linkedin.com/in/vidha3k/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/v3urala"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <Link to="/contact">Email me</Link>
          </nav>
          <Link className="round-link" to="/work" aria-label="Jump to selected work">
            ↓
          </Link>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <p className="eyebrow section-label" id="work-title">Selected work</p>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        className="highlights-section"
        id="experience"
        aria-labelledby="highlights-title"
      >
        <p className="eyebrow section-label" id="highlights-title">
          Beyond projects
        </p>
        <div className="highlight-list">
          {highlights.map((highlight) => (
            <article className="highlight-row" key={highlight.category}>
              <div className="highlight-meta">
                <p className="highlight-category">{highlight.category}</p>
                <p>{highlight.period}</p>
              </div>
              <div className="highlight-content">
                <p className="highlight-organization">{highlight.organization}</p>
                <h3>{highlight.title}</h3>
                <p className="highlight-summary">{highlight.summary}</p>
                {highlight.href && highlight.linkLabel && (
                  <a
                    className="text-link highlight-link"
                    href={highlight.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {highlight.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-section__aside">
          <p className="eyebrow" id="about-title">A little about me</p>
          <figure className="about-section__figure">
            <img
              className="about-section__photo"
              src={catsImage}
              alt="My two black cats relaxing on their cat tree by a sunny window"
            />
            {catPhotoCaption && (
              <figcaption className="about-section__caption">
                {catPhotoCaption}
              </figcaption>
            )}
          </figure>
        </div>
        <div className="about-section__copy">
          <p>
            I’m a software engineer who enjoys building things and solving
            problems. I like figuring out how things fit together, finding
            patterns, and digging into the details to understand what makes
            something work.
          </p>
          <p>
            My background is a bit of a mix. I’ve worked on mobile applications
            for medical devices, explored machine learning and natural language
            processing through academic research, and more recently started
            building my own web applications and AI-powered tools. I enjoy moving
            between different areas of software development, and I’m a big believer
            in learning by building. I like clean, thoughtful design,
            well-structured code, and the satisfaction of making something
            complicated feel simple.
          </p>
          <p>
            Outside of work, I enjoy hiking, working on a home or garden project,
            or snuggling with my two cats.
          </p>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">Let’s talk</p>
        <div className="contact-section__content">
          <h2 id="contact-title">
            Say hello<span className="hero-name__dot" aria-hidden="true">.</span>
          </h2>
          <p>
           I'm always happy to connect about interesting projects, new opportunities, or just talk tech. Feel free to reach out!
          </p>
          <div className="contact-actions">
            <div className="contact-email-row">
              <a
                className="contact-button"
                href={`mailto:${contactEmail}`}
              >
                <EmailIcon />
                Email me
              </a>
              <button
                className="contact-copy-button"
                type="button"
                aria-label={`Copy ${contactEmail}`}
                onClick={copyEmail}
              >
                <CopyIcon />
                <span aria-live="polite">{copyEmailLabel}</span>
              </button>
            </div>
            <a
              className="contact-button"
              href="https://www.linkedin.com/in/vidha3k/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
