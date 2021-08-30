//  The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const QUOTES = [
	{
		quote: "There is nothing more agreeable than having a place where one can throw on the floor as many cigar butts as one pleases without the subconscious fear of a maid who is waiting like a sentinel to place an ashtray where the ashes are going to fall.",
		author: "Jimy Handriks",
	},
	{
		quote: "For all the opportunities that arise from the Fourth Industrial Revolution - and there are many - it does not come without risks. Perhaps one of the greatest is that the changes will exacerbate inequalities. And as we all know, a more unequal world is a less stable one.",
		author: "Pablo Picaso",
	},
	{
		quote: "Altogether one quarter of German territory was lost in 1945, territory which had for many centuries belonged to Germany.",
		author: "John Doe",
	},
	{
		quote: "So there's no such thing as one too many this, one too many that. I remember, you're reminding me of early in my career, somebody said to me: why are you taking so many roles as a policeman.",
		author: "Alika Manchini",
	},
	{
		quote: "There are too many mediocre things in life to deal with. Love shouldn't be one of them. Anything less than extraordinary is a waste of my time.",
		author: "Jaba Gaxansky",
	},
];

window.onload = init;
function init() {
	generateQuote();
}

function generateQuote() {
	let quoteSize = QUOTES.length;
	let randomIndex = Math.floor(Math.random() * quoteSize);
	let randomQuoteData = QUOTES[randomIndex];

	document.getElementById("text").innerText = randomQuoteData.quote;
	document.getElementById("author").innerText = randomQuoteData.author;
}
