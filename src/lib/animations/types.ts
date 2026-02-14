export type AnimationStep = {
  values: number[];
  activeIndices?: number[];
  sortedIndices?: number[];
  pointerIndices?: number[];
  message: string;
};

export type AnimationController = {
  play: () => void;
  pause: () => void;
  next: () => void;
  prev: () => void;
  setSpeed: (multiplier: number) => void;
};
