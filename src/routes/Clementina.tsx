import DownArrow from '../components/DownArrow';

const Clementina = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col min-h-[85dvh] place-items-center justify-center'>
        <div className='flex  flex-col lg:flex-row lg:place-items-center place-items-center gap-10'>
          <img
            className='max-h-60 w-auto rounded-full'
            src='/images/clementina.png'
          />
          <div>
            <h2 className='mt-0'>Clementina Consens</h2>

            <p>
              is an artist, researcher, and environmental scientist committed to
              imagining and implementing strategies for organizations doing
              their part in building a better future for all. They currently
              serve as the Senior Associate of Climate Justice at B Lab U.S. &
              Canada, where they support businesses in taking climate action
              grounded in justice—leveraging systems thinking, environmental
              science, and creative strategy to foster climate solutions rooted
              in care and accountability.
            </p>
            <p>
              With a Master's in Climate Change, a Bachelor's in Environmental
              Geoscience, and a Certificate in Youth Climate Leadership,
              Clementina brings both enthusiasm and tenderness to every
              collaboration. Their work spans climate justice, Indigenous-led
              environmental stewardship, and health and wellness. As a leader
              and organizational strategist, Clementina empowers those she works
              with by designing programs with a team's strengths in mind. She
              leads by cultivating authentic relationships that build trust and
              develop the confidence to transform cultures.
            </p>
          </div>
        </div>

        <DownArrow />
      </div>

      <div>
        <h3>Professional</h3>
        <p>
          Clementina has over seven years of experience that has supported her
          strengths in designing, implementing, and managing climate action
          strategies that center equity and systems change. Their work has
          included building organizational frameworks for climate justice,
          co-developing community-based initiatives, and facilitating workshops
          on sustainable self-care and burnout prevention for non-profit teams.
        </p>
        <p>
          At B Lab U.S. & Canada, Clementina supports businesses in transforming
          how they respond to the climate crisis, ensuring solutions are rooted
          in justice, accountability, and collective well-being.
        </p>
      </div>

      <div>
        <h3>Artistic</h3>
        <p>
          Alongside their environmental work, Clementina has built a creative
          career in animation and visual storytelling. Their animation projects
          explore themes of belonging, resilience, and reconnection to land.
          These works have been shared as films and community projects, serving
          as tools for reflection and dialogue.
        </p>
      </div>

      <div>
        <h3>Personal</h3>
        <p>
          Clementina is most at home when visiting Uruguay, sharing mate by the
          ocean, or cooking over a fire with loved ones. They carry with them a
          love for place-based traditions and a passion for cooking as a way of
          showing care. You will often find her exploring the world, trying new
          cuisines, camping, swimming, or otherwise occupied by enjoying the
          passage of time.
        </p>
      </div>
    </div>
  );
};

export default Clementina;
