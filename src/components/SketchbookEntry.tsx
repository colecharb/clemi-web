import type { PropsWithChildren } from 'react';

export type SketchProps = PropsWithChildren<{
  title: string;
  abstract: string;
}>;

function Sketch(props: SketchProps & { className?: string }) {
  const { title, abstract, children, className } = props;
  return (
    <div className={`flex flex-col py-10 gap-10 ${className}`}>
      <div className=''>
        <h3 className='mt-0'>{title}</h3>
        {abstract}
      </div>
      {children}
    </div>
  );
}

export default Sketch;
