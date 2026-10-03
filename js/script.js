(function () {
  "use strict";

  var isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initNavbar() {
    var navbar = document.getElementById("navbar");
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    var links = menu.querySelectorAll(".mobile-link");

    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });

    toggle.addEventListener("click", function () {
      var isOpen = toggle.classList.toggle("active");
      menu.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("active");
        menu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    document.querySelectorAll('.nav-link, .mobile-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          var target = document.querySelector(href);
          if (target) {
            var offset = navbar.offsetHeight + 20;
            var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
        }
      });
    });
  }

  function initTypingAnimation() {
    var words = ["Web Developer", "Problem Solver", "Tech Enthusiast", "Code Learner"];
    var el = document.querySelector(".typing-text");
    if (!el) return;

    var wordIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var pauseEnd = 0;

    function tick() {
      var now = Date.now();
      if (now < pauseEnd) {
        requestAnimationFrame(tick);
        return;
      }

      var word = words[wordIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = word.substring(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          pauseEnd = now + 2000;
        }
      } else {
        charIndex--;
        el.textContent = word.substring(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      var speed = deleting ? 40 : 80;
      setTimeout(function () { requestAnimationFrame(tick); }, speed);
    }

    setTimeout(function () { requestAnimationFrame(tick); }, 1000);
  }

  function initHeroEntrance() {
    setTimeout(function () {
      document.querySelector(".hero").classList.add("hero-loaded");
    }, 100);
  }

  function initScrollReveal() {
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  function initCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    var dot = document.querySelector(".cursor-dot");
    var circle = document.querySelector(".cursor-circle");
    if (!dot || !circle) return;

    var mouseX = 0, mouseY = 0;
    var circleX = 0, circleY = 0;
    var visible = false;

    document.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";

      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        circle.style.opacity = "1";
      }
    }, { passive: true });

    document.addEventListener("mouseleave", function () {
      visible = false;
      dot.style.opacity = "0";
      circle.style.opacity = "0";
    });

    document.addEventListener("mouseenter", function () {
      visible = true;
      dot.style.opacity = "1";
      circle.style.opacity = "1";
    });

    function animateCircle() {
      circleX += (mouseX - circleX) * 0.12;
      circleY += (mouseY - circleY) * 0.12;
      circle.style.left = circleX + "px";
      circle.style.top = circleY + "px";
      requestAnimationFrame(animateCircle);
    }
    animateCircle();

    var hoverTargets = document.querySelectorAll("a, button, .project-featured-link, .project-card, .stack-item");
    hoverTargets.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        if (el.classList.contains("project-featured-link") || el.classList.contains("project-card")) {
          circle.classList.add("hovering-project");
        } else {
          circle.classList.add("hovering");
        }
      });
      el.addEventListener("mouseleave", function () {
        circle.classList.remove("hovering");
        circle.classList.remove("hovering-project");
      });
    });
  }

  function initMagneticButtons() {
    if (isTouchDevice || prefersReducedMotion) return;

    document.querySelectorAll(".magnetic-btn").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + x * 0.15 + "px, " + y * 0.15 + "px)";
      });

      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var scriptURL = "https://script.google.com/macros/s/AKfycbzPPU017HJYf93yyRuNyAWJLy6w97E67Yu60RAbeFncYavUm91peY5lMuOOAXlK1pC2dw/exec";
    var btn = form.querySelector(".btn-submit");
    var success = document.getElementById("formSuccess");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      btn.classList.add("loading");
      btn.disabled = true;

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(function () {
          btn.classList.remove("loading");
          btn.disabled = false;
          success.classList.add("visible");
          form.reset();
          setTimeout(function () {
            success.classList.remove("visible");
          }, 5000);
        })
        .catch(function (err) {
          btn.classList.remove("loading");
          btn.disabled = false;
          console.error("Form error:", err);
        });
    });
  }

  function initSmoothAnchor() {
    document.querySelector('.nav-brand').addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initPhotoParallax() {
    if (isTouchDevice || prefersReducedMotion) return;

    var photo = document.querySelector(".hero-photo-frame");
    if (!photo) return;

    document.addEventListener("mousemove", function (e) {
      var hero = document.querySelector(".hero");
      if (!hero) return;
      var rect = hero.getBoundingClientRect();
      if (e.clientY > rect.bottom || e.clientY < rect.top) return;

      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var x = (e.clientX - centerX) / rect.width;
      var y = (e.clientY - centerY) / rect.height;

      photo.style.transform = "translate(" + x * 6 + "px, " + y * 6 + "px)";
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavbar();
    initHeroEntrance();
    initTypingAnimation();
    initScrollReveal();
    initCursor();
    initMagneticButtons();
    initContactForm();
    initSmoothAnchor();
    initPhotoParallax();
  });
})();
