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

// Show only the active section
function showSection(activeSection) {
  sections.forEach((section) => {
    if (section === activeSection) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

// Buttons
infoBtn.addEventListener("click", () => showSection(infoSection));
contactBtn.addEventListener("click", () => showSection(contactSection));
skillsBtn.addEventListener("click", () => showSection(skillsSection));
skillsSecondBtn.addEventListener("click", () => showSection(skillsSection));
closeBtn.addEventListener("click", () => showSection(homeSection));

// Default: show home first
showSection(homeSection);
