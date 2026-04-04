const Clementina = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col lg:flex-row lg:place-items-center place-items-center gap-10'>
        <div className='flex h-60 rounded-full aspect-square overflow-clip flex-shrink-0'>
          <img
            className='h-full'
            src='/images/clementina.JPG'
          />
        </div>

        <div>
          <h2 className='mt-0'>Clementina Consens</h2>

          <p>
            is an artist, program designer, and environmental scientist with
            over eight years of experience at the intersection of
            environmental, artistic, and social projects. Soft self-discipline
            is their wellness practice for embodied responsibility to
            themselves and their communities, a devotional approach to rituals
            aligned with nature's cyclical cues. She is most at home either in
            Uruguay or the Great Lakes region, sharing a mate by the ocean, or
            cooking over a fire with their loved ones. Clementina welcomes you
            to explore her in season offerings:
          </p>
        </div>
      </div>

      <div>
        <h3>In Season</h3>
        <div className='flex flex-row gap-6 overflow-x-auto no-scrollbar pb-4'>
          <a
            href='https://clemiworld.gumroad.com/l/earthtoclemi-mailclub'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-shrink-0 w-64 border border-[--text] rounded-xl overflow-clip flex flex-col hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/Gum_road.png'
              alt='seasonal soft discipline mail club'
              className='w-full aspect-square object-cover'
            />
            <div className='p-5 flex flex-col gap-2'>
              <p className='mb-0 font-bold'>seasonal soft discipline mail club</p>
              <p className='mb-0 text-sm opacity-70'>summer cohort</p>
            </div>
          </a>

          <a
            href='https://tpl.ca/programs-and-classes/featured/environmentalist-in-residence/?_gl=1*1iuwquu*_ga*MTgzNjE0ODM1Ny4xNzczODAwMzYz*_ga_G99DMMNG39*czE3NzUyNjkzMTkkbzUkZzEkdDE3NzUyNjkzMTkkajYwJGwwJGgw*_ga_VGX2640F9T*czE3NzUyNjkzMTkkbzUkZzEkdDE3NzUyNjkzMTkkajYwJGwwJGgw'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-shrink-0 w-64 border border-[--text] rounded-xl overflow-clip flex flex-col hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/TPLxETC.png'
              alt='Environmentalist in Residence'
              className='w-full aspect-square object-cover'
            />
            <div className='p-5 flex flex-col gap-2'>
              <p className='mb-0 font-bold'>Environmentalist in Residence</p>
              <p className='mb-0 text-sm opacity-70'>Spring Season at Malvern</p>
            </div>
          </a>

          <a
            href='https://clemiworld.gumroad.com/l/earthtoclemiandmiddleearthwellness'
            target='_blank'
            rel='noopener noreferrer'
            className='flex-shrink-0 w-64 border border-[--text] rounded-xl overflow-clip flex flex-col hover:opacity-80 transition-opacity'
          >
            <img
              src='/images/ETCxMEW.jpeg'
              alt='soft discipline: showing up without burning out'
              className='w-full aspect-square object-cover'
            />
            <div className='p-5 flex flex-col gap-2'>
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
