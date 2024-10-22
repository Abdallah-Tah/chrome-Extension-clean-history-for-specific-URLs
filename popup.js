document.getElementById("deleteHistory").addEventListener("click", () => {
    const website = document.getElementById("website").value;
    if (website) {
        chrome.history.search(
            {
                text: website, // Search query based on the website URL
                startTime: 0, // From the beginning of time
            },
            (results) => {
                // Iterate through the results and delete each history item
                results.forEach((historyItem) => {
                    chrome.history.deleteUrl({ url: historyItem.url });
                });
                alert(`All history for ${website} has been deleted.`);
            }
        );
    } else {
        alert("Please enter a website URL.");
    }
});
