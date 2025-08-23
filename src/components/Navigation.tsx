import { NavLink, type RouteProps } from 'react-router-dom';

type Props = {
  routes: (RouteProps & { path: string; name: string })[];
};

const Navigation = ({ routes }: Props) => {
  return (
    <>
      <div className='fixed left-0 right-0 bottom-0 sm:bottom-auto sm:top-0 z-30 backdrop-blur-sm'>
        <div className='flex px-10 py-5 gap-3 overflow-x-scroll pointer-events-auto place-items-center'>
          <div className='absolute z-5 left-0 bottom-0 top-0 w-12 bg-gradient-to-r from-black to-transparent sm:bg-none' />
          <div className='absolute right-0 bottom-0 top-0 w-12 bg-gradient-to-l from-black to-transparent sm:bg-none' />

          {routes.map(({ path, name, index }) => (
            <NavLink
              to={path}
              key={path}
              className={({ isActive }) =>
                `transition-all rounded-full border-1 text-nowrap px-2 !no-underline ${
                  isActive ? 'border-[--text]' : 'border-transparent'
                } ${index ? 'font-semibold border-2' : ''}`
              }
            >
              {name}
            </NavLink>
          ))}

          <a
            href='https://instagram.com/clemencuentos'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold px-2 ml-auto'
            title='Instagram'
          >
            ig
          </a>
          <a
            href='https://www.linkedin.com/in/clementina-consens-151b16b7'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold px-2'
            title='LinkedIn'
          >
            in
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
