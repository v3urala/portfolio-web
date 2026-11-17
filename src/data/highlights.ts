export interface Highlight {
  category: 'Industry' | 'Academic' | 'Research'
  title: string
  organization: string
  period: string
  summary: string
  href?: string
  linkLabel?: string
}

export const highlights: Highlight[] = [
  {
    category: 'Industry',
    title: 'Software Engineer II',
    organization: 'Medtronic Inc',
    period: 'Jan 2021–Nov 2024',
    summary:
      'Built patient- and clinician-facing mobile applications for an implantable medical device using Kotlin and KMP, owning Bluetooth recharger state logic and contributing shared workflows across Android and iOS. Supported design verification before FDA submission and identified a pre-submission defect through end-to-end testing.',
  },
  {
    category: 'Academic',
    title: 'Social Media Activism Analysis',
    organization: 'Harrisburg University',
    period: 'Sep–Dec 2024',
    summary:
      'Analyzed nearly 15,000 public posts from the #BlackLivesMatter and #MeToo movements through Python NLP pipelines for topic modeling, sentiment analysis, and clustering. Compared SVM and Naïve Bayes classifiers using TF-IDF and Word2Vec, reaching 82% and 92% accuracy on the respective datasets.',
  },
  {
    category: 'Research',
    title:
      'A Computational View of Emotional Regulation of Disgust using Multimodal Sensors',
    organization: 'Rochester Institute of Technology',
    period: 'Aug 2019–Dec 2020',
    summary:
      'Co-authored research (IEEE FG 2020) analyzing multimodal physiological data from 21 participants. Built SVM and GRU models that identified cognitive reappraisal as physiologically distinct from suppression and free expression in GSR data.',
    href: 'https://ieeexplore.ieee.org/document/9320269',
    linkLabel: 'Read the paper',
  },
]
