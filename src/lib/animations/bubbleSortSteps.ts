import { AnimationStep } from "./types";

export function generateBubbleSortSteps(input: number[]): AnimationStep[] {
  const values = [...input];
  const steps: AnimationStep[] = [
    { values: [...values], message: "Start bubble sort from left to right." }
  ];

  for (let end = values.length - 1; end > 0; end -= 1) {
    for (let i = 0; i < end; i += 1) {
      steps.push({
        values: [...values],
        activeIndices: [i, i + 1],
        sortedIndices: Array.from({ length: values.length - 1 - end }, (_, idx) => values.length - 1 - idx),
        message: `Compare index ${i} and ${i + 1}.`
      });

      if (values[i] > values[i + 1]) {
        [values[i], values[i + 1]] = [values[i + 1], values[i]];
        steps.push({
          values: [...values],
          activeIndices: [i, i + 1],
          sortedIndices: Array.from({ length: values.length - 1 - end }, (_, idx) => values.length - 1 - idx),
          message: `Swap ${values[i + 1]} and ${values[i]}.`
        });
      }
    }

    steps.push({
      values: [...values],
      sortedIndices: Array.from({ length: values.length - end }, (_, idx) => values.length - 1 - idx),
      message: `Index ${end} is now in final position.`
    });
  }

  steps.push({
    values: [...values],
    sortedIndices: values.map((_, i) => i),
    message: "Array is fully sorted."
  });

  return steps;
}
