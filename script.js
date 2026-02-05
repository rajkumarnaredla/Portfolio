// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const text = "Frontend Developer | Java | React JS";
  let index = 0;
  const typingElement = document.querySelector(".typing");

  function type() {
    if (!typingElement) return;
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  type();
});

// Resume modal
function openResume() {
  const modal = document.getElementById("resumeModal");
  if (!modal) return;
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

function closeResume() {
  const modal = document.getElementById("resumeModal");
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Project image fallback: replace broken images with a styled fallback card
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('error', () => {
      try {
        const link = img.closest('.proj-link');
        const repoHref = link ? link.getAttribute('href') : '#';

        const fallback = document.createElement('div');
        fallback.className = 'project-fallback';
        fallback.innerHTML = `<div><h4>E-commerce (demo)</h4><p>Click to open demo</p></div>`;

        // Replace image with fallback wrapped in the same link
        if (link) {
          link.replaceChild(fallback, img);
        } else {
          img.replaceWith(fallback);
        }

        if (link && repoHref && repoHref !== '#') {
          link.setAttribute('aria-label', 'Open project demo');
        }
      } catch (e) {
        // silent fail
      }
    });
  });
});
