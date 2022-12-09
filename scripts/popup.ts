console.log("hi")

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url
    // Do nothing if already using UNC library proxy
    if (url?.match('libproxy.lib.unc.edu'))
        return
    chrome.tabs.update(tabs[0].id || 0, {url: 'https://libproxy.lib.unc.edu/login?url=' + url});
})