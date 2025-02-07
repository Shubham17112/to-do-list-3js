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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    freelance,

   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Work",
      title: "Work",
    },
    {
      id: "Contact",
      title: "Contact",
    },
    {
      id: "https://www.google.co.in/",
      title: "Resume",
      link:''
    },
    {
      id: "https://www.google.co.in/",
      title: "CV",
      link:''
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Devloper",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: mobile,
    },
    {
      title: "Freelancer",
      icon: backend,
    },
    {
      title: "Data Anaylst",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  const certificates = [
    {
      title: 'Web Developer',
      issuer: 'Udemy',
      issueDate: 'June 2022',
      expirationDate: 'N/A', // or 'June 2024' if it expires
      description: 'A course covering full-stack web development including HTML, CSS, JavaScript, and backend technologies.',
      image: carrent,
      link: 'https://www.udemy.com/certificate/XXXXXX', // your certificate link here
      id: '12345', // optional certificate number
    },
    {
      title: 'Data Analyst',
      issuer: 'Coursera',
      issueDate: 'August 2023',
      expirationDate: 'N/A',
      image: carrent,
      description: 'Specialization in data analysis, SQL, data visualization, and statistics.',
      link: 'https://www.coursera.org/certificate/XXXXXX',
      id: '67890',
    }
  ];
  
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Project",
      icon: starbucks, // Assuming 'starbucks' is a defined image/icon
      iconBg: "#383E56",
      date: "July 2024 - August 2024",
      points: [
        "Developed a Full Stack Food Delivery app using React and Django.",
        "Integrated an Admin Panel for adding and removing food services.",
        "Features: Admin can add and delete food items using drag and drop, while users can order available food.",
        "Technologies used: Payment integration (Stripe), location fetching (Google Maps API).",
      ],
      github_link: "https://github.com/yourusername/food-delivery-app", // Replace with your actual GitHub repo link
      live_demo_link: "https://yourapp.com", // Replace with your actual live demo link
      
    }
    ,
    {
      title: "Created A Modern To do List Using React 3 Fiber",
      company_name: "Project",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Jan 2024",
      points: [
        "I have full Stack Devloped a Modern To do List Using React and Django ",
        "Technologies used: React 3 Fiber",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Added Admin Pannel",
      ],
    },
 
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
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
  
  export { services, technologies, experiences, testimonials, projects ,certificates};