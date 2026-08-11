/**
 * block-devtools.js
 * ------------------
 * Blocks right-click and common DevTools/view-source keyboard shortcuts
 * as a DETERRENT against casual snooping — this is NOT real security,
 * and it cannot be made into real security by any code running in the
 * browser. Read this before relying on it for anything:
 *
 *   - Anyone can still open DevTools via the browser's own menu
 *     (e.g. Chrome menu > More Tools > Developer Tools). No script on
 *     a page can block that — it's outside the page's control entirely.
 *   - Anyone can still view this exact source by typing view-source:
 *     followed by the page URL into the address bar. This also cannot
 *     be blocked by anything running on the page.
 *   - Anyone can download the raw HTML/JS directly with curl, Postman,
 *     or any HTTP client — no browser or "inspect" involved at all.
 *   - If this app has a backend (an API_URL, a database, etc.), that
 *     backend is reachable by anyone who has its address regardless of
 *     whether this script runs — real protection for a backend has to
 *     live on the SERVER, checking who's allowed to do what on every
 *     request. This file protects none of that; it only makes casual
 *     right-click-to-inspect slightly less convenient.
 *
 * Include this in a page with:
 *   <script src="block-devtools.js"></script>
 */

document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    const blockedCombo =
        key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (key === 'I' || key === 'J' || key === 'C')) ||
        ((e.ctrlKey || e.metaKey) && key === 'U');
    if (blockedCombo) e.preventDefault();
});
