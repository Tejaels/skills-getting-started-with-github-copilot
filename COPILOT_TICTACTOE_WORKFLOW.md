# Tic Tac Toe with 4 GitHub Copilot Modes

This project now includes a playable Tic Tac Toe game at:
- http://localhost:8000/static/tic-tac-toe.html

Use the steps below to demonstrate each Copilot mode and capture screenshots.

## 1) Comment-driven generation
1. Open `src/static/tic-tac-toe.js`.
2. Add a comment like:
   - `// Create Tic Tac Toe game logic with winner detection, draw handling, and reset`
3. Pause and let Copilot suggest code.
4. Accept suggestion.
5. Screenshot target: editor showing the comment and generated code.

## 2) Ghost text (inline completion)
1. In `src/static/tic-tac-toe.css`, start typing `.board {`.
2. Wait for gray ghost text suggestion to appear.
3. Press `Tab` to accept.
4. Screenshot target: visible ghost text before accepting, or right after acceptance.

## 3) Inline Chat (Cmd/Ctrl+I)
1. Highlight part of `src/static/tic-tac-toe.js` (for example `checkWinner`).
2. Press `Ctrl+I` (or `Cmd+I` on macOS).
3. Ask:
   - `Refactor this function to be shorter and keep behavior the same.`
4. Apply the patch from inline chat.
5. Screenshot target: inline chat box and proposed patch.

## 4) Copilot Chat panel
1. Open Copilot Chat side panel.
2. Ask:
   - `Create a responsive Tic Tac Toe page with HTML, CSS, and JavaScript for this project.`
3. Use the response to compare with existing files.
4. Screenshot target: Copilot Chat response in panel.

## Screenshot checklist to paste in your submission
- Comment-based generation screenshot
- Ghost text suggestion screenshot
- Inline Chat refactor screenshot
- Copilot Chat panel screenshot
- Optional: running game in browser screenshot

## Quick run steps
1. `pip3 install -r requirements.txt`
2. `python3 src/app.py`
3. Open `http://localhost:8000/static/tic-tac-toe.html`
