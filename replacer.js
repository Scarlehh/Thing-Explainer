var elements = document.getElementsByTagName('*');

var wordPairs = {
	action: "doing",
	activist: "cause furtherer",
	april: "month four",
	assisted: "helped",
	british: "other country",
	brotherhood: "group of brothers",
	cat: "dog",
	council: "decision people",
	countries: "areas of people with the same tongue",
	country: "area of people with the same tongue",
	disease: "bad form",
	diseases: "bad forms",
	dog: "hitler",
	easter: "god's son living again day",
	engaged: "got into",
	establish: "make",
	euthanasia: "nice death",
	generally: "usually",
	gradually: "slowly",
	heavily: "strongly",
	illegal: "not allowed",
	independent: "on their own",
	insurrection: "fight",
	intent: "plan",
	involuntary: "not wanted by the person",
	ireland: "green people country",
	irish: "small green country",
	kingdom: "big man at the top country",
	launched: "started doing",
	military: "fighting people",
	monday: "day one of the week",
	murder: "other person kill",
	non: "not",
	organised: "did",
	rebellion: "fighting against",
	regarded: "looked at",
	republic: "country where the people choose the leader",
	republicans: "people who want people-decided power",
	rule: "law making",
	schoolmaster: "big school man",
	seized: "took",
	significant: "really big",
	specifically: "definitely",
	suffer: "hurt",
	suffering: "hurting",
	suicide: "self death",
	thousand: "ten hundred",
	thousands: "tens of hundreds",
	united: "together",
	uprising: "big fight",
	voluntary: "wanted by the person",
	volunteers: "people who work for free",
	adblocking: "business picture blocking",
	measure: "look at",
	unlock: "open up",
	revenue: "money",
	intrusive: "bad",
	adblockers: "people who block the business pictures",
	ad: "business picture",
	ads: "business pictures",
	install: "use",
	website: "computer page",
	websites: "computer pages",
	display: "show",
	tailored: "specially made",
	cost: "take money from",
};

var re = new RegExp(Object.keys(wordPairs).join('|'), 'gi');

function explainify(word){
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
