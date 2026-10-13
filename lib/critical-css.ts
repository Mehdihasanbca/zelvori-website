/**
 * Critical Above-The-Fold CSS for Zelvori
 * 
 * Inlined directly into <head> to eliminate render-blocking CSS bottlenecks,
 * achieve sub-second First Contentful Paint (FCP), and ensure 0.00 Cumulative Layout Shift (CLS)
 * on mobile devices under simulated 3G/4G network throttling.
 */

export const criticalCss = `
/* 1. Base Reset & Viewport Constraints */
html {
  background-color: #070b14;
  color: #f1f5f9;
  font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Inter", "Segoe UI", Roboto, sans-serif;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *::before, *::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
  background-color: #070b14;
  color: #f1f5f9;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1 1 0%;
}

/* 2. Critical Navigation Header Sizing & Paint */
header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 5rem;
  background-color: rgba(7, 11, 20, 0.88);
  border-bottom: 1px solid rgba(30, 41, 59, 0.5);
}
@supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
  header {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}
.header-inner {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 3. Critical Above-The-Fold Hero Section */
.hero-critical-container {
  position: relative;
  overflow: hidden;
  padding-top: 2rem;
  padding-bottom: 5rem;
  min-height: 70vh;
}
.hero-headline {
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #ffffff;
  line-height: 1.08;
  margin: 0 0 1.25rem 0;
}
.hero-gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #67e8f9, #bae6fd, #a5b4fc);
}

/* 4. Touch Target & Accessibility Standards */
button, a {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
:focus-visible {
  outline: 2px solid #22d3ee;
  outline-offset: 2px;
}

/* 5. Reduced Motion Defense */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
