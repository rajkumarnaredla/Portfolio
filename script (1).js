const typingEl = document.querySelector(".typing");
const text = "Frontend Developer | React | Java";
let index = 0;

function type() {
  if (!typingEl) return;
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index += 1;
    setTimeout(type, 80);
  }
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 90) {
      el.classList.add("active");
    }
  });
}

function initResumeTabs() {
  const tabs = document.querySelectorAll(".icon-tab");
  const panels = document.querySelectorAll(".info-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      tabs.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      panels.forEach((panel) => {
        panel.classList.remove("active");
        panel.hidden = true;
      });

      const targetPanel = document.getElementById(targetId);
      if (!targetPanel) return;

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      targetPanel.hidden = false;
      targetPanel.classList.add("active");
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    const mailTo = "rajkumarnaredla42@gmail.com";
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  });
}

function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle ? toggle.querySelector(".theme-icon") : null;
  if (!toggle) return;

  const saved = localStorage.getItem("themeMode");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    if (icon) icon.textContent = "☀️";
    toggle.setAttribute("aria-label", "Switch to dark mode");
    toggle.setAttribute("aria-pressed", "false");
  } else {
    if (icon) icon.textContent = "🌙";
    toggle.setAttribute("aria-label", "Switch to light mode");
  }

  toggle.addEventListener("click", () => {
    const lightMode = document.body.classList.toggle("light-mode");
    if (lightMode) {
      if (icon) icon.textContent = "☀️";
      toggle.setAttribute("aria-label", "Switch to dark mode");
      toggle.setAttribute("aria-pressed", "false");
      localStorage.setItem("themeMode", "light");
    } else {
      if (icon) icon.textContent = "🌙";
      toggle.setAttribute("aria-label", "Switch to light mode");
      toggle.setAttribute("aria-pressed", "true");
      localStorage.setItem("themeMode", "dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  type();
  revealOnScroll();
  initResumeTabs();
  initContactForm();
  initThemeToggle();

  window.addEventListener("scroll", revealOnScroll, { passive: true });
});
