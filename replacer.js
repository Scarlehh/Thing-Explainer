var elements = document.getElementsByTagName('*');

var wordPairs = {
	acceptable: "alright",
	action: "doing",
	active: "busy",
	activist: "cause furtherer",
	ad: "business picture",
	adblockers: "people who block the business pictures",
	adblocking: "business picture blocking",
	ads: "business pictures",
	alive: "not dead",
	april: "month four",
	argue: "fight",
	assisted: "helped",
	british: "other country",
	brotherhood: "group of brothers",
	cat: "dog",
	choice: "pick",
	cost: "take money from",
	council: "decision people",
	countries: "areas of people with the same tongue",
	country: "area of people with the same tongue",
	definite: "clear",
	deliberate: "definite",
	deliberately: "definitely",
	described: "explained",
	differences: "changes",
	discussing: "talking about",
	disease: "bad form",
	diseases: "bad forms",
	display: "show",
	dog: "hitler",
	drug: "good food",
	easter: "god's son living again day",
	engaged: "got into",
	establish: "make",
	euthanasia: "nice death",
	example: "case",
	examples: "cases",
	generally: "usually",
	gradually: "slowly",
	heavily: "strongly",
	ill: "sick",
	illegal: "not allowed",
	include: "have",
	independent: "on their own",
	injection: "hit",
	install: "use",
	insurrection: "fight",
	intent: "plan",
	intrusive: "bad",
	involuntary: "not wanted by the person",
	involve: "has",
	involves: "has",
	ireland: "green people country",
	irish: "small green country",
	kingdom: "big man at the top country",
	launched: "started doing",
	measure: "look at",
	military: "fighting people",
	monday: "day one of the week",
	murder: "other person kill",
	non: "not",
	occur: "happen",
	occurs: "happens",
	organised: "did",
	painless: "soft hurt",
	passive: "calm",
	patient: "sick person",
	pill: "small good food bits",
	provide: "give",
	providing: "giving",
	rebellion: "fighting against",
	regarded: "looked at",
	regulate: "control",
	regulated: "controlled",
	remove: "take away",
	removing: "taking away",
	republic: "country where the people choose the leader",
	republicans: "people who want people-decided power",
	result: "lead",
	revenue: "money",
	rule: "law making",
	schoolmaster: "big school man",
	seized: "took",
	separated: "put alone",
	significant: "really big",
	specifically: "definitely",
	suffer: "hurt",
	suffering: "hurting",
	suicide: "self death",
	support: "hold up",
	supporting: "holding up",
	tailored: "specially made",
	terminal: "stop",
	terminally: "lost",
	thousand: "ten hundred",
	thousands: "tens of hundreds",
	tight: "close",
	tightly: "closely",
	treatment: "care",
	united: "together",
	unlock: "open up",
	uprising: "big fight",
	ventilator: "breathing help",
	voluntary: "wanted by the person",
	volunteers: "people who work for free",
	website: "computer page",
	websites: "computer pages",
};

var re = new RegExp(Object.keys(wordPairs).join('|'), 'gi');

function explainify(word){
	if (Math.random() < 0.01) {
		return "Hitler";
	}
	var candidate = wordPairs[word.toLowerCase().trim()];
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
