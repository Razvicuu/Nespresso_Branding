/* ==========================================================================
   Nespresso Presentation — Custom Animations & Interactions
   - Animated counters (slides 1, 9, 12) with re-animation guard
   - Timeline draw animation (slide 3) with reset on leave
   - Vertical interactive timeline (slide 9)
   - Custom slide number counter (01 / 15)
   - Slide hint (title slide only)
   - Ambient particle background with breathing opacity
   ========================================================================== */

(function () {
  'use strict';

  // --- Animated Counter (with re-animation guard) ---
  function animateCounter(element, target, duration) {
    if (element.dataset.animated === 'true') return;
    element.dataset.animated = 'true';

    duration = duration || 2200;
    var suffix = element.dataset.suffix || '';
    var prefix = element.dataset.prefix || '';
    var start = performance.now();

    function tick(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      element.textContent = prefix + current.toLocaleString('ro-RO') + suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  // --- Timeline Draw Animation ---
  function activateTimeline(slide) {
    var track = slide.querySelector('.timeline-track');
    if (track) {
      track.classList.remove('active');
      setTimeout(function () {
        track.classList.add('active');
      }, 400);
    }
  }

  // --- Reset timeline when leaving a slide ---
  function deactivateTimeline(slide) {
    if (!slide) return;
    var track = slide.querySelector('.timeline-track');
    if (track) {
      track.classList.remove('active');
    }
  }

  // --- Vertical Timeline Interactivity ---
  function initVerticalTimeline() {
    var items = document.querySelectorAll('.vt-item');
    items.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        items.forEach(function (i) { i.classList.remove('active'); });
        item.classList.add('active');
      });
    });
  }

  // --- Custom Slide Number ---
  function initSlideNumber() {
    var el = document.querySelector('.custom-slide-number');
    if (!el) return;

    function update(event) {
      var current = String(event.indexh + 1).padStart(2, '0');
      var total = String(Reveal.getTotalSlides()).padStart(2, '0');
      el.textContent = current + ' / ' + total;
    }

    Reveal.on('ready', update);
    Reveal.on('slidechanged', update);
  }

  // --- Ambient Particle Background ---
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 20;
    var resizeTimer;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    // Create particles
    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1.2 + Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.25,
        baseOpacity: 0.06 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
        // Warm gold and brown tones (visible on light bg)
        color: Math.random() > 0.5 ? '189, 100, 22' : '64, 33, 8'
      });
    }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Breathing opacity
        var breathe = Math.sin(time * 0.0008 + p.phase) * 0.03;
        var opacity = p.baseOpacity + breathe;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ', ' + opacity + ')';
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  // --- Logo & Slide Number Dark/Light Toggle ---
  function updateThemeElements(slide) {
    var isDark = slide.classList.contains('dark-slide') || slide.classList.contains('cover-slide');
    var logo = document.querySelector('.nespresso-logo');
    var slideNum = document.querySelector('.custom-slide-number');

    if (logo) {
      // Hide persistent logo on cover slide (slide 0 has its own large logo)
      if (slide.classList.contains('cover-slide')) {
        logo.style.display = 'none';
      } else {
        logo.style.display = '';
        if (isDark) {
          logo.classList.add('logo-inverted');
        } else {
          logo.classList.remove('logo-inverted');
        }
      }
    }

    if (slideNum) {
      if (isDark) {
        slideNum.classList.add('on-dark');
      } else {
        slideNum.classList.remove('on-dark');
      }
    }
  }

  // --- Reveal.js Event Hooks ---
  function onSlideChanged(event) {
    var slide = event.currentSlide;

    // Reset previous slide's timeline
    deactivateTimeline(event.previousSlide);

    // Toggle logo/slide-number for dark vs light slides
    updateThemeElements(slide);

    // Trigger animated counters
    var counters = slide.querySelectorAll('[data-counter]');
    counters.forEach(function (el) {
      var target = parseInt(el.dataset.counter, 10);
      animateCounter(el, target);
    });

    // Trigger timeline draw
    activateTimeline(slide);
  }

  // --- Initialize on Reveal Ready ---
  if (typeof Reveal !== 'undefined') {
    Reveal.on('ready', function (event) {
      initParticles();
      initVerticalTimeline();
      initSlideNumber();

      // Trigger counters on first slide if needed
      onSlideChanged(event);
    });

    Reveal.on('slidechanged', onSlideChanged);
  }

})();
