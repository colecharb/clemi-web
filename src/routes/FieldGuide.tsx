import SubscribePicker from "../components/SubscribePicker";

const FieldGuide = () => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h2 className="mt-0 text-center">You already know the way home.</h2>
        <p className="text-2xl text-center">
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
        <div className="text-xl italic font-light flex flex-col gap-4 text-center md:text-left">
          <p className="mb-0">A seasonal compass for soft discipline.</p>
          <p className="mb-0">Original animal illustrations.</p>
          <p className="mb-0">Rituals designed for your archetype.</p>
          <p className="mb-0">Reflections to see yourself more clearly.</p>
          <p className="mb-0">Your companion as you return to self.</p>
        </div>
      </div>

      <div>
        <h3 className="mt-0">A Field Guide for Your Inner-World</h3>
        <p>
          The Earth To Clemi Field Guide is a homecoming. Your seasonal guide
          for practicing the art of living in honest rhythm with the natural
          world. Noticing what you need, resting when rest is required. Inspired
          by vintage National Geographic and Audubon Naturalist Guides and
          structured as a personal practice journal. Designed with the rigor of
          a field naturalist and the intimacy of an older sister.
        </p>
        <p>
          Each volume is built around a season and an animal guide. You'll
          discover:
        </p>
        <ul>
          <li>
            <strong>Original Illustrations</strong> — Hand-drawn, scientifically
            grounded portraits of your animal guide. Your relatives, showing you
            what behaviours help them survive and thrive.
          </li>
          <li>
            <strong>Naturalist Pages</strong> — Dive into the ecology and
            behavior of your seasonal animal. Learn how the Cedar Waxwing is
            followed by forests wherever they go, how the Northern Watersnake
            passes the winter months, and what the Red Squirrel teaches us about
            the art of preparation.
          </li>
          <li>
            <strong>Archetype-Specific Rituals</strong> — Soft discipline looks
            different depending on who you are. Control At All Costs moves
            differently than The Bridge or Agent of Chaos. Your rituals are
            prescribed for your way of practicing, so you can develop your own
            equilibrium.
          </li>
          <li>
            <strong>Seasonal Frameworks</strong> — Journaling prompts,
            reflection questions, and a monthly ritual tracker that helps you
            recognize the rhythms you're already living by.
          </li>
          <li>
            <strong>Astrology & Inner Knowing</strong> — The natural world
            mirrors our internal seasons. The Field Guide calls on astrology and
            naturalist portraits of our animal guides to ground you in belonging
            and connection with nature's intelligence, and builds your
            confidence to trust that inner knowing.
          </li>
        </ul>
      </div>

      <div className="px-8">
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

      <div>
        <h3 className="mt-0">What You Get</h3>
        <p>
          <strong>Print Edition:</strong> 50 pages, eco-friendly
          risograph-printed by Vide Press in Toronto, with full-color
          illustrations. Perfect-bound booklet designed to live in your bag or
          on your bedside table. Original artwork and seasonal letter from
          Clemi. Personalized rituals based on your archetype. Naturalist pages,
          reflection prompts, and monthly tracker. Digital copy included.
        </p>
        <p>
          <strong>Digital Edition:</strong> Same complete content as print, in
          beautiful PDF format.
        </p>
        <p>
          The knowledge that your subscription supports artists creating their
          offerings intentionally.
        </p>
      </div>

      <div id="subscribe" className="sm:scroll-mt-28">
        <h3 className="mt-0">Subscribe</h3>
        <SubscribePicker />
      </div>

      <div>
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
    </div>
  );
};

export default FieldGuide;
