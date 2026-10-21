const Clementina = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[48vh] min-h-[320px] lg:h-[80vh] overflow-hidden'>
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src='/images/Clemi-Faroe.jpeg'
          alt='Clementina Consens'
        />
        <div className='hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[--background]/90' />
        <div className='hidden lg:block absolute inset-0'>
          <div className='absolute top-1/2 -translate-y-1/2 left-[40%] max-w-lg pr-10 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]'>
            <h2 className='mt-0 whitespace-nowrap'>Clementina Consens</h2>

            <p>
              Clementina Consens is an artist, program designer, and
              environmental scientist with over eight years of experience at
              the intersection of environmental, artistic, and social
              projects. Their work as Earth To Clemi focuses on "Biophilic
              Living for Loving your Life", an eco-centric approach to
              personal and collective wellbeing. She is most at home either in
              Uruguay or the Great Lakes region, sharing a mate by the ocean, or
              cooking over a fire with her loved ones.
            </p>
            <p>
              Clementina welcomes you to explore her in-season offerings and
              subscribe to the{' '}
              <a
                href='https://www.clementina.earth/field-guide'
                target='_blank'
                rel='noopener noreferrer'
              >
                Earth To Clemi Field Guide
              </a>
              , released seasonally.
            </p>
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        <h2 className='mt-0'>Clementina Consens</h2>

        <p>
          Clementina Consens is an artist, program designer, and
          environmental scientist with over eight years of experience at the
          intersection of environmental, artistic, and social projects. Their
          work as Earth To Clemi focuses on "Biophilic Living for Loving your
          Life", an eco-centric approach to personal and collective
          wellbeing. She is most at home either in Uruguay or the Great Lakes
          region, sharing a mate by the ocean, or cooking over a fire with her
          loved ones.
        </p>
        <p>
          Clementina welcomes you to explore her in-season offerings and
          subscribe to the{' '}
          <a
            href='https://www.clementina.earth/field-guide'
            target='_blank'
            rel='noopener noreferrer'
          >
            Earth To Clemi Field Guide
          </a>
          , released seasonally.
        </p>
      </div>

      <div>
        <h3>In Season</h3>
        <div className='flex flex-col gap-4'>
          <a
            href='https://www.saorstudio.com/packages?_mt=%2Fbuy%2F48717%3FactiveProduct%3Dcredits-15158'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/SAOR-NovRestore.jpeg'
              alt="Nature's Guidance for a Restorative November"
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>
                Nature's Guidance for a Restorative November
              </p>
              <p className='mb-0 text-sm opacity-70'>
                November 1st Restore Class
              </p>
            </div>
          </a>

          <a
            href='https://www.clementina.earth/field-guide'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/ETC-FieldGuide-Promo.jpeg'
              alt='Earth To Clemi Field Guide'
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>Earth To Clemi Field Guide</p>
              <p className='mb-0 text-sm opacity-70'>seasonal biophilic living companion</p>
            </div>
          </a>

          <a
            href='https://ecoanxietyworkshop.splashthat.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/PatagoniaToronto.png'
              alt='Biophilic Living for Loving your Life'
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>Biophilic Living for Loving your Life</p>
              <p className='mb-0 text-sm opacity-70'>workshop with Patagonia Toronto</p>
            </div>
          </a>

          <a
            href='https://clemiworld.gumroad.com/l/foundationsofsoftdiscipline'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/FoundationsSDsquare.jpg'
              alt='Foundations of Soft Discipline'
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>Foundations of Soft Discipline</p>
              <p className='mb-0 text-sm opacity-70'>free introduction to soft discipline</p>
            </div>
          </a>

          <a
            href='https://clemiworld.gumroad.com/l/earthtoclemi-mailclub'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/Gum_road.png'
              alt='seasonal soft discipline mail club'
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>seasonal soft discipline mail club</p>
              <p className='mb-0 text-sm opacity-70'>summer cohort</p>
            </div>
          </a>

          <a
            href='https://tpl.ca/programs-and-classes/featured/environmentalist-in-residence/?_gl=1*1iuwquu*_ga*MTgzNjE0ODM1Ny4xNzczODAwMzYz*_ga_G99DMMNG39*czE3NzUyNjkzMTkkbzUkZzEkdDE3NzUyNjkzMTkkajYwJGwwJGgw*_ga_VGX2640F9T*czE3NzUyNjkzMTkkbzUkZzEkdDE3NzUyNjkzMTkkajYwJGwwJGgw'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/TPLxETC.png'
              alt='Environmentalist in Residence'
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>Environmentalist in Residence</p>
              <p className='mb-0 text-sm opacity-70'>Spring Season at Malvern</p>
            </div>
          </a>

          <a
            href='https://clemiworld.gumroad.com/l/earthtoclemiandmiddleearthwellness'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-[--text] rounded-xl overflow-clip flex flex-row hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/ETCxMEW-square.png'
              alt='soft discipline: showing up without burning out'
              className='h-32 w-32 object-cover flex-shrink-0'
            />
            <div className='p-4 flex flex-col gap-2 justify-center'>
              <p className='mb-0 font-bold'>
                soft discipline: showing up without burning out
              </p>
              <p className='mb-0 text-sm opacity-70'>sold out</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clementina;
