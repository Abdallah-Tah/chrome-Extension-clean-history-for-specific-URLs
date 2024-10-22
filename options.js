document.getElementById("save").addEventListener("click", () => {
    const website = document.getElementById("website").value;
    chrome.storage.sync.set({ website }, () => {
      alert("Website set successfully!");
    });
  });
  