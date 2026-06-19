// TYPEWRITER EFFECT
const text = "TACTICAL LUXURY HEADWEAR";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// HAMBURGER MENU
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// SMOOTH SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// NAV HIDE ON SCROLL
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let current = window.pageYOffset;

  if (current > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = current;
});

// SIGNUP FORM UX
const form = document.getElementById("signupForm");
const msg = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    msg.textContent = `Welcome ${name}, you're now elite registered.`;

    form.reset();
  });
}
