import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { NotFoundPage } from './NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <article className="project-page">
      <Link className="back-link" to="/">
        <span aria-hidden="true">←</span> All projects
      </Link>

      <header className="project-page__header">
        <p className="eyebrow">Concept project · {project.year}</p>
        <h1>{project.title}</h1>
        <p className="project-page__summary">{project.summary}</p>
      </header>

      <img
        className="project-page__image"
        src={project.image}
        alt={`Abstract interface preview for ${project.title}`}
      />

      <div className="project-page__details">
        <aside aria-label="Project details">
          <div>
            <p className="detail-label">Role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="detail-label">Built with</p>
            <p>{project.technologies.join(', ')}</p>
          </div>
          {(project.liveUrl || project.repositoryUrl) && (
            <div className="project-links">
              {project.liveUrl && <a href={project.liveUrl}>Live site ↗</a>}
              {project.repositoryUrl && <a href={project.repositoryUrl}>Source code ↗</a>}
            </div>
          )}
        </aside>
        <section aria-labelledby="overview-title">
          <p className="eyebrow">Overview</p>
          <h2 id="overview-title">The idea behind the work</h2>
          <p>{project.description}</p>
          <p className="placeholder-note">
            This is placeholder portfolio content. Replace it with the problem,
            decisions, tradeoffs, and outcome from your real project.
          </p>
        </section>
      </div>
    </article>
  )
}
