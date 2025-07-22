



// Function to render the list of saved pages
function renderList() {

    const savedPages = document.getElementById('saved-pages');

    // Clear the list to prevent duplicates
    savedPages.innerHTML = '';

    // Get the saved pages from chrome storage
    chrome.storage.local.get(["saved"], function(result) {
        let saved = result.saved || [];
        
        // Loop through the saved pages and create the list items
        for (let i = 0; i < saved.length; i++) {
            const page = document.createElement('li'); // Changed to li for semantic HTML
            page.className = 'page';
            page.innerHTML = `<a href="${saved[i][1]}" target="_blank">${saved[i][0]}</a>
            <button class="delete-button" data-index="${i}">🗑️</button>`;
            savedPages.appendChild(page);
        }
    });
}

// Function to delete a page
function deletePage(index) {
  chrome.storage.local.get(["saved"], function(result) {
    let saved = result.saved || [];
    saved.splice(index, 1);
    chrome.storage.local.set({ saved }, () => {
      // Re-render the list after deleting
      renderList();
    });
  });
}

// Initial render of the list when the popup is opened
renderList();

// Event listener for the save button
document.getElementById('save-button').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const currentTab = tabs[0];
        const newEntry = [currentTab.title, currentTab.url];

        chrome.storage.local.get(["saved"], function(result) {
            let saved = result.saved || [];
            saved.unshift(newEntry);
            chrome.storage.local.set({ saved }, () => {
                // Re-render the list after saving a new entry
                renderList();
            });
        });
    });
});





// Event listener for delete buttons (using event delegation)
document.getElementById('saved-pages').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-button')) {
        const index = parseInt(event.target.getAttribute('data-index'), 10);
        deletePage(index);
    }
});