type FigureProps = {
  caption: string;
  children: React.ReactNode;
};

const Figure = ({ caption, children }: FigureProps) => (
  <figure>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
);

export default Figure;
