/**
 * JD Plumbing & Heating - Main JS
 */
(function () {
  'use strict';

  /* ---------- Mobile Menu Toggle ---------- */
  const toggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
      });
    });
  }

  /* ---------- Testimonials Slider ---------- */
  const slides = document.querySelectorAll('#testimonials-slider .testimonial-card');
  const dots = document.querySelectorAll('#testimonials-nav button');
  let current = 0;
  let autoplay;

  function showSlide(index) {
    slides.forEach(function (s) { s.style.display = 'none'; });
    dots.forEach(function (d) { d.classList.remove('active'); });
    slides[index].style.display = 'block';
    dots[index].classList.add('active');
    current = index;
  }

  if (slides.length > 0) {
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        showSlide(i);
        clearInterval(autoplay);
        startAutoplay();
      });
    });

    function startAutoplay() {
      autoplay = setInterval(function () {
        showSlide((current + 1) % slides.length);
      }, 5000);
    }
    startAutoplay();
  }

  /* ---------- Quote Form (AJAX) ---------- */
  var form = document.getElementById('jd-quote-form');
  var successEl = document.getElementById('form-success');

  if (form && typeof jdPlumbing !== 'undefined') {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear errors
      form.querySelectorAll('.form-error').forEach(function (el) { el.textContent = ''; });

      var name = form.querySelector('[name="name"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      var service = form.querySelector('[name="service"]').value;
      var message = form.querySelector('[name="message"]').value.trim();
      var honeypot = form.querySelector('[name="website"]').value;

      if (honeypot) return;

      // Client-side validation
      var valid = true;
      if (!name) {
        form.querySelector('[data-error="name"]').textContent = 'Name is required.';
        valid = false;
      }
      if (!phone) {
        form.querySelector('[data-error="phone"]').textContent = 'Phone is required.';
        valid = false;
      }
      if (!service) {
        form.querySelector('[data-error="service"]').textContent = 'Please select a service.';
        valid = false;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.querySelector('[data-error="email"]').textContent = 'Invalid email address.';
        valid = false;
      }

      if (!valid) return;

      // Submit via AJAX
      var data = new FormData();
      data.append('action', 'jd_quote_form');
      data.append('nonce', jdPlumbing.nonce);
      data.append('name', name);
      data.append('phone', phone);
      data.append('email', email);
      data.append('service', service);
      data.append('message', message);
      data.append('website', honeypot);

      fetch(jdPlumbing.ajaxUrl, { method: 'POST', body: data })
        .then(function (res) { return res.json(); })
        .then(function (res) {
          if (res.success) {
            form.style.display = 'none';
            successEl.style.display = 'block';
          } else {
            alert(res.data || 'Something went wrong. Please call us directly.');
          }
        })
        .catch(function () {
          alert('Network error. Please call us directly.');
        });
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
