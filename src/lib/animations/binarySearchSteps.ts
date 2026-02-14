import { AnimationStep } from "./types";

export function generateBinarySearchSteps(values: number[], target: number): AnimationStep[] {
  const steps: AnimationStep[] = [];
  let left = 0;
  let right = values.length - 1;

  steps.push({
    values: [...values],
    pointerIndices: [left, right],
    message: `Start with left=${left}, right=${right}, target=${target}.`
  });

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    steps.push({
      values: [...values],
      activeIndices: [mid],
      pointerIndices: [left, right],
      message: `Check middle index ${mid} (value ${values[mid]}).`
    });

    if (values[mid] === target) {
      steps.push({
        values: [...values],
        activeIndices: [mid],
        sortedIndices: [mid],
        message: `Found target ${target} at index ${mid}.`
      });
      return steps;
    }

    if (values[mid] < target) {
      left = mid + 1;
      steps.push({
        values: [...values],
        pointerIndices: [left, right],
        message: `Target is larger, move left to ${left}.`
      });
    } else {
      right = mid - 1;
      steps.push({
        values: [...values],
        pointerIndices: [left, right],
        message: `Target is smaller, move right to ${right}.`
      });
    }
  }

  steps.push({
    values: [...values],
    message: `Target ${target} not found.`
  });

  return steps;
}
