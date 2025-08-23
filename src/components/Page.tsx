import type { PropsWithChildren } from 'react';
import useBackgroundAnimation from '../hooks/useBackgroundAnimation';

const Page = ({ children }: PropsWithChildren) => {
  const { activeFrame } = useBackgroundAnimation();
  return (
    <div className='p-10 max-w-4xl mx-auto pt-30 pb-[400px]'>
      <img
        className='min-h-full min-w-full fixed bottom-0 left-0 -z-10 blur-sm opacity-50'
        src={activeFrame}
      />
      {children}
      <div className='z-10 fixed top-0 left-0 right-0 h-30 bg-gradient-to-b from-[var(--background)] to-transparent' />
      <img
        src='/src/assets/images/campfire.gif'
        className='z-20 fixed bottom-[90px] sm:bottom-5 right-0 drop-shadow-[var(--background)] w-[40vw] max-w-[250px]'
      />
      <div className='z-10 fixed bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black to-transparent ' />
    </div>
  );
};

export default Page;