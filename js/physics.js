import { CONFIG } from "./config.js";

export function getPivotX(plankWidth = CONFIG.plankWidth) {
  return plankWidth / 2;
}

export function getDistanceFromPivot(position, pivotX) {
  return Math.abs(position - pivotX);
}

export function getSideFromPosition(position, pivotX) {
  if (position < pivotX) return "left";
  if (position > pivotX) return "right";
  return "center";
}

export function calculateWeights(objects, pivotX) {
  let leftWeight = 0;
  let rightWeight = 0;

  objects.forEach((obj) => {
    const side = getSideFromPosition(obj.position, pivotX);

    if (side === "left") leftWeight += obj.weight;
    if (side === "right") rightWeight += obj.weight;
  });

  return { leftWeight, rightWeight };
}

export function calculateTorques(objects, pivotX) {
  let leftTorque = 0;
  let rightTorque = 0;

  objects.forEach((obj) => {
    const side = getSideFromPosition(obj.position, pivotX);
    const distance = getDistanceFromPivot(obj.position, pivotX);
    const torque = obj.weight * distance;

    if (side === "left") leftTorque += torque;
    if (side === "right") rightTorque += torque;
  });

  return { leftTorque, rightTorque };
}

export function clampAngle(angle) {
  return Math.max(-CONFIG.maxAngle, Math.min(CONFIG.maxAngle, angle));
}

export function calculateAngle(leftTorque, rightTorque) {
  const rawAngle = (rightTorque - leftTorque) / CONFIG.angleFactor;
  return clampAngle(rawAngle);
}

export function calculateBalance(objects, pivotX = getPivotX()) {
  const { leftWeight, rightWeight } = calculateWeights(objects, pivotX);
  const { leftTorque, rightTorque } = calculateTorques(objects, pivotX);
  const angle = calculateAngle(leftTorque, rightTorque);

  return {
    leftWeight,
    rightWeight,
    leftTorque,
    rightTorque,
    angle,
  };
}