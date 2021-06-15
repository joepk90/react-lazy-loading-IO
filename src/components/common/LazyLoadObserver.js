import React from 'react';
import { useInView } from 'react-intersection-observer';
import {Suspense} from 'react';

const LazyLoadObserver = ({children}) => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div ref={ref} class="lazy-load-observer">
      {inView && (
        <Suspense fallback={
          <div className="lazy-fallback">
            Fallback: Failed to load component...
          </div>
        }>
          {children}
        </Suspense>
      )}

    </div>
  );
};

export default LazyLoadObserver;