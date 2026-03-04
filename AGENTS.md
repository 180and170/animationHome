## Cursor Cloud specific instructions

This is a Vite + React project (`animationHome`) featuring a WebGL plasma wave background animation inspired by [reactbits.dev](https://reactbits.dev).

### Tech Stack
- **React** (via Vite) with JavaScript
- **OGL** — lightweight WebGL library used for rendering the plasma wave shader
- **GLSL shaders** — custom fragment shader implementing a raymarching-based plasma effect

### Key Commands
- `npm install` — install dependencies
- `npm run dev` — start Vite dev server (default port 5173)
- `npx eslint src/` — run linting
- `npm run build` — production build

### Project Structure
- `src/components/PlasmaWave.jsx` — WebGL plasma wave background component (GLSL shader + OGL renderer)
- `src/App.jsx` — hero page layout with the plasma wave background
- `src/App.css` — dark theme styling

### Important Caveats
- The WebGL animation requires a GPU-capable browser. In software-only WebGL environments (e.g., SwiftShader in headless VMs), the canvas compositing may not work correctly without Chrome DevTools open. On real hardware with GPU acceleration, the animation renders without issues.
- The component includes a CSS radial-gradient fallback that activates when WebGL context creation fails entirely.
