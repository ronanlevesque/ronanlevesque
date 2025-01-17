import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

type TocLinkProps = {
  node: {
    data: {
      hProperties: {
        id: string;
      };
    };
    value: string;
  };
};

const useHighlighted = (id: string) => {
  const observer = useRef(null);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -35% 0px',
    });

    const elements = document.querySelectorAll('h2, h3');
    elements.forEach((elem) => observer.current.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return [activeId === id, setActiveId];
};

const TocLink = ({ node }: TocLinkProps) => {
  const id = node.data.hProperties.id;
  const [isHighlighted] = useHighlighted(id);
  return (
    <a
      className={cx(
        'lg:inline-flex lg:transition lg:hover:text-manatee',
        isHighlighted && 'lg:text-manatee'
      )}
      href={`#${id}`}
    >
      {node.value}
    </a>
  );
};

export default TocLink;
