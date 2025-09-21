import DownArrow from '../components/DownArrow';

const Clementina = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col min-h-[85dvh] place-items-center justify-center'>
        <div className='flex flex-col lg:flex-row lg:place-items-center place-items-center gap-10'>
          <div className='flex h-60 rounded-full aspect-square overflow-clip'>
            <img
              className='h-full'
              src='/images/clementina.JPG'
            />
          </div>

          <div>
            <h2 className='mt-0'>Clementina Consens</h2>

            <p>
              is an artist, researcher, and environmental scientist with over
              seven years of experience designing and leading climate justice
              strategies across sectors. Currently serving as the Senior
              Associate of Climate Justice at B Lab U.S. & Canada, they help
              businesses transform how they do business—empowering them to take
              climate action rooted in justice, accountability, and collective
              well-being.
            </p>
            <p>
              With a Master's in Climate Change, a Bachelor's in Environmental
              Geoscience, and a Certificate in Youth Climate Leadership,
              Clementina brings expertise in strategic design, equitable data
              analysis, and systems thinking to every collaboration. Their
              leadership style emphasizes cultivating trust, building authentic
              relationships, and empowering teams to leverage their strengths
              toward lasting culture change.
            </p>
            <p>
              As a speaker, facilitator, and consultant, Clementina has designed
              and led workshops on climate justice, sustainable self-care, and
              organizational transformation for diverse audiences—including
              non-profits, businesses, and youth communities. Their approach
              blends scientific rigor with creative strategy, making complex
              issues accessible and actionable while inspiring collective
              imagination for a more just future.
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
          At B Lab U.S. & Canada, Clementina leads on workshop and educational
          program design for empowering B Corps to meet the climate challenges
          of our time.
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
          Clementina is most at home when she's either in Uruguay or the Great
          Lakes region, sharing a mate by the ocean, or cooking over a fire with
          their loved ones. They carry with them an admiration for place-based
          traditions and a passion for cooking as a way of showing care. You
          will often find them exploring the world, trying new cuisines,
          camping, swimming, or otherwise occupied by enjoying the passage of
          time.
        </p>
      </div>
    </div>
  );
};

export default Clementina;
