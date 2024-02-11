console.log("any page will run this") ;
chrome.runtime.onMessage.addListener((response, sender, sendResponse)=>
{
    console.log(response);
});