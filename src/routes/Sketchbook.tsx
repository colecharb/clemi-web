import Sketch, { type SketchProps } from '../components/SketchbookEntry';

const SKETCHES: SketchProps[] = [
  {
    title: 'Animation Projects',
    abstract:
      'A collection of animation projects exploring various techniques and storytelling methods.',
  },
  {
    title: 'R+R Video',
    abstract:
      'A video project available on YouTube. Watch it here: https://www.youtube.com/watch?v=ZYlsVHf5XOY',
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
    title: 'Ironself Movie Trailer',
    abstract:
      "Trailer for the movie 'Ironself'. Watch it here: https://www.youtube.com/watch?v=twhPZk0amV0",
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
    title: 'Seattle Black Panther Doc Trailer',
    abstract:
      'Trailer for the Seattle Black Panther documentary. Watch it here: https://youtu.be/yVm8j-ZMfYU',
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
  {
    title: 'Film Photography',
    abstract:
      'A series of film photography works capturing unique moments and perspectives.',
  },
];

const Sketchbook = () => {
  return (
    <>
      <h2>Sketch Book</h2>
      {SKETCHES.map((sketch, index) => (
        <Sketch
          className={`flex items-center ${
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
