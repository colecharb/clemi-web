import { useEffect, useState, useCallback } from "react";
import SubscribePicker from "../components/SubscribePicker";

const TESTIMONIALS = [
  "The guidance was gentle and allowed for a lot of self discovery and curiosity without the imposition of more.",
  "What a lovely framework for meeting yourself where you are in any given moment and building a habit of self-trust.",
  "Creative, inspiring, and beautiful ... subscription. Subscribing feels a bit like sending my future self little love notes each month.",
  "Your field guides are gorgeous!",
];

const FIELD_GUIDE_IMAGES = [
  "/images/FieldGuideImage1.jpeg",
  "/images/FieldGuideImage2.jpeg",
  "/images/FieldGuideImage3.jpeg",
  "/images/FieldGuideImage4.jpeg",
  "/images/FieldGuideImage5.jpeg",
];

// Cycle length long enough that image + testimonial advance together but
// each array still wraps at its own, different length.
const CYCLE_LENGTH = FIELD_GUIDE_IMAGES.length * TESTIMONIALS.length;

const FieldGuideImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const imageIndex = current % FIELD_GUIDE_IMAGES.length;
  const testimonialIndex = current % TESTIMONIALS.length;

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % CYCLE_LENGTH),
    [],
  );
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + CYCLE_LENGTH) % CYCLE_LENGTH),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  useEffect(() => {
    setTextVisible(false);
    const id = setTimeout(() => setTextVisible(true), 50);
    return () => clearTimeout(id);
  }, [testimonialIndex]);

  return (
    <div
      className="sm:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={FIELD_GUIDE_IMAGES[imageIndex]}
          alt="The Field Guide spread"
          className="w-full aspect-[4/3] object-cover object-center"
        />
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] rounded-full px-8 py-4"
          style={{ backgroundColor: "color-mix(in srgb, var(--background) 40%, transparent)" }}
        >
          <p
            className="text-base italic font-light text-center mb-0 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]"
            style={{ transition: "opacity 0.8s ease", opacity: textVisible ? 1 : 0 }}
          >
            "{TESTIMONIALS[testimonialIndex]}"
          </p>
        </div>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl leading-none opacity-70 hover:opacity-100 transition-opacity cursor-pointer [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]"
          style={{ color: "var(--text)" }}
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl leading-none opacity-70 hover:opacity-100 transition-opacity cursor-pointer [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]"
          style={{ color: "var(--text)" }}
        >
          ›
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-4">
        {FIELD_GUIDE_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className="w-2 h-2 rounded-full transition-opacity cursor-pointer"
            style={{
              backgroundColor: "var(--text)",
              opacity: i === imageIndex ? 1 : 0.35,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const FieldGuide = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden flex items-end lg:items-center justify-center py-28 lg:pt-64 lg:pb-56 px-6">
        <img
          src="/images/FieldGuideHero.jpeg"
          alt="The Earth To Clemi Field Guide"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-top"
        />
        <div className="relative z-10 text-center max-w-2xl [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
          <h2 className="mt-0">The Field Guide for a Biophilic Lifestyle</h2>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("subscribe")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="block w-64 mx-auto mt-8 border-2 border-[#fd7e01] bg-[#fd7e01]/25 text-[#fd7e01] rounded-xl font-bold py-3 hover:opacity-90 transition-opacity cursor-pointer [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.6))]"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div>
        <h3 className="mt-0 font-bold text-left">
          Found within...
        </h3>
        <p>
          The Earth To Clemi Field Guide is your seasonal compass for
          practicing the art of biophilic living. In which you design a
          lifestyle rooted in the relationship to the natural world and to
          yourself. Inspired by vintage National Geographic and Audubon
          Naturalist Guides and structured as a personal practice journal.
          Designed with the scientific rigor of a field naturalist and the
          intimacy of an older sister.
        </p>
        <p>
          Each volume is built around the wisdom of each season. In the
          guide you'll:
        </p>
        <ul>
          <li>
            <strong>Meet your seasonal teacher.</strong> Each volume introduces
            an animal guide whose life practices become a mirror for your own.
            When you understand how your animal kin survive and thrive, you
            start to recognize those same instincts alive in you.
          </li>
          <li>
            <strong>Learn the language of the natural world.</strong> Whether
            it's understanding your ecosystem service role or the way nurse
            logs offer us lessons on life disruptions, there is structure to
            be found in nature's intelligence.
          </li>
          <li>
            <strong>Develop a lifestyle that has you falling in love with your life.</strong>{' '}
            Journaling prompts, reflection questions, and a monthly tracker
            that helps you notice the rhythms you're already living by and how
            to tune them towards happiness.
          </li>
          <li>
            <strong>Know that your intuition is a compass.</strong> The Field
            Guide helps you learn to read it: through astrology, naturalist
            observation, and the consistent practice of trusting what you
            already know.
          </li>
        </ul>
      </div>

      <div id="subscribe" className="sm:scroll-mt-28">
        <h3 className="mt-0">Subscribe</h3>
        <SubscribePicker />
      </div>

      <div className="sm:px-8">
        <FieldGuideImageCarousel />
      </div>

      <div>
        <h3 className="mt-0">What You Receive</h3>
        <p>
          <strong>Both Editions:</strong> A transformative tool for cultivating
          a biophilic lifestyle that you love.
        </p>
        <p>
          <strong>Print Edition:</strong> 50-page, eco-friendly
          risograph-printed booklet by Vide Press in Toronto, with full-color
          original illustrations by Clemi. Designed to live in your bag or on
          your bedside table. Personalized rituals based on your archetype.
          Naturalist pages, reflection prompts, and monthly tracker. Digital
          copy included.
        </p>
        <p>
          <strong>Digital Edition:</strong> Same complete content as print, in
          PDF format.
        </p>
      </div>
    </div>
  );
};

export default FieldGuide;
