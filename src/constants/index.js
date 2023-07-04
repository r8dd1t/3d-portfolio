import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    boosta,
    weplay,
    starbucks,
    tesla,
    geekwiki,
    free,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    blender,
    photoshop,
    aftereffects,
    musiic,
    art,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "3D Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "aftereffects",
      icon: aftereffects,
    },
    {
      name: "blender",
      icon: blender,
    },
  ];
  
  const experiences = [
    {
      title: "SMM/ORM Manager",
      company_name: "Boosta",
      icon: boosta,
      iconBg: "#fe5832",
      date: "May 2017 - November 2018",
      points: [
        "Developing and implementing effective strategies to drive traffic and increase engagement for a website or online platform.",
        "Working closely with cross-functional teams, including Production, Design, and Analysts, to streamline operations, improve processes, and execute integrated marketing campaigns.",
        "Utilizing various analytics software tools (e.g., Google Analytics, Google Data Studio, Facebook Analytics, Facebook Audience Insights, Hotjar) to analyze audience data and evaluate the success of marketing campaigns.",
        "Planing and managing paid advertising campaigns on popular platforms such as Facebook, Reddit, Imgur, and YouTube.",
      ],
    },
    {
      title: "SMM Team Lead",
      company_name: "WePlay Esports",
      icon: weplay,
      iconBg: "#00b6e6",
      date: "November 2018 - Sep 2022",
      points: [
        "Overseeing a team of 3 social media managers and coordinating their activities.",
        "Planning and executing marketing campaigns to support product launches, events, tournaments, contests, and other marketing initiatives.",
        "Collaborating closely with production, design, and analytics teams to enhance workflow, processes, and overall campaign execution.",
        "Efficiently managing online communities, ensuring a positive and interactive environment.",
      ],
    },
    {
      title: "YouTube Content Creator",
      company_name: "GeekWiki",
      icon: geekwiki,
      iconBg: "#fee401",
      date: "November 2021 - ...",
      points: [
        "12 771 629 views.",
        "156.8k hours of watch",
        "11k subscribers.",
        "Managing and optimizing the YouTube channel, including uploading videos, creating and organizing content in an appealing and user-friendly manner. Audience Engagement.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: free,
      iconBg: "#0cad00",
      date: "Jan 2022 - Present",
      points: [
        "Utilizing React.js and associated technologies to create and sustain web applications.",
        "Engaging in cross-functional collaboration with designers, product managers, and fellow developers to deliver top-notch products.",
        "Enforcing responsive design principles and guaranteeing compatibility across different web browsers.",
        "Actively participating in code reviews and offering valuable feedback to enhance the work of fellow developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Musiic",
      description:
        "The music app, utilizing the Shazam API, revolutionizes the music discovery experience for enthusiasts. It offers a variety of ways to explore and find new music, including categories like Around You, Top Charts, and Top Artists. Additionally, users have the freedom to dive into their preferred genres, ensuring a personalized music journey.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: musiic,
      source_code_link: "https://musiicapp.netlify.app/",
    },
    {
      name: "Art",
      description:
        "Step into a nostalgic world of vibrant comic book art with my web portfolio showcasing a collection of old-school style covers.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: art,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };