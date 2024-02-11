const handleSubmit = async () => {
  try {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let id = Math.floor(Math.random() * 16);
      chrome.tabs.sendMessage(tabs[0].id, {id: id}, function(response) {
        if(response.id===id) {
          const summaryHere = document.getElementById('summaryHere');
          summaryHere.innerHTML = response.data;
        }        
      });
    });
  } catch (err) {
    console.log(err);
  }
};
handleSubmit();