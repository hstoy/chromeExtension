window.onload = () => {
    const popupContainer = document.getElementsByTagName('ytd-popup-container')[0];
    console.log("correct url");
    var observer = mutObserver;
    observer.observe(popupContainer, { childList: true, subtree: true });
    //observer.disconnect(); - to stop observing
};

var mutObserver = new WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        let addedElements = mutation.addedNodes;
        console.log(addedElements.length);
        if (addedElements.length > 0) {
            console.log(document.getElementById('button'));
            document.getElementById('button').click();
            console.log("we clicked it boys... auto pausing is no more!")
        }
    });    
});
