/* ==========================================================================
   Nespresso Presentation — Custom Interactions
   - Vertical timeline auto-scroll (Slide 2)
   - Flip card fragment handlers (Slides 3 & 4)
   - Custom slide number counter (01 / 14)
   - Slide number dark/light toggle
   ========================================================================== */

(function () {
  'use strict';

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

    // Toggle slide-number for dark vs light slides
    updateThemeElements(slide);

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
      initSlideNumber();

      // Trigger slide-changed logic on first slide
      onSlideChanged(event);
    });

    Reveal.on('slidechanged', onSlideChanged);

    // --- Fragment Events: Timeline Auto-Scroll + Flip Cards ---
    Reveal.on('fragmentshown', function (event) {
      var fragment = event.fragment;
      // Vertical timeline auto-scroll (Slide 2)
      if (fragment.classList.contains('timeline-node-v')) {
        var scrollArea = fragment.closest('.timeline-scroll-area');
        if (scrollArea) {
          fragment.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      // Flip card forward (animated) — Slide 3
      if (fragment.classList.contains('card-wrapper')) {
        var inner = fragment.querySelector('.card-inner');
        inner.classList.remove('unflipped', 'flipped-instant');
        inner.classList.add('flipped');
      }
      // Flip card forward (animated) — Slide 4
      if (fragment.classList.contains('card-wrapper-pos')) {
        var innerPos = fragment.querySelector('.card-inner-pos');
        innerPos.classList.remove('unflipped', 'flipped-instant');
        innerPos.classList.add('flipped');
      }
    });

    Reveal.on('fragmenthidden', function (event) {
      var fragment = event.fragment;
      // Flip card back (animated) — Slide 3
      if (fragment.classList.contains('card-wrapper')) {
        var inner = fragment.querySelector('.card-inner');
        inner.classList.remove('flipped', 'flipped-instant');
        inner.classList.add('unflipped');
      }
      // Flip card back (animated) — Slide 4
      if (fragment.classList.contains('card-wrapper-pos')) {
        var innerPos = fragment.querySelector('.card-inner-pos');
        innerPos.classList.remove('flipped', 'flipped-instant');
        innerPos.classList.add('unflipped');
      }
    });
  }

})();
