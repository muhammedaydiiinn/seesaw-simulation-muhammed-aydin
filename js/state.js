import { calculateBalance } from "./physics.js";

export const state = {
  objects: [],
  angle: 0,
  leftWeight: 0,
  rightWeight: 0,
};

export function addObject(object) {
  state.objects.push(object);
  syncDerivedState();
}

export function resetState() {
  state.objects = [];
  state.angle = 0;
  state.leftWeight = 0;
  state.rightWeight = 0;
}

export function setState(newState) {
  state.objects = newState.objects || [];
  syncDerivedState();
}

export function syncDerivedState() {
  const { leftWeight, rightWeight, angle } = calculateBalance(state.objects);

  state.leftWeight = leftWeight;
  state.rightWeight = rightWeight;
  state.angle = angle;
}