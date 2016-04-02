var elements = document.getElementsByTagName('*');

var wordPairs = {
   cat: "dog",
   dog: "hitler",
   euthanasia: "nice death",
   disease: "bad form",
   diseases: "bad forms",
   suffer: "hurt",
   regarded: "looked at",
   assisted: "helped",
   suicide: "self death",
   murder: "other person kill",
   intent: "plan",
   suffering: "hurting",
   voluntary: "wanted by the person",
   specifically: "definitely",
   non: "not",
   involuntary: "not wanted by the person",
   generally: "usually",
   illegal: "not allowed",
   country: "area of people with the same tongue",
   countries: "areas of people with the same tongue",
};

function explainify(word){
	var candidate = wordPairs[word.toLowerCase().trim()];
	debugger
	return (candidate === null || candidate === undefined ? word : candidate);
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var str = text.replace(/\b[a-zA-Z]+?\b/gi, explainify);
            if (str !== text) {
                element.replaceChild(document.createTextNode(str), node);
            }
        }
    }
}
