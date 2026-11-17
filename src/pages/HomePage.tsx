import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import catsImage from '../assets/about-cats.jpeg'
import { highlights } from '../data/highlights'
import { projects } from '../data/projects'

// Replace this text, or set it to an empty string to hide the caption.
const catPhotoCaption: string = 'My project managers'

export function HomePage() {
  const { pathname } = useLocation()
  const featuredProjects = projects.filter((project) => project.featured)

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
          <h1 className="hero-name" id="hero-title">
            Vidhathri Kota<span className="hero-name__dot" aria-hidden="true">.</span>
          </h1>
          <p className="hero-description">
            Software engineer working across mobile and web applications, with a
            background in data science.
          </p>
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
        <p className="eyebrow">Let’s connect</p>
        <div className="contact-section__content">
          <h2 id="contact-title">Have something in mind?</h2>
          <p>
            I’m always happy to talk about software, interesting problems, or new
            opportunities.
          </p>
          <a
            className="contact-email"
            href="mailto:vidhathri.urala@gmail.com"
          >
            vidhathri.urala@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  )
}
