import DownArrow from "../components/DownArrow";
import Sketch, { type SketchProps } from "../components/SketchbookEntry";

const BehanceEmbed = () => (
  <a
    href="https://www.behance.net/earthtoclemi"
    target="_blank"
    rel="noopener noreferrer"
    className="group block no-underline mt-4 w-full"
  >
    <div className="border border-current rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-current/20">
      {/* Header with Behance branding */}
      <div className="bg-[var(--text)] px-4 py-2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-[var(--background)]"
        >
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
        <span className="text-[var(--background)] font-semibold text-lg">
          Behance
        </span>
      </div>

      {/* Profile card content */}
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-current/20 flex items-center justify-center text-lg font-bold">
            C
          </div>
          <div>
            <div className="font-bold">earthtoclemi</div>
            <div className="text-sm opacity-70">
              Digital Stickers Collection
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex items-center">
          <span className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </a>
);

const SKETCHES: SketchProps[] = [
  {
    title: "Digital Illustrations",
    abstract: "My Behance profile of digital stickers and illustrations.",
    children: <BehanceEmbed />,
  },
  {
    title: "Rooted and Rising (Short Film)",
    abstract:
      "As part of the Rooted & Rising youth climate leadership cohort, Clementina was responsible for the cinematography and editing of a short film created collectively by the participants of her working group. The piece documents the process of making ceramics while interweaving interviews and reflections on Indigenous cultural revitalization, climate change, mental health, and wellness. Through intentional storytelling and visual composition, Clementina helped highlight how decolonizing the creative process and fostering localized supply chains can empower BIPOC artists in Tkaronto. The film positions ceramics as vessels for healing, reconnection, and community resilience.",
    children: (
      <iframe
        src="https://www.youtube.com/embed/ZYlsVHf5XOY"
        title="R+R Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: "1rem", maxWidth: "100%" }}
      />
    ),
  },
  {
    title: "The Ironself Movie (Opening Animation)",
    abstract:
      "Clementina collaborated with animator Zano Matondo to create the opening sequence for The Ironself Movie — a redemption story following Eman's healing journey through the mountains of the Musqueam, Squamish, and Tsleil-Waututh peoples' territories (British Columbia). Their animation traces Eman's path from Egypt to Toronto to Vancouver, and her first hike that ended in a near-death experience. The short animation sequence visually bridges landscapes, migration, and memory, setting the stage for a story of resilience, vulnerability, and community.",
    children: (
      <iframe
        src="https://www.youtube.com/embed/twhPZk0amV0"
        title="Ironself Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: "1rem", maxWidth: "100%" }}
      />
    ),
  },
  {
    title: "Seattle Black Panther Documentary (Animated Sequences)",
    abstract:
      "Working alongside animators Cole Wisdom and Brad Bradley Art, Clementina contributed two animated scenes to the Seattle Black Panther Documentary. The film centers the voices of Aaron Dixon — co-founder and captain of the Seattle chapter — and his co-founder brother Elmer Dixon, who reflect on their time in the movement. Clementinas animation brought to life two pivotal memories, each told in the brothers' own words, transforming oral history into visual storytelling. These sequences amplify the Panthers' legacy of resistance, solidarity, and uncompromising commitment to freedom for all people.",
    children: (
      <iframe
        src="https://www.youtube.com/embed/yVm8j-ZMfYU"
        title="Seattle Black Panther Doc Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ marginTop: "1rem", maxWidth: "100%" }}
      />
    ),
  },
];

const Sketchbook = () => {
  return (
    <>
      <div className="min-h-[85dvh] place-content-center">
        <h2>Sketch Book</h2>
        <p>
          Clementina Consens is an artist and storyteller whose work moves at
          the intersection of cinematography, animation, and community memory.
          Guided by themes of resilience, community and reconnection to land,
          their practice explores how visual media can serve as both a tool for
          healing and a catalyst for collective imagination. With a focus on the
          tactile, the intimate, and the transformative, Clementina's projects
          illuminate the sacred ties between people, place, and presence.
        </p>
        <DownArrow />
      </div>
      {SKETCHES.map((sketch, index) => (
        <Sketch
          className={`flex items-start ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          key={sketch.title}
          {...sketch}
        />
      ))}
    </>
  );
};

export default Sketchbook;
