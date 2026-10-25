document.addEventListener("DOMContentLoaded", function () {
  const infoBtn = document.getElementById("infoBtn");
  const infoSection = document.getElementById("info");
  const contactBtn = document.getElementById("contactBtn");
  const contactSection = document.getElementById("contact");
  const skillsBtn = document.getElementById("skillsBtn");
  const contactSecondBtn = document.getElementById("contactSecondBtn");
  const skillsSection = document.getElementById("skillsS");
  const homeBtn = document.getElementById("homeBtn");
  const homeSection = document.getElementById("smallerHome");

  const sections = [homeSection, infoSection, contactSection, skillsSection];

  function showSection(activeSection) {
    sections.forEach((section) => {
      if (section === activeSection) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }

  // Event Listeners
  infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(infoSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(contactSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  skillsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(skillsSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactSecondBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(contactSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(homeSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // Initialize
  showSection(homeSection);

  // Particles Initialization
  if (window.tsParticles) {
    tsParticles.load({
      id: "tsparticles",
      options: {
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 400, // Higher count for the starfield effect
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false, // Individual twinkling
            },
          },
          size: {
            value: { min: 0.5, max: 1.5 }, // Tiny star-like sizes
          },
          move: {
            enable: true,
            speed: 0.2, // Very slow drifting
            direction: "none",
            random: true,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
              duration: 0.8,
            },
          },
        },
      },
    });
  }
});
