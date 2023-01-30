import { Transition, TransitionStatus } from "react-transition-group";
import { useRef, useState } from "react";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: {
  [id in TransitionStatus]: any;
} = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: {},
};

function Animation() {
  const [open, setOpen] = useState(true);
  const nodeRef = useRef(null);

  return (
    <div>
      <Transition nodeRef={nodeRef} in={open} timeout={duration}>
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            I'm a fade Transition!
          </div>
        )}
      </Transition>
      <button onClick={() => setOpen(!open)}>Animation Toggle</button>
    </div>
  );
}

export default Animation;
