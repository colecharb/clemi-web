import type { PropsWithChildren } from 'react';

const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className='p-10 max-w-4xl mx-auto pt-30 pb-[400px]'>
      {children}
      <div className='z-10 fixed top-0 left-0 right-0 h-30 bg-gradient-to-b from-[var(--background)] to-transparent' />
      <img
        src='/images/campfire.gif'
        className='z-20 fixed bottom-[90px] sm:bottom-5 right-0 drop-shadow-[var(--background)] w-[40vw] max-w-[250px]'
      />
      <div className='z-10 fixed bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[var(--background)] to-transparent' />
    </div>
  );
};

export default Page;
