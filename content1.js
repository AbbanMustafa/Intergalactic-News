
function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{




    // Main Politicians
    v = v.replace(/\bDonald Trump('s|s(?:')?)?\b/g, "Sith Lord Trump$1");
    v = v.replace(/\bTrump('s|s(?:')?)?\b/g, "Darth Trump$1");
    v = v.replace(/\bHillary Rodham Clinton('s|s(?:')?)?\b/g, "Supreme Chancellor Clinton$1");
    v = v.replace(/\bHillary Clinton('s|s(?:')?)?\b/g, "Supreme Chancellor Clinton$1");
    v = v.replace(/\bBernie Sanders('s|s(?:')?)?\b/g, "Jewish Yoda$1");
    v = v.replace(/\bSanders('s|s(?:')?)?\b/g, "Jewish Yoda$1");
    v = v.replace(/\bElizabeth Warren('s|s(?:')?)?\b/g, "Jar Jar Binks");

    v = v.replace(/\b(Barack Obama|Obama)('s|s(?:')?)?\b/g, "Mace Windu");

    v = v.replace(/\bChris Christie('s|s(?:')?)?\b/g, "Christie the hutt$1");
    v = v.replace(/\bJeb Bush('s|s(?:')?)?\b/g, "Some sad man$1");
    v = v.replace(/\Joe Biden('s|s(?:')?)?\b/g, "Joe-Biden Kenobi$1");

    v = v.replace(/\Ted Cruz\b/g, "Count Dooku");
    v = v.replace(/\_\b/g, "_");


    //  Government terms
    v = v.replace(/\vp\b/g, "apprentice");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");


    //  Places
    v = v.replace(/\Russia('s|s(?:')?)?\b/g, "Hoth");
    v = v.replace(/\Middle East('s|s(?:')?)?\b/g, "Tattoine");
    v = v.replace(/\China\b/g, "_");
    v = v.replace(/\Syria('s|s(?:')?)?\b/g, "Jakku");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");



    // Millennial
    v = v.replace(/\bCongress\b/g, "Jedi Council");
    v = v.replace(/\bcongress\b/g, "jedi council");
    v = v.replace(/\bPolitician(?:(s)\b(')|s\b)/g, "Ewok$2$1");
    v = v.replace(/\bSenator(?:(s)\b(')|s\b)/g, "Sand Person$2$1");

    // The Great Recession
    v = v.replace(/\bGreat Recession\b/g, "Phantom Menace");
    v = v.replace(/\bgreat recession\b/g, "phantom menace");
    v = v.replace(/\Iraq War\b/g, "Clone Wars");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");
    v = v.replace(/\_\b/g, "_");

    // The Great Depression
    v = v.replace(/\bGreat Depression\b/g, "Clutch Plague");
    v = v.replace(/\bgreat depression\b/g, "clutch plague");

    // Occupy Wall Street
    v = v.replace(
        /\b(?:(?:Occupy|OWS) (?:M|m)ovement)|(?:Occupy Wall Street)\b/g,
        "Great Ape-Snake War");



    return v;
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].nodeType === 3) {
                // Replace the text for text nodes
                handleText(mutation.addedNodes[i]);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(mutation.addedNodes[i]);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
