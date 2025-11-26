# Copilot Instructions for HarmonyBlend

## Project Overview

- **HarmonyBlend** is a React + Vite application for unified business management, combining order and communication workflows.
- The main app is in `HarmonyBlend/`, with source code under `HarmonyBlend/src/`.
- Major UI components are in `HarmonyBlend/components/` (e.g., `TopBar`, `Sidebar`, `Footer`).
- Pages are in `HarmonyBlend/src/pages/` (e.g., `Login`, `Dashboard`, `EmptyTheme`).
- Theming is managed via a React context in `HarmonyBlend/context/ThemeContext.jsx`.

## Architecture & Routing

- Routing is handled with `react-router-dom` in `src/App.jsx`.
  - `/` and `/login` → Login page
  - `/dashboard` → Dashboard page
  - `/orders`, `/empty` → Placeholder (EmptyTheme)
- The app is wrapped with `ThemeProvider` and `BrowserRouter` in `src/main.jsx`.

## Developer Workflows

- **Start dev server:** `npm run dev` (from `HarmonyBlend/`)
- **Build for production:** `npm run build`
- **Lint:** `npm run lint`
- **Preview build:** `npm run preview`
- No test scripts are defined by default.

## Conventions & Patterns

- Use functional React components and hooks (`useState`, `useEffect`).
- Use controlled components for forms (see `Login.jsx`).
- Use relative imports within `src/` and `components/`.
- CSS is colocated with components/pages (e.g., `Login.css`, `Sidebar.css`).
- Responsive styles are in `*.responsive.css` files.
- Images and static assets are in `src/assets/`.

## Integration Points

- No backend API integration is active by default; see commented code in `Login.jsx` for example fetch usage.
- Navigation is handled via `react-router-dom` (use `useNavigate` or `window.location.href`).
- Theming is via context (`ThemeContext.jsx`).

## Examples

- To add a new page: create a folder in `src/pages/`, add your component, CSS, and route in `App.jsx`.
- To add a new UI component: add to `components/`, import where needed.

## References

- See `HarmonyBlend/README.md` for Vite/React basics.
- See `HarmonyBlend/package.json` for dependencies and scripts.

---

For questions or unclear conventions, check existing page/component structure or ask for clarification.
