import {useRef, useState} from 'react';
import {Transition} from 'react-transition-group';
import { defaultStyle, transitionStyles, duration } from './animationDefaults';

function Animation() {
  const [open, setOpen] = useState(true);
  const nodeRef = useRef(null);

  return (
    <div>
      <Transition nodeRef={nodeRef} in={open} timeout={duration}>
        {state => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}>
            I'm a fade Transition!
          </div>
        )}
      </Transition>
      <button onClick={() => setOpen(!open)}>Animation Toggle</button>
    </div>
  );
}

export default Animation;
