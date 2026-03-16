/* ==========================================================================
   Nespresso Presentation — Custom Animations & Interactions
   - Animated counters (slides 1, 9, 12) with re-animation guard
   - Vertical timeline auto-scroll (slide 4)
   - Vertical interactive timeline (slide 9)
   - Custom slide number counter (01 / 15)
   - Slide hint (title slide only)
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

  // --- Slide Number Dark/Light Toggle ---
  function updateThemeElements(slide) {
    var isDark = slide.classList.contains('dark-slide') || slide.classList.contains('cover-slide');
    var slideNum = document.querySelector('.custom-slide-number');

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

    // Toggle logo/slide-number for dark vs light slides
    updateThemeElements(slide);

    // Trigger animated counters
    var counters = slide.querySelectorAll('[data-counter]');
    counters.forEach(function (el) {
      var target = parseInt(el.dataset.counter, 10);
      animateCounter(el, target);
    });

    // Sync flip card states on slide entry (avoids stale animation classes)
    var cardWrappers = slide.querySelectorAll('.card-wrapper.fragment');
    cardWrappers.forEach(function (wrapper) {
      var inner = wrapper.querySelector('.card-inner');
      inner.classList.remove('flipped', 'unflipped', 'flipped-instant');
      if (wrapper.classList.contains('visible')) {
        inner.classList.add('flipped-instant');
      }
    });
    var cardWrappersPos = slide.querySelectorAll('.card-wrapper-pos.fragment');
    cardWrappersPos.forEach(function (wrapper) {
      var inner = wrapper.querySelector('.card-inner-pos');
      inner.classList.remove('flipped', 'unflipped', 'flipped-instant');
      if (wrapper.classList.contains('visible')) {
        inner.classList.add('flipped-instant');
      }
    });

  }

  // --- Initialize on Reveal Ready ---
  if (typeof Reveal !== 'undefined') {
    Reveal.on('ready', function (event) {
      console.log('Reveal ready. Total slides:', Reveal.getTotalSlides());
      console.log('Current slide index:', event.indexh);
      initVerticalTimeline();
      initSlideNumber();

      // Trigger counters on first slide if needed
      onSlideChanged(event);
    });

    Reveal.on('slidechanged', onSlideChanged);

    // --- Fragment Events: Timeline Auto-Scroll + Flip Cards ---
    Reveal.on('fragmentshown', function (event) {
      var fragment = event.fragment;
      // Vertical timeline auto-scroll
      if (fragment.classList.contains('timeline-node-v')) {
        var scrollArea = fragment.closest('.timeline-scroll-area');
        if (scrollArea) {
          fragment.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      // Flip card forward (animated) — Slide 4
      if (fragment.classList.contains('card-wrapper')) {
        var inner = fragment.querySelector('.card-inner');
        inner.classList.remove('unflipped', 'flipped-instant');
        inner.classList.add('flipped');
      }
      // Flip card forward (animated) — Slide 5
      if (fragment.classList.contains('card-wrapper-pos')) {
        var innerPos = fragment.querySelector('.card-inner-pos');
        innerPos.classList.remove('unflipped', 'flipped-instant');
        innerPos.classList.add('flipped');
      }
    });

    Reveal.on('fragmenthidden', function (event) {
      var fragment = event.fragment;
      // Flip card back (animated) — Slide 4
      if (fragment.classList.contains('card-wrapper')) {
        var inner = fragment.querySelector('.card-inner');
        inner.classList.remove('flipped', 'flipped-instant');
        inner.classList.add('unflipped');
      }
      // Flip card back (animated) — Slide 5
      if (fragment.classList.contains('card-wrapper-pos')) {
        var innerPos = fragment.querySelector('.card-inner-pos');
        innerPos.classList.remove('flipped', 'flipped-instant');
        innerPos.classList.add('unflipped');
      }
    });
  }

})();

