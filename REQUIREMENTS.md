# Algorithm Learning App - Product Requirements (MVP)

## 1. Project Overview
A desktop-first responsive web app for recent college graduates and interview-prep learners to review core data algorithms through concise explanations, visual animations, Python code, and time complexity breakdowns.

## 2. Goals
- Help users quickly refresh algorithm fundamentals used in software engineering interviews.
- Provide clear visual intuition for each algorithm.
- Keep UI simple, clean, and distraction-free.

## 3. Non-Goals (MVP)
- User accounts or authentication.
- Progress tracking, badges, or quizzes.
- User-provided custom input datasets.
- Mobile-first optimization beyond responsive support.

## 4. Target Audience
- Recent CS graduates preparing for interviews.
- Developers brushing up on algorithm concepts.

## 5. Platform and Tech Stack
- Platform: Desktop-first responsive web app (browser-based).
- Frontend: React.
- Framework: Next.js (React-based).
- Backend/runtime: Node.js.
- Language: TypeScript.
- Styling: Minimal light theme with scalable design tokens.
- Code display: Syntax-highlighted Python code blocks.

## 6. MVP Scope
### Topics included
1. Binary Search
2. Linear Search
3. Bubble Sort
4. Merge Sort

### Information shown per topic page
- Brief algorithm description (concise, interview-focused).
- Auto-play visual animation.
- Syntax-highlighted Python code.
- Time complexity summary and plain-language explanation.

## 7. Functional Requirements
### FR-1 Dashboard
- The home page must display topic widgets in a grid.
- Each topic appears as a square clickable widget/card.
- Each widget includes at minimum: topic name and short subtitle/tag.
- Each widget must include a small static visual preview representing the algorithm type.

### FR-2 Topic Navigation
- Clicking a widget routes to that topic’s detail page.
- URL structure should be predictable (e.g., `/topics/[slug]`).

### FR-3 Topic Page Content Order
Each topic page must display content in this order:
1. Topic title
2. Very brief description
3. Visual animation
4. Python code block (syntax-highlighted)
5. Time complexity section with explanation

### FR-4 Animation Behavior
- Animation runs in auto-play mode on page load.
- Animation should clearly depict algorithm steps over predefined data.
- A replay button must restart the animation from step 1.
- Animation architecture must be extendable for future controls:
  - Play/Pause
  - Next step
  - Previous step
  - Speed control

### FR-5 Predefined Data
- Each algorithm uses curated predefined sample input.
- No user data entry in MVP.

### FR-6 Accessibility
- Keyboard-accessible navigation and interactive elements.
- Sufficient color contrast in light theme.
- Semantic headings and landmarks for screen-reader compatibility.

### FR-7 Performance
- Dashboard and topic pages should load quickly on modern desktop browsers.
- Avoid heavy animation libraries unless justified.

## 8. Non-Functional Requirements
- Code must be modular and easy to extend with additional algorithms.
- Consistent visual style across dashboard and topic pages.
- Maintainable topic content model (single source for topic metadata, Python code, complexity text, and animation dataset).

## 9. Suggested Information Architecture
- `/` -> Dashboard
- `/topics/binary-search`
- `/topics/linear-search`
- `/topics/bubble-sort`
- `/topics/merge-sort`

## 10. Content Requirements Per Topic
For each of the 4 topics, define:
- `title`
- `slug`
- `briefDescription`
- `sampleInput`
- `animationSteps` (or generator)
- `pythonCode`
- `timeComplexity` (best/average/worst + space where relevant)
- `complexityExplanation`

## 11. Acceptance Criteria (MVP)
- Dashboard shows exactly 4 square topic widgets.
- Each widget contains a static visual preview.
- Each widget opens its correct topic page.
- Each topic page includes all 5 required sections in correct order.
- Animation auto-plays on page load.
- Replay button restarts animation from the beginning.
- Python code is syntax-highlighted and readable.
- Time complexity and explanation are present and correct.
- UI uses a minimal light theme and remains clean on desktop and tablet widths.

## 12. Future Enhancements (Post-MVP)
- Add step-by-step controls (play/pause/next/prev/speed).
- Add more algorithms and data structures.
- Add practice questions or mini-quiz per topic.
- Add progress tracking and optional user accounts.
