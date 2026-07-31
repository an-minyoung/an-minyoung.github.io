// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-minyoung-an",
    title: "Minyoung An",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-js-development-techniques-applied-to-glassdoor",
        
          title: "JS Development Techniques Applied to Glassdoor",
        
        description: "Using the Console to Access Review Information",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/glassdoor/";
          
        },
      },{id: "post-microscopy-and-image-analysis",
        
          title: "Microscopy and Image Analysis",
        
        description: "Using FIJI/ImageJ to analyze cell development",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/microscopy/";
          
        },
      },{id: "post-principal-component-analysis",
        
          title: "Principal Component Analysis",
        
        description: "Using PCA to determine number of presynaptic inputs of a cell",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/principal_component_analysis/";
          
        },
      },{id: "post-function-approximation-using-radial-basis-functions",
        
          title: "Function Approximation Using Radial Basis Functions",
        
        description: "Using radial basis functions to approximate a linear mapping",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/radial_basis_functions/";
          
        },
      },{id: "post-computing-logic-funcitons-using-perceptrons",
        
          title: "Computing Logic Funcitons using Perceptrons",
        
        description: "Using layered perceptrons to compute logic functions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/perceptrons/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-object-recognition-and-scene-detection",
          title: 'Object Recognition and Scene Detection',
          description: "Implementing OpenCV for vehicles",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-using-baxter-for-object-recognition-and-manipulation",
          title: 'Using Baxter for Object Recognition and Manipulation',
          description: "Embedded Systems Final Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-shape-memory-alloy-actuation-through-equilibrium-point-control",
          title: 'Shape Memory Alloy Actuation Through Equilibrium Point Control',
          description: "Winter Project - 2019",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-mri-compatible-actuator-for-artificial-tactile-stimulation",
          title: 'MRI-compatible Actuator for Artificial Tactile Stimulation',
          description: "Spring/Summer/Fall Project - 2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-environment-sensor-with-display",
          title: 'Environment Sensor with Display',
          description: "An Arduino Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV.pdf?v=2026-04-09", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%79%61%6E%31@%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/an-minyoung", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nZ0jvbwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
