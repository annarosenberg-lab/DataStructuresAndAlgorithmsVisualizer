"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimationStep } from "@/lib/animations/types";

type AlgorithmAnimationProps = {
  title: string;
  steps: AnimationStep[];
  autoplayDelayMs?: number;
};

export function AlgorithmAnimation({
  title,
  steps,
  autoplayDelayMs = 900
}: AlgorithmAnimationProps): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  const safeSteps = useMemo(() => (steps.length > 0 ? steps : [{ values: [], message: "No steps available." }]), [steps]);
  const active = safeSteps[currentStep];
  const maxValue = Math.max(...active.values, 1);

  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(true);
  }, [steps]);

  useEffect(() => {
    if (!isPlaying || currentStep >= safeSteps.length - 1) {
      return;
    }

    const interval = Math.max(150, autoplayDelayMs / speedMultiplier);
    const timer = window.setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, safeSteps.length - 1));
    }, interval);

    return () => window.clearTimeout(timer);
  }, [autoplayDelayMs, currentStep, isPlaying, safeSteps.length, speedMultiplier]);

  const handleReplay = (): void => {
    setCurrentStep(0);
    setIsPlaying(true);
    setSpeedMultiplier(1);
  };

  return (
    <section className="section-card" aria-label={`${title} animation`}>
      <div className="animation-header">
        <h3>Animation</h3>
        <div className="animation-actions">
          <p className="step-counter">
            Step {currentStep + 1} of {safeSteps.length}
          </p>
          <button type="button" className="replay-button" onClick={handleReplay}>
            Replay
          </button>
        </div>
      </div>

      <div className="bar-visual" role="img" aria-label={`Visualization for ${title}`}>
        {active.values.map((value, index) => {
          const isActive = active.activeIndices?.includes(index);
          const isSorted = active.sortedIndices?.includes(index);
          const isPointer = active.pointerIndices?.includes(index);

          return (
            <div className="bar-wrap" key={`${index}-${value}`}>
              <div
                className={`bar${isActive ? " is-active" : ""}${isSorted ? " is-sorted" : ""}${isPointer ? " is-pointer" : ""}`}
                style={{ height: `${Math.max(8, (value / maxValue) * 180)}px` }}
                title={`Index ${index}, Value ${value}`}
              >
                <span>{value}</span>
              </div>
              <small>{index}</small>
            </div>
          );
        })}
      </div>

      <p className="animation-message">{active.message}</p>
      <p className="animation-note">Auto-play mode enabled. Use Replay to run the animation again.</p>
    </section>
  );
}
