import paletteImage from '../assets/project-palette.svg'
import pmosPrepImage from '../assets/project-pmos-prep.svg'
import reccoImage from '../assets/project-recco.svg'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'recco',
    title: 'Recco',
    summary:
      'An AI-powered movie recommender that helps you find your next watch.',
    description:
      'A personalized movie recommendation app that goes beyond simple genre or similarity matching. Recco combines movie data from TMDB with Gemini-powered ranking to generate tailored recommendations based on user preferences. Built with Python and Streamlit, with SQLite for managing user profiles and preferences.',
    year: '2026',
    role: 'Design & Backend Development',
    technologies: [
      'Python',
      'Streamlit',
      'Gemini API',
      'TMDB API',
      'SQLite',
    ],
    image: reccoImage,
    repositoryUrl: 'https://github.com/bhuvana-sridhara/Recco',
    featured: true,
  },
  
  {
    slug: 'pmos-prep',
    title: 'PMOS Prep',
    summary:
      'An AI-assisted tool to help patients prepare for reproductive health appointments.',
    description:
      'A web application designed to make reproductive health appointments easier to prepare for. Users can provide relevant health information and receive an AI-generated report with a summary, suggested questions to ask their provider, and potential tests to discuss. Built with React and JavaScript, using the Gemini API for report generation and supporting PDF downloads. The app does not store user-submitted health information.',
    year: '2026',
    role: 'Design & Development',
    technologies: [
      'React',
      'JavaScript',
      'Gemini API',
      'Vercel',
    ],
    image: pmosPrepImage,
    liveUrl: 'https://pmos-prep.vercel.app/',
    featured: true,
  },

  {
    slug: 'palette',
    title: 'Palette',
    summary:
      'A small accessibility tool for building, testing, and sharing color systems.',
    description:
      'Palette is a concept for a fast, keyboard-friendly color workspace. The project focuses on immediate feedback, readable contrast results, and an interface that stays out of the way.',
    year: '2026',
    role: 'Frontend development',
    technologies: ['React', 'TypeScript', 'Web APIs'],
    image: paletteImage,
    featured: false,
  },
]
