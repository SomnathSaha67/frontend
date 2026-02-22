function favouriteMovieGenre(genre) {
	const fontMap = {
		space: "'Orbitron', 'Trebuchet MS', sans-serif",
		scary: "'Creepster', 'Times New Roman', serif",
		military: "'Black Ops One', 'Arial Black', sans-serif",
		romantic: "'Great Vibes', 'Georgia', cursive",
		cowboy: "'Rye', 'Georgia', serif",
		fantasy: "'Cinzel Decorative', 'Palatino Linotype', serif",
		superhero: "'Bangers', 'Impact', sans-serif"
	};

	const chosenFont = fontMap[genre] || "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
	document.body.style.fontFamily = chosenFont;
}

function favouriteFruit(fruit) {
	const colorMap = {
		watermelon: "#fc6c85",
		tomato: "#ff6347",
		banana: "#ffe135",
		orange: "#ffa500",
		avocado: "#568203",
		blueberry: "#4f86f7",
		regular: "#f5f5f5"
	};

	const chosenColor = colorMap[fruit] || colorMap.regular;
	document.body.style.backgroundColor = chosenColor;
}

function favouriteMode(mode) {
	const isDark = mode === "dark";
	document.body.style.color = isDark ? "#f3f3f3" : "#111111";
	document.body.style.backgroundImage = isDark
		? "linear-gradient(180deg, #1f2937 0%, #111827 100%)"
		: "none";

	const card = document.getElementById("profile-card");
	if (card) {
		card.style.backgroundColor = isDark ? "rgba(17, 24, 39, 0.85)" : "#ffffff";
		card.style.borderColor = isDark ? "#374151" : "#e5e7eb";
	}
}

function favouriteEdgeStyle(style) {
	const edgeMap = {
		round: "20px",
		sharp: "0px",
		soft: "10px"
	};

	const radius = edgeMap[style] || edgeMap.soft;
	const card = document.getElementById("profile-card");
	const photo = document.getElementById("profile-photo");
	const emailInput = document.getElementById("email-input");
	const joinButton = document.getElementById("join-button");

	if (card) {
		card.style.borderRadius = radius;
	}
	if (photo) {
		photo.style.borderRadius = radius;
	}
	if (emailInput) {
		emailInput.style.borderRadius = radius;
	}
	if (joinButton) {
		joinButton.style.borderRadius = radius;
	}
}

//font space/scary/military/romantic/cowboy/fantasy/superhero
favouriteMovieGenre("superhero");
//page color watermelon/tomato/banana/orange/avocado/blueberry
favouriteFruit("banana");
// dark/light mode
favouriteMode("light");
// card round/sharp/soft
favouriteEdgeStyle("round");