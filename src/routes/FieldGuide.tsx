import { useEffect, useState } from "react";
import SubscribePicker from "../components/SubscribePicker";

const TESTIMONIALS = [
  "The guidance was gentle and allowed for a lot of self discovery and curiosity without the imposition of more.",
  "What a lovely framework for meeting yourself where you are in any given moment and building a habit of self-trust.",
  "Creative, inspiring, and beautiful ... subscription. Subscribing feels a bit like sending my future self little love notes each month.",
];

const TestimonialRotator = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % TESTIMONIALS.length);
        setVisible(true);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="text-xl italic font-light text-center md:text-left mb-0"
      style={{ transition: "opacity 0.8s ease", opacity: visible ? 1 : 0 }}
    >
      "{TESTIMONIALS[index]}"
    </p>
  );
};

const FieldGuide = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="text-center">
        <h2 className="mt-0">You already know the way home.</h2>
        <p className="text-2xl">
          The Field Guide is just here to walk with you.
        </p>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("subscribe")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="block w-64 mx-auto mt-8 border-2 border-[#fd7e01] text-[#fd7e01] rounded-xl font-bold py-3 hover:opacity-90 transition-opacity cursor-pointer"
        >
          Subscribe
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <img
          src="/images/ETC-Website.jpeg"
          alt="The Earth To Clemi Field Guide"
          className="w-full md:w-72 flex-shrink-0 rounded-lg object-cover feathered-edges"
        />
        <div className="flex items-center justify-center md:justify-start">
          <TestimonialRotator />
        </div>
      </div>

      <div>
        <h3 className="mt-0 font-bold text-center">
          Cultivating the Self Trust to Become the Most Reliable Guide for the
          Life You Seek.
        </h3>
        <p>
          The Earth To Clemi Field Guide is a homecoming. A Field Guide for
          your Inner World. Your seasonal compass for practicing the art of
          living in honest rhythm with the natural world. Noticing what you
          need, resting when rest is required. Inspired by vintage National
          Geographic and Audubon Naturalist Guides and structured as a personal
          practice journal. Designed with the rigor of a field naturalist and
          the intimacy of an older sister.
        </p>
        <p>
          Each volume is built around a season and an animal guide. In the
          guide you'll:
        </p>
        <ul>
          <li>
            <strong>Meet your seasonal teacher.</strong> Each volume introduces
            an animal guide whose survival strategies become a mirror for your
            own. Hand-illustrated, scientifically grounded, and chosen because
            they know something you may need to learn this season.
          </li>
          <li>
            <strong>Learn the language of the natural world.</strong> The Cedar
            Waxwing carries forests in its wake. The Red Squirrel channels
            ferocity into purpose. When you understand how your animal kin
            survive and thrive, you start to recognize those same instincts
            alive in you.
          </li>
          <li>
            <strong>Discover rituals designed for how you move through the world.</strong>{' '}
            Control At All Costs and Agents of Chaos don't practice the same
            way as the Bridge. Your rituals are prescribed for your archetype,
            so you're building equilibrium on your own terms, not someone
            else's.
          </li>
          <li>
            <strong>Develop a structure that holds you without constraining you.</strong>{' '}
            Journaling prompts, reflection questions, and a monthly tracker
            that helps you notice the rhythms you're already living by and how
            to better trust them.
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
        <p className="text-lg mb-10">
          <strong>Founding Subscriber:</strong>{" "}
          <em>The first 10 orders will receive a signed first edition,
          stickers, Animal Guide portrait for your wall, and access to
          "Founding Subscribers" community email. Early-bird closes June 30,
          2026.</em>
        </p>
        <SubscribePicker />
      </div>

      <div className="sm:px-8">
        <img
          src="/images/ETC-Wesbite2.jpeg"
          alt="The Field Guide spread"
          className="w-full rounded-lg object-cover feathered-edges"
        />
      </div>

      <div>
        <h3 className="mt-0">On Soft Discipline…</h3>
        <p>
          Soft discipline is rooted in seasonal living, a return to self, and
          reconnection to the natural world. It's the understanding that you are
          not separate from nature; you are nature. Your energy follows your
          life's seasons. Your body has rhythms. Your soul knows things your
          mind hasn't caught up to yet.
        </p>
        <p>
          This Field Guide walks you through that reconnection. An invitation to
          be compassionately disciplined with how you show up for yourself. To
          know when to trust the quiet pull toward rest. To recognize when
          effort is required. To choose peace in the present moment.
        </p>
      </div>

      <div className="-mt-8">
        <h3 className="mt-0">Your Archetype</h3>
        <p>Soft discipline looks different depending on who you are.</p>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="mt-0 mb-1">Control At All Costs</h4>
            <p className="mb-0">
              The architect of order. You move through life by building systems,
              planning ahead, managing risk. Your superpower is structure. The
              cedar waxwing teaches you: abundance and effort is meant to be
              shared. What can you let go of?
            </p>
          </div>
          <div>
            <h4 className="mt-0 mb-1">The Bridge</h4>
            <p className="mb-0">
              The connector, the translator, the one who holds space. You move
              between worlds. Your superpower is empathy. The watersnake teaches
              you: being misunderstood is not your burden to bear. What would
              happen if you offered yourself the empathy you so easily extend to
              others?
            </p>
          </div>
          <div>
            <h4 className="mt-0 mb-1">Agent of Chaos</h4>
            <p className="mb-0">
              The creator, the disruptor, the one who follows curiosity. You
              move through life by exploring and sensing what wants to emerge.
              Your superpower is innovation. The red squirrel teaches you:
              scattered energy can be channeled for your purpose. What if your
              ferocity had a rhythm that sustained you?
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mt-0">What You Receive</h3>
        <p>
          <strong>Both Editions:</strong> A transformative tool for cultivating
          the self-trust to become the most reliable guide for the life you
          seek.
        </p>
        <p>
          <strong>Print Edition:</strong> 50 pages, eco-friendly
          risograph-printed by Vide Press in Toronto, with full-color
          illustrations. Perfect-bound booklet designed to live in your bag or
          on your bedside table. Original artwork and seasonal letter from
          Clemi. Personalized rituals based on your archetype. Naturalist
          pages, reflection prompts, and monthly tracker. Digital copy
          included.
        </p>
        <p>
          <strong>Digital Edition:</strong> Same complete content as print, in
          beautiful PDF format.
        </p>
      </div>
    </div>
  );
};

export default FieldGuide;
