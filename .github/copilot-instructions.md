# Copilot Instructions for This Codebase

## Project Overview

- This is a React single-page application bootstrapped with Create React App.
- Main app logic is in `src/`, with page components in `src/pages/` (e.g., `Home.js`, `Detail.js`, `Write.js`).
- The app appears to support writing and saving code/content, with a focus on user input and possibly code editing.

## Key Files & Structure

- `src/App.js`: Main application entry point, likely handles routing and layout.
- `src/pages/Write.js`: Handles user input for new content. If implementing code editing, use a code editor component (e.g., CodeMirror) instead of a plain `<input>` for advanced features.
- `public/index.html`: Main HTML template.

## Developer Workflows

- **Start dev server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test`
- **Build for production:** `npm run build`
- **Eject (advanced):** `npm run eject` (irreversible)

## Patterns & Conventions

- Use React functional components and hooks (`useState`, etc.).
- Page components are placed in `src/pages/`.
- For code input or editing, prefer a code editor library (e.g., `@uiw/react-codemirror`) for syntax highlighting and autocompletion.
- Keep component state local unless sharing is required.

## Integration & Dependencies

- No custom backend or API integration is present by default; add API calls as needed.
- External libraries should be installed via `npm` and imported at the top of each file.

## Example: Adding a Code Editor to `Write.js`

```jsx
import CodeMirror from "@uiw/react-codemirror";
// ...
<CodeMirror value={code} onChange={setCode} />;
```

## Additional Notes

- Follow Create React App conventions unless project-specific patterns are documented here.
- Update this file if you introduce new architectural patterns or workflows.
