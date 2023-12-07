'use client'
import React from 'react';
import Typed from 'typed.js';

export function TypingTitle() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer.'],
      typeSpeed: 100,
      smartBackspace: true,
      autoInsertCss: true,
      showCursor: true,
      autoInsertCss: true,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App ">
      <h2 className='font-black text-8xl text-[#669BBC] underline max-[600px]:text-5xl max-[600px]:text-center' ref={el}></h2>
    </div>
  );
}