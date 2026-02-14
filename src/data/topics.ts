import { generateBinarySearchSteps } from "@/lib/animations/binarySearchSteps";
import { generateLinearSearchSteps } from "@/lib/animations/linearSearchSteps";
import { generateBubbleSortSteps } from "@/lib/animations/bubbleSortSteps";
import { generateMergeSortSteps } from "@/lib/animations/mergeSortSteps";
import { AnimationStep } from "@/lib/animations/types";

export type TopicSlug = "binary-search" | "linear-search" | "bubble-sort" | "merge-sort";

type Complexity = {
  best: string;
  average: string;
  worst: string;
  space: string;
  explanation: string;
};

export type TopicContent = {
  title: string;
  slug: TopicSlug;
  subtitle: string;
  briefDescription: string;
  pythonCode: string;
  complexity: Complexity;
  getSteps: () => AnimationStep[];
};

const binarySearchInput = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const binarySearchTarget = 23;

const linearSearchInput = [14, 3, 27, 19, 8, 31, 11];
const linearSearchTarget = 19;

const bubbleSortInput = [9, 4, 7, 2, 8, 1];
const mergeSortInput = [10, 3, 15, 7, 8, 23, 74, 18];

export const topics: TopicContent[] = [
  {
    title: "Binary Search",
    slug: "binary-search",
    subtitle: "Search / Divide and Conquer",
    briefDescription:
      "Binary Search finds a target in a sorted array by repeatedly checking the middle and discarding half the search space.",
    pythonCode: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`,
    complexity: {
      best: "O(1)",
      average: "O(log n)",
      worst: "O(log n)",
      space: "O(1)",
      explanation:
        "Each comparison removes half of the remaining search range. That halving pattern leads to logarithmic time, making Binary Search very efficient on sorted data."
    },
    getSteps: () => generateBinarySearchSteps(binarySearchInput, binarySearchTarget)
  },
  {
    title: "Linear Search",
    slug: "linear-search",
    subtitle: "Search / Sequential",
    briefDescription:
      "Linear Search scans an array from left to right until it finds the target or reaches the end.",
    pythonCode: `def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i

    return -1`,
    complexity: {
      best: "O(1)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(1)",
      explanation:
        "In the worst and average case, the algorithm may inspect most or all elements before finding the target or concluding it is missing."
    },
    getSteps: () => generateLinearSearchSteps(linearSearchInput, linearSearchTarget)
  },
  {
    title: "Bubble Sort",
    slug: "bubble-sort",
    subtitle: "Sorting / Exchange",
    briefDescription:
      "Bubble Sort repeatedly compares adjacent elements and swaps them when out of order, pushing larger values toward the end each pass.",
    pythonCode: `def bubble_sort(arr):
    n = len(arr)

    for end in range(n - 1, 0, -1):
        swapped = False

        for i in range(end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

        if not swapped:
            break

    return arr`,
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
      explanation:
        "Bubble Sort uses nested passes across the array. That repeated pairwise comparison produces quadratic time for average and worst cases, which is why it is mainly a teaching algorithm."
    },
    getSteps: () => generateBubbleSortSteps(bubbleSortInput)
  },
  {
    title: "Merge Sort",
    slug: "merge-sort",
    subtitle: "Sorting / Divide and Conquer",
    briefDescription:
      "Merge Sort recursively splits the array, sorts each half, then merges the halves into a fully sorted result.",
    pythonCode: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


def merge(left, right):
    merged = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged`,
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
      explanation:
        "The array is split into log n levels, and each level performs O(n) total merging work. This yields O(n log n) time with extra linear memory for merged output."
    },
    getSteps: () => generateMergeSortSteps(mergeSortInput)
  }
];

export function getTopicBySlug(slug: string): TopicContent | undefined {
  return topics.find((topic) => topic.slug === slug);
}
