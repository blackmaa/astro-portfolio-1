import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]



// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'English',
    institution: 'Universite Cheikh Anta Diop De Dakar',
    date: '2021 - 2024',
  },
  
  {
    title: 'Genie Logiciel',
    institution: 'Insttut Conficius De Dakar',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Createur de Contenu',
    institution: 'Terrcikhol',
    link: 'https://www.instagram.com/the_goumbala?igsh=MWxhNjNwdTE0Z2t6eg%3D%3D&utm_source=qr#',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Agence Pantone',
    location: 'Dakar Senegal',
    position: 'Software Engineer',
    start: '2024',
    link: 'https://www.instagram.com/agence_pantone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',

    tasks: [
      'Creation de site internet',
      'Creation de contenues sur les reseaux',
    ],
  },
 
]
