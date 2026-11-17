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
      <Link className="back-link" to="/work">
        <span aria-hidden="true">←</span> All projects
      </Link>

      <div className="project-page__layout">
        <div className="project-page__main">
          <header className="project-page__header">
            <p className="eyebrow">Project · {project.year}</p>
            <h1>{project.title}</h1>
            <p className="project-page__summary">{project.summary}</p>
          </header>

          <section className="project-page__overview" aria-labelledby="overview-title">
            <p className="eyebrow" id="overview-title">Overview</p>
            <p>{project.description}</p>
          </section>
        </div>

        <aside className="project-page__sidebar" aria-label="Project details">
          <img
            className="project-page__image"
            src={project.image}
            alt={`Abstract interface preview for ${project.title}`}
          />
          <div className="project-page__meta">
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
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live site ↗
                  </a>
                )}
                {project.repositoryUrl && (
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    Source code ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>
    </article>
  )
}
