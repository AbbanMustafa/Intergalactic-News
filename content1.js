
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

    v = v.replace(/\bBill Clinton\b/g, "Mr.BigSaber");
    v = v.replace(/\bHillary('s|s(?:')?)?\b/g, "Protocol$1");
    v = v.replace(/\bClinton\b/g, "Humanoid Droid");
    v = v.replace(/\bRodham\b/g, "");


    v = v.replace(/\bBernie Sanders('s|s(?:')?)?\b/g, "Jewish Yoda$1");
    v = v.replace(/\bBernie('s|s(?:')?)?\b/g, "Jewish Yoda$1");
    v = v.replace(/\bSanders('s|s(?:')?)?\b/g, "Jewish Yoda$1");

    v = v.replace(/\bElizabeth Warren('s|s(?:')?)?\b/g, "Jar Jar Binks$1");
    v = v.replace(/\bWarren('s|s(?:')?)?\b/g, "Jar Jar Binks$1");

    v = v.replace(/\b(Barack Obama|Obama)('s|s(?:')?)?\b/g, "Mace Windu");

    v = v.replace(/\bChris Christie('s|s(?:')?)?\b/g, "Christie the hutt$1");
    v = v.replace(/\bJeb Bush('s|s(?:')?)?\b/g, "Some sad man$1");
    v = v.replace(/\bJeb('s|s(?:')?)?\b/g,"Some sad man$1");
    v = v.replace(/\bJoe Biden('s|s(?:')?)?\b/g, "Joe-Bi Den Kenobi$1");
    v = v.replace(/\bMitch McConnell('s|s(?:')?)?\b/g,"Turtle Man$1");
    v = v.replace(/\bMcConnell('s|s(?:')?)?\b/g,"Turtle Man$1");
    v = v.replace(/\bNewt Gingrich('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");

    v = v.replace(/\bTed Cruz\b/g, "Bridge Troll");
    v = v.replace(/\bCruz('s|s(?:')?)?\b/g,"Troll$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");

    //  Government terms
    v = v.replace(/\bVP\b/g, "Padawan");
    v = v.replace(/\bSenator('s|s(?:')?)?\b/g,"Admiral$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\bCongress\b/g, "the Jedi High Council");
    v = v.replace(/\bcongress\b/g, "the jedi high council");
    v = v.replace(/\bPolitician\b/g, "Sand person");
    v = v.replace(/\bSecretary of State('s|s(?:')?)?\b/g,"Supreme Chancellor$1");
    v = v.replace(/\bPresident('s|s(?:')?)?\b/g,"Emperor$1");
    v = v.replace(/\bcabinet('s|s(?:')?)?\b/g,"bundle of personal ewoks$1");

    v = v.replace(/\bmilitary('s|s(?:')?)?\b/g,"imperial fleet$1");
    v = v.replace(/\bMilitary('s|s(?:')?)?\b/g,"Imperial fleet$1");
    v = v.replace(/\barmy('s|s(?:')?)?\b/g,"around four Storm Troopers$1");

    v = v.replace(/\bWhite House('s|s(?:')?)?\b/g,"Jedi Temple$1");
    v = v.replace(/\brealDonaldTrump('s|s(?:')?)?\b/g,"notSmallHands$1");
    v = v.replace(/\bDemocrat('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\bLiberal('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\bProgressive('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\bLeftist('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\bDemocratic('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\bRepublican('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");

    //  Places
    v = v.replace(/\bRussia('s|s(?:')?)?\b/g, "Hoth$1");
    v = v.replace(/\bMiddle East('s|s(?:')?)?\b/g, "Tattoine$1");
    v = v.replace(/\bChina('s|s(?:')?)?\b/g, "Jeffrey");
    v = v.replace(/\bSyria('s|s(?:')?)?\b/g, "Jakku$1");





    // Events
    v = v.replace(/\bGreat Recession\b/g, "Phantom Menace");
    v = v.replace(/\bgreat recession\b/g, "phantom menace");
    v = v.replace(/\bIraq War\b/g, "Clone Wars");
    v = v.replace(/\bISIS('s|s(?:')?)?\b/g,"Sand People$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");

    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");
    v = v.replace(/\b_('s|s(?:')?)?\b/g,"_$1");


    // The Great Depression
    v = v.replace(/\bGreat Depression\b/g, "Clutch Plague");
    v = v.replace(/\bgreat depression\b/g, "clutch plague");

    // Memes
    v = v.replace(/\bEmail('s|s(?:')?)?\b/g,"Hologram$1");



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
