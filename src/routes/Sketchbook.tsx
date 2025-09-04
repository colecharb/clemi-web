import DownArrow from '../components/DownArrow';
import Sketch, { type SketchProps } from '../components/SketchbookEntry';

const SKETCHES: SketchProps[] = [
  // {
  //   title: 'Animation Projects',
  //   abstract:
  //     'A collection of animation projects exploring various techniques and storytelling methods.',
  // },
  {
    title: 'Rooted and Rising (Short Film)',
    abstract:
      'As part of the Rooted & Rising youth climate leadership cohort, Clementina was responsible for the cinematography and editing of a short film created collectively by the participants of her working group. The piece documents the process of making ceramics while interweaving interviews and reflections on Indigenous cultural revitalization, climate change, mental health, and wellness. Through intentional storytelling and visual composition, Clementina helped highlight how decolonizing the creative process and fostering localized supply chains can empower BIPOC artists in Tkaronto. The film positions ceramics as vessels for healing, reconnection, and community resilience.',
    children: (
      <iframe
        src='https://www.youtube.com/embed/ZYlsVHf5XOY'
        title='R+R Video'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{ marginTop: '1rem', maxWidth: '100%' }}
      />
    ),
  },
  {
    title: 'The Ironself Movie (Opening Animation)',
    abstract:
      "Clementina collaborated with animator Zano Matondo to create the opening sequence for The Ironself Movie — a redemption story following Eman's healing journey through the mountains of the Musqueam, Squamish, and Tsleil-Waututh peoples' territories (British Columbia). Their animation traces Eman's path from Egypt to Toronto to Vancouver, and her first hike that ended in a near-death experience. The short animation sequence visually bridges landscapes, migration, and memory, setting the stage for a story of resilience, vulnerability, and community.",
    children: (
      <iframe
        src='https://www.youtube.com/embed/twhPZk0amV0'
        title='Ironself Movie Trailer'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{ marginTop: '1rem', maxWidth: '100%' }}
      />
    ),
  },
  {
    title: 'Seattle Black Panther Documentary (Animated Sequences)',
    abstract:
      "Working alongside animators Cole Wisdom and Brad Bradley Art, Clementina contributed two animated scenes to the Seattle Black Panther Documentary. The film centers the voices of Aaron Dixon — co-founder and captain of the Seattle chapter — and his co-founder brother Elmer Dixon, who reflect on their time in the movement. Clementinas animation brought to life two pivotal memories, each told in the brothers' own words, transforming oral history into visual storytelling. These sequences amplify the Panthers' legacy of resistance, solidarity, and uncompromising commitment to freedom for all people.",
    children: (
      <iframe
        src='https://www.youtube.com/embed/yVm8j-ZMfYU'
        title='Seattle Black Panther Doc Trailer'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{ marginTop: '1rem', maxWidth: '100%' }}
      />
    ),
  },
];  

const Sketchbook = () => {
  return (
    <>
      <div className='min-h-[85dvh] place-content-center'>
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
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          key={sketch.title}
          {...sketch}
        />
      ))}
    </>
  );
};

export default Sketchbook;
