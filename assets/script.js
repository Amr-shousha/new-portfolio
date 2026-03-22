const infoBtn = document.getElementById("infoBtn");
const infoSection = document.getElementById("info");

const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

const skillsBtn = document.getElementById("skillsBtn");
const skillsSecondBtn = document.getElementById("skillsSecondBtn");

const skillsSection = document.getElementById("skillsS");

const closeBtn = document.getElementById("homeBtn");
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

infoBtn.addEventListener("click", () => showSection(infoSection));
contactBtn.addEventListener("click", () => showSection(contactSection));
skillsBtn.addEventListener("click", () => showSection(skillsSection));
skillsSecondBtn.addEventListener("click", () => showSection(skillsSection));
closeBtn.addEventListener("click", () => showSection(homeSection));

showSection(homeSection);
tsParticles.load({
  id: "tsparticles",
  options: {
    fullScreen: { enable: false }, // MANDATORY: Keeps particles inside the div
    background: { color: "transparent" },
    // background: {
    //   repeat: "no-repeat",
    //   size: "10%",
    //   position: "60% 50%",
    // }
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0,
          size: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: true,
        speed: 0.3,
      },
      number: {
        density: {
          enable: true,
        },
        value: 600,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 5,
        },
        value: { min: 0.3, max: 0.6 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
  },
});
