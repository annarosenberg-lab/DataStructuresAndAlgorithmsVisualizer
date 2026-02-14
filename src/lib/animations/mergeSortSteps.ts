import { AnimationStep } from "./types";

export function generateMergeSortSteps(input: number[]): AnimationStep[] {
  const values = [...input];
  const steps: AnimationStep[] = [
    { values: [...values], message: "Split array into halves, then merge in sorted order." }
  ];

  function mergeSort(start: number, end: number): void {
    if (end - start <= 1) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    steps.push({
      values: [...values],
      pointerIndices: [start, mid - 1, mid, end - 1],
      message: `Split range [${start}..${end - 1}] into [${start}..${mid - 1}] and [${mid}..${end - 1}].`
    });

    mergeSort(start, mid);
    mergeSort(mid, end);

    const merged: number[] = [];
    let left = start;
    let right = mid;

    while (left < mid && right < end) {
      steps.push({
        values: [...values],
        activeIndices: [left, right],
        message: `Compare ${values[left]} and ${values[right]} during merge.`
      });

      if (values[left] <= values[right]) {
        merged.push(values[left]);
        left += 1;
      } else {
        merged.push(values[right]);
        right += 1;
      }
    }

    while (left < mid) {
      merged.push(values[left]);
      left += 1;
    }

    while (right < end) {
      merged.push(values[right]);
      right += 1;
    }

    for (let i = 0; i < merged.length; i += 1) {
      values[start + i] = merged[i];
    }

    steps.push({
      values: [...values],
      sortedIndices: Array.from({ length: end - start }, (_, idx) => start + idx),
      message: `Merged sorted range [${start}..${end - 1}].`
    });
  }

  mergeSort(0, values.length);

  steps.push({
    values: [...values],
    sortedIndices: values.map((_, idx) => idx),
    message: "Array is fully sorted."
  });

  return steps;
}
