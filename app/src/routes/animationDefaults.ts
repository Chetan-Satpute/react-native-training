import {TransitionStatus} from 'react-transition-group';

export const duration = 300;

export const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

export const transitionStyles: {
  [id in TransitionStatus]: any;
} = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
  unmounted: {},
};

