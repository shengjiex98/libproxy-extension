chrome.action.onClicked.addListener(tab => {
    let url = tab.url
    // Do nothing if already using UNC library proxy
    if (url?.match('libproxy.lib.unc.edu'))
        return
    let newurl = 'https://login.libproxy.lib.unc.edu/login?url=' + url
    chrome.tabs.update(tab.id || 0, {url: newurl});
})