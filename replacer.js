var elements = document.getElementsByTagName('*');

var wordPairs = {
	dog: "hitler",
	easter: "god's son living again day",
	irish: "small green country",
	rebellion: "fighting against",
	insurrection: "fight",
	ireland: "green people country",
	april: "month four",
	launched: "started doing",
	republicans: "people who want people-decided power",
	british: "other country",
	rule: "law making",
	establish: "make",
	independent: "on their own",
	republic: "country where the people choose the leader",
	united: "together",
	kingdom: "big man at the top country",
	heavily: "strongly",
	engaged: "got into",
	significant: "really big",
	uprising: "big fight",
	action: "doing",
	organised: "did",
	military: "fighting people",
	council: "decision people",
	brotherhood: "group of brothers",
	monday: "day one of the week",
	volunteers: "people who work for free",
	schoolmaster: "big school man",
	activist: "cause furtherer",
	seized: "took",
	thousand: "ten hundred",
	thousands: "tens of hundreds",
	gradually: "slowly",

};

var re = new RegExp(Object.keys(wordPairs).join('|'), 'gi');

function explainify(word){
	var candidate = wordPairs[word.toLowerCase()];
	return candidate === null? word : candidate;
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var str = text.replace(re, explainify);
            if (str !== text) {
                element.replaceChild(document.createTextNode(str), node);
            }
        }
    }
}
