document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav a");
  
    navLinks.forEach(link => link.classList.remove("active"));
    navLinks[0].classList.add("active");
  
    document.addEventListener("scroll", () => {
      let currentSection = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });

     const header = document.querySelector(".header");
     const stickyOffset = header.offsetTop;


     document.addEventListener("scroll", () => {
      if (window.scrollY > stickyOffset) {
          header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }
  });
  

  const language = localStorage.getItem("language") || "en";
  updateContent(language);
  });


function toggleLanguage() {
    const currentLang = localStorage.getItem("language") || "en";
    const newLang = currentLang === "en" ? "es" : "en";
    localStorage.setItem("language", newLang);
    updateContent(newLang);
}
;
function updateContent(language) {
  const textContent = {
    en: {
      home:"Home",
      about:"Skills",
      projects:"Projects",
      developer: "A web developer.",
      myProjects: "My Projects",
      areHere: "Are Here",
      supportMe: "Support Me",
      withMyProjects: "With my Projects",
      myKnowledge: "Technical Skills",
      tools: "Tools",
      simonSays: "Simon Says",
      simonDescription: "Classic game implemented with JavaScript, ideal for exercising memory.",
      viewProject: "View Project",
      map: "Products Map",
      mapDescription: "A world map showing how many products there are by country.",
      dndmap: "Interactive Map of D&D",
      thunderDescription: "An interactive map of my Dungeons and Dragons campaign."
  },
  es: {
      home:"Inicio",
      about:"Habilidades",
      projects:"Proyectos",
      developer: "Un desarrollador web.",
      myProjects: "Mis Proyectos",
      areHere: "Están Aquí",
      supportMe: "Apóyame",
      withMyProjects: "Con mis Proyectos",
      myKnowledge: "Stacks Tecnológicos",
      tools: "Herramientas",
      simonSays: "Simon Dice",
      simonDescription: "Juego clásico implementado con JavaScript, ideal para ejercitar la memoria.",
      viewProject: "Ver Proyecto",
      map: "Mapa de Productos",
      mapDescription: "Un mapamundi donde se muestra cuantos productos hay en cada país.",
      dndmap: "Interactive Map of D&D",
      thunderDescription: "Un mapa interactivo de mi campaaña de Dungeons and Dragons."

  }
  };

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (textContent[language][key]) {
      el.textContent = textContent[language][key];
    }
  });
}








  