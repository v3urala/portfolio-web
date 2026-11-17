import { Link } from 'react-router-dom'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link className="project-visual" to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
        <img src={project.image} alt="" />
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>0{index + 1}</span>
          <span>{project.year}</span>
        </div>
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
