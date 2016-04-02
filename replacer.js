var elements = document.getElementsByTagName('*');

var wordPairs = {
	cat: "dog",
	dog: "hitler",
	easter: "god son living again day",
	irish: "green",
	rebellion: "fighting against",
	insurrection: "against-ing",
	ireland: "green place",
	april: "month four",
	launched: "fired in the air",
	republicans: "alone country-running people",
	british: "other country",
	rule: "making to to",
	establish: "make",
	independent: "on their own",
	republic: "alone country",
	united: "together",
	kingdom: "big man at the top country",
	heavily: "strongly",
	engaged: "got into",
	significant: "really big",
	uprising: "big fight",
	action: "doing",
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
