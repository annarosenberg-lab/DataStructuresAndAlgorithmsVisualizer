# Algorithm Learning App - Design Specification (MVP)

## 1. Design Principles
- Clean and minimal: prioritize readability over decoration.
- Interview-focused: concise content, quick scanning, clear visuals.
- Predictable layout: same section order across all topic pages.
- Extensible foundation: UI and architecture should support future animation controls.

## 2. Visual Direction
- Theme: Minimal light.
- Tone: Professional, calm, high-clarity.
- Whitespace: Generous spacing between major sections.
- Typography: Simple sans-serif with strong hierarchy.

### Suggested token baseline
- Background: `#F8FAFC`
- Surface/cards: `#FFFFFF`
- Primary text: `#0F172A`
- Secondary text: `#475569`
- Border: `#E2E8F0`
- Accent: `#2563EB`

## 3. Layout System
- Max content width: 1100-1200px centered.
- Desktop-first breakpoints:
  - Desktop: >= 1024px
  - Tablet: 768px to 1023px
  - Mobile support: < 768px (stacked layout)
- Spacing scale: consistent 8px system.

## 4. Core Screens
### 4.1 Dashboard (`/`)
Purpose: Topic selection hub.

Structure:
1. Header
   - App name/title
   - Optional subtitle (e.g., "Interview Algorithm Visualizer")
2. Topic grid
   - 2x2 layout on desktop for 4 topics
   - Single column on smaller screens
3. Footer (optional minimal)

Widget/Card design:
- Fixed square aspect ratio.
- Clickable card with hover and focus states.
- Contents:
  - Static algorithm visual preview
  - Topic title
  - One-line subtitle (e.g., "Search / Sorting")
- Interaction states:
  - Default, hover, active, keyboard focus-visible.

### 4.2 Topic Page (`/topics/[slug]`)
Purpose: Learn one algorithm quickly.

Section order (strict):
1. Title
2. Brief description (1-3 sentences)
3. Animation panel (auto-play)
4. Python code panel (syntax-highlighted)
5. Time complexity panel + concise explanation

## 5. Component Design
### 5.1 Reusable Components
- `TopicCard`
  - Props: title, subtitle, href, slug
  - Square card layout and accessible link wrapper
  - Includes static visual preview for each algorithm
- `AlgorithmAnimation`
  - Props: topic slug, predefined input, autoplay=true
  - Consumes normalized animation step data
- `PythonCodeBlock`
  - Props: code
  - Uses syntax highlighting theme compatible with light mode
- `ComplexityPanel`
  - Props: best/avg/worst/space + explanation text

### 5.2 Page Templates
- `DashboardPageTemplate`
- `TopicPageTemplate`

## 6. Data Model (Content-Driven)
Use a centralized topic config file (or data module) to keep behavior consistent.

Example shape:
```ts
interface TopicContent {
  title: string;
  slug: 'binary-search' | 'linear-search' | 'bubble-sort' | 'merge-sort';
  subtitle: string;
  briefDescription: string;
  sampleInput: unknown;
  pythonCode: string;
  complexity: {
    best: string;
    average: string;
    worst: string;
    space?: string;
    explanation: string;
  };
  animation: {
    autoplay: true;
    steps: AnimationStep[];
  };
}
```

## 7. Animation UX (MVP + Extensibility)
### MVP behavior
- Auto-play starts on initial render.
- Animation shows current step context clearly (highlights/comparisons/swaps/splits as relevant).
- At end of sequence, either stop on final state or loop based on design decision (recommend stop).
- Replay button resets to step 1 and restarts auto-play.

### Extensibility requirements
Structure animation engine to allow future controls without refactor:
- Internal state machine for step index and playback state.
- Public control API surface reserved for:
  - `play()`
  - `pause()`
  - `next()`
  - `prev()`
  - `setSpeed(multiplier)`
- Timing logic separated from step rendering logic.

## 8. Accessibility Requirements
- Keyboard navigation for all interactive items.
- Visible focus ring on cards/controls.
- Use semantic elements (`main`, `section`, heading hierarchy).
- Avoid color-only signaling in animation states.

## 9. Content Guidelines
- Description length: 30-60 words max.
- Python code: concise, interview-style, readable by learners.
- Complexity explanation: 2-4 sentences, plain language.
- Keep terminology consistent (best/average/worst/space).

## 10. Proposed File/Folder Structure (Next.js)
```txt
src/
  app/
    page.tsx
    topics/
      [slug]/
        page.tsx
  components/
    TopicCard.tsx
    AlgorithmAnimation.tsx
    PythonCodeBlock.tsx
    ComplexityPanel.tsx
  data/
    topics.ts
  lib/
    animations/
      binarySearchSteps.ts
      linearSearchSteps.ts
      bubbleSortSteps.ts
      mergeSortSteps.ts
```

## 11. Interaction Notes
- Topic cards should animate subtly on hover (small lift + shadow).
- Keep motion restrained and purposeful.
- Scrolling topic page should feel sectioned and readable.

## 12. QA / Design Validation Checklist
- Dashboard cards are square and aligned.
- Visual hierarchy is clear from title to complexity section.
- Auto-play is smooth and understandable for each topic.
- Replay button reliably restarts animation.
- Python code is legible and highlighted correctly.
- Complexity values are accurate for all 4 algorithms.
- Layout remains clean on desktop and tablet widths.

## 13. Future Design Extensions
- Add optional control toolbar below animation.
- Add topic filters/search on dashboard when catalog grows.
- Add "common interview pitfalls" callout section per topic.
- Add side-by-side comparison mode for related algorithms.
