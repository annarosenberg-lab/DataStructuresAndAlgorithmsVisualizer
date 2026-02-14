import { AnimationStep } from "./types";

export function generateLinearSearchSteps(values: number[], target: number): AnimationStep[] {
  const steps: AnimationStep[] = [];

  for (let i = 0; i < values.length; i += 1) {
    steps.push({
      values: [...values],
      activeIndices: [i],
      message: `Check index ${i} (value ${values[i]}).`
    });

    if (values[i] === target) {
      steps.push({
        values: [...values],
        activeIndices: [i],
        sortedIndices: [i],
        message: `Found target ${target} at index ${i}.`
      });
      return steps;
    }
  }

  steps.push({
    values: [...values],
    message: `Target ${target} not found after scanning the array.`
  });

  return steps;
}
