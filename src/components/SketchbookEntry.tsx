import type { PropsWithChildren } from "react";

export type SketchProps = PropsWithChildren<{
  title: string;
  abstract: string;
}>;

function Sketch(props: SketchProps & { className?: string }) {
  const { title, abstract, children, className } = props;
  return (
    <div className={`border-t-1 py-10 gap-10 ${className}`}>
      <div className="flex flex-col flex-3">
        <h3 className="mt-0">{title}</h3>
        {abstract}
      </div>
      <div className="flex flex-col flex-2 -mt-3">{children}</div>
    </div>
  );
}

export default Sketch;
