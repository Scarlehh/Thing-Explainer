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
   tight: "close",
   tightly: "closely",
   regulated: "controlled",
   regulate: "control",
   patient: "sick person",
   terminal: "stop",
   terminally: "lost",
   ill: "sick",
   discussing: "talking about",
   separated: "put alone",
   active: "busy",
   passive: "calm",
   differences: "changes",
   described: "explained",
   occurs: "happens",
   occur: "happen",
   treatment: "care",
   example: "case",
   examples: "cases",
   include: "have",
   remove: "take away",
   removing: "taking away",
   support: "hold up",
   supporting: "holding up",
   ventilator: "breathing help",
   alive: "not dead",
   providing: "giving",
   provide: "give",
   involve: "has",
   involves: "has",
   deliberate: "definite",
   deliberately: "definitely",
   injection: "hit",
   drug: "good food",
   pill: "small good food bits",
   result: "lead",
   acceptable: "alright",
   choice: "pick",
   definite: "clear",
   argue: "fight",
   painless: "soft hurt"
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
