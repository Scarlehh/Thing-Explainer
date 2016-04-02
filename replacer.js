var elements = document.getElementsByTagName('*');

var wordPairs = {
   cat: "dog",
   dog: "hitler",
};

function explainify(word){
	return wordPairs[word];
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var str = text.replace(/cat|dog|goat/gi, explainify);
            if (str !== text) {
                element.replaceChild(document.createTextNode(str), node);
            }
        }
    }
}
