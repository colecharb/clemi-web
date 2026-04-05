import { useState, useEffect, useCallback } from 'react';

const TESTIMONIALS = [
  "Such culinary delights...I want you to cook for me every day! Delicious, made with such grace!",
  "The spice, the joy, the nourishment. Thank you for every morsel",
  "Your loving meals were the best part of our retreat – and that's saying a lot, believe me!",
  "Your warmth and love shown to us through food was priceless, you are a gem!",
  "The dishes were incredible and had a lot of variety...",
  "The meals at the retreat were a perfect nurturing support during our sound residency. The cohort raved about the quality and deliciousness of the food...",
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(i => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setCurrent(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="w-full py-6 mb-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Quote display */}
      <div className="relative overflow-hidden min-h-32 flex items-center justify-center">
        <blockquote
          key={current}
          className="testimonial-slide text-center italic text-xl px-10 leading-relaxed"
          style={{ color: 'var(--text)' }}
        >
          &ldquo;{TESTIMONIALS[current]}&rdquo;
        </blockquote>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="text-3xl leading-none opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          ‹
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="w-2 h-2 rounded-full transition-opacity cursor-pointer"
              style={{
                backgroundColor: 'var(--text)',
                opacity: i === current ? 1 : 0.35,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="text-3xl leading-none opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
