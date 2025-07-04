export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Rocket Game',
    description:
      'Simple rocket game built with three.js, HTML, and CSS.',
    logo: '/logos/rocket.svg',
    link: 'https://github.com/reydstry/Rocket-Game',
    slug: 'Rocket Game',
  },
  {
    title: 'Search Engine',
    description:
      'A simple search engine developed in Java using JavaFX, implementing efficient data structures and algorithms.',
    logo: '/logos/search.svg',
    link: 'https://github.com/reydstry/Search-Engine',
    slug: 'Search Engine',
  },
  {
    title: 'Djiktra and PSO Algorithm',
    description:
      ' A visualization of Dijkstra algorithm and Particle Swarm Optimization (PSO) algorithm using JavaScript.',
    logo: '/logos/djiktra.svg',
    link: 'https://github.com/reydstry/DJikstra-and-PSO-Algortihm',
    slug: 'Djiktra and PSO Algorithm',
  },
  {
    title: 'Pharmacy POS',
    description:
      'A pharmacy point of sale system built with Java and JavaFX, featuring inventory management and Cashier.',
    logo: '/logos/pills.svg',
    link: 'https://github.com/reydstry/Pharmacy-POS.git',
    slug: 'Pharmacy POS',
  },
];
