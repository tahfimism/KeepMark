# KeepMark - Browser Tab Bookmark Extension

## 1. Project Overview
KeepMark is a lightweight, efficient browser extension designed to help users quickly bookmark their current active tab for later reference. Unlike traditional browser bookmarks which can often become cluttered and difficult to manage, KeepMark provides a dedicated, accessible interface directly within the browser's popup area. It solves the problem of "tab overload" by allowing users to save URLs with a single click, store them locally, and manage them through a clean, minimalist list.

## 2. Mono-repo / Sub-project Breakdown
This repository consists of a single, focused project: the KeepMark Browser Extension. It is not a mono-repo. All source files are contained within the root directory, working together to deliver the extension's functionality.

*   **Sub-project:** KeepMark Extension
    *   **Purpose:** To provide a popup-based interface for saving and managing tab bookmarks.
    *   **Tech Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3, Chrome Extension API (Manifest V3).
    *   **Features:** One-click tab saving, persistent local storage, and real-time list management.

## 3. Exhaustive Feature List
KeepMark offers a comprehensive set of features tailored for tab management:

*   **Active Tab Capture:** Automatically retrieves the title and URL of the currently active tab when the "SAVE THIS TAB" button is clicked.
*   **LIFO (Last-In, First-Out) Display:** Newly saved tabs are prepended to the top of the list, ensuring that the most recently saved items are immediately visible.
*   **Persistent Storage:** Utilizes the `chrome.storage.local` API to ensure that saved bookmarks persist even after the browser is closed or the extension is updated.
*   **Dynamic List Rendering:** The UI automatically updates to reflect the current state of saved bookmarks whenever an item is added or removed.
*   **One-Click Deletion:** Each saved entry features a dedicated delete button (🗑️) for quick removal from the list.
*   **Hyperlinked Entries:** Saved titles are rendered as clickable links that open the bookmarked URL in a new browser tab (`target="_blank"`).
*   **Responsive Popup UI:** The popup is designed with a fixed width of 300px, optimized for the browser's extension container.
*   **Visual Feedback:** Interactive buttons with hover states and a clean, color-coded interface using green accents for a positive user experience.
*   **Semantic HTML Structure:** Uses proper list elements (`<ul>` and `<li>`) for better accessibility and structure.

## 4. Technical Architecture & Tech Stack
The project follows a standard browser extension architecture using the latest Manifest V3 standards.

*   **Frontend:**
    *   **HTML5:** Defines the structure of the popup interface (`index.html`).
    *   **CSS3:** Handles the styling and layout using Flexbox for centering and alignment (`style.css`).
    *   **JavaScript (Vanilla):** Implements the core logic, DOM manipulation, and interaction with Chrome APIs (`script.js`).
*   **Chrome Extension APIs:**
    *   **`chrome.tabs`:** Used to query the active tab's metadata (Title and URL).
    *   **`chrome.storage.local`:** Provides an asynchronous, local key-value store for persistent data.
*   **Manifest V3:** The extension configuration file (`manifest.json`) defines permissions, the default popup, and versioning, adhering to modern security and performance standards.

## 5. Under-the-Hood Optimizations
*   **Event Delegation:** Instead of attaching individual event listeners to every delete button in the list, a single event listener is attached to the parent container (`#saved-pages`). This significantly reduces memory overhead and ensures that newly added items are automatically handled.
*   **Asynchronous Storage Handling:** All storage operations (`get` and `set`) are handled asynchronously, preventing the UI from freezing during data retrieval or persistence.
*   **LIFO Data Structure:** Using `Array.prototype.unshift()` for new entries ensures that the most relevant (recent) bookmarks are prioritized at the top of the user's view.
*   **Efficient DOM Manipulation:** The `renderList` function clears and repaints the list efficiently, ensuring the UI remains in sync with the underlying data model.
*   **Clean CSS Reset:** Uses `box-sizing: border-box` across all elements to ensure predictable sizing and layout behavior.

## 6. Setup & Installation Instructions
To run KeepMark locally for development or personal use, follow these steps:

### Prerequisites
*   A Chromium-based browser (Google Chrome, Microsoft Edge, Brave, etc.).
*   Basic knowledge of how to load unpacked extensions.

### Installation Steps
1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd keepmark
    ```
2.  **Open Extension Management:**
    *   In Chrome, navigate to `chrome://extensions/`.
    *   In Edge, navigate to `edge://extensions/`.
3.  **Enable Developer Mode:**
    *   Toggle the "Developer mode" switch in the top right corner of the extensions page.
4.  **Load the Extension:**
    *   Click the "Load unpacked" button.
    *   Navigate to and select the directory containing the project files (where `manifest.json` is located).
5.  **Pin the Extension (Optional):**
    *   Click the puzzle piece icon in the browser toolbar and pin "KeepMark" for easy access.

### Environment Variables
No environment variables or `.env` files are required for this project as it relies entirely on local browser APIs.

## 7. Usage Examples

### Saving a Tab
1.  Navigate to a website you want to save.
2.  Click the **KeepMark** icon in your browser toolbar.
3.  Click the **SAVE THIS TAB** button.
4.  The page title will immediately appear at the top of the "Saved pages" list.

### Accessing a Saved Page
1.  Open the **KeepMark** popup.
2.  Click on any of the saved page titles.
3.  The page will open in a new tab.

### Deleting a Saved Page
1.  Open the **KeepMark** popup.
2.  Locate the entry you wish to remove.
3.  Click the trash can icon (🗑️) next to the link.
4.  The entry will be removed from the list and storage.
