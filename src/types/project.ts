export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  year: string
  role: string
  technologies: string[]
  image: string
  featured: boolean
  repositoryUrl?: string
  liveUrl?: string
}
