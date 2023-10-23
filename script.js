const genderChoise = document.getElementById("genderSelect");
const personalAge = document.getElementById("personalAge");
const personalHeight = document.getElementById("personalHeight");
const personalWight = document.getElementById("personalWight");
const normaKalori = document.querySelector('normaKalori');

compareRes();

// подсчет персонального кбжу
function kbzu() {
	if (genderChoise.value <= "1") {
		let resultWomen = (((10 * personalWight.value) + (6.25 * personalHeight.value) - (5 * personalAge.value) - 161) * personalActiveSelect.value);
		document.getElementById("normaKalori").innerHTML = (resultWomen.toFixed(2));

		let protein = ((resultWomen * 0.3) / 4);
		document.getElementById("protein").innerHTML = (protein.toFixed(2));

		let fats = ((resultWomen * 0.3) / 9);
		document.getElementById("fats").innerHTML = (fats.toFixed(2));

		let carbohydrates = ((resultWomen * 0.4) / 4);
		document.getElementById("carbohydrates").innerHTML = (carbohydrates.toFixed(2));
	}

	else if (genderChoise.value >= "2") {
		let resultMen = (((10 * personalWight.value) + (6.25 * personalHeight.value) - (5 * personalAge.value) + 5) * personalActiveSelect.value);
		document.getElementById("normaKalori").innerHTML = (resultMen.toFixed(2));

		let protein = ((resultMen * 0.3) / 4);
		document.getElementById("protein").innerHTML = (protein.toFixed(2));

		let fats = ((resultMen * 0.3) / 9);
		document.getElementById("fats").innerHTML = (fats.toFixed(2));

		let carbohydrates = ((resultMen * 0.4) / 4);
		document.getElementById("carbohydrates").innerHTML = (carbohydrates.toFixed(2));
	};

	compareRes();
};
// конец подсчета персонального кбжу

// Прибавление / Вычитание снеков
const plusOne = document.getElementById("plusOne"),
	minusOne = document.getElementById("minusOne"),
	numberOne = document.getElementById("numberOne");

let one = 0;

plusOne.addEventListener("click", () => {
	one++;
	numberOne.innerText = one;
});
minusOne.addEventListener("click", () => {
	if (one > 0) {
		one--;
		numberOne.innerText = one;
	}
});

const plusTwo = document.getElementById("plusTwo"),
	minusTwo = document.getElementById("minusTwo"),
	numberTwo = document.getElementById("numberTwo");

let two = 0;

plusTwo.addEventListener("click", () => {
	two++;
	numberTwo.innerText = two;
});
minusTwo.addEventListener("click", () => {
	if (two > 0) {
		two--;
		numberTwo.innerText = two;
	}
});

const plusThree = document.getElementById("plusThree"),
	minusThree = document.getElementById("minusThree"),
	numberThree = document.getElementById("numberThree");

let three = 0;

plusThree.addEventListener("click", () => {
	three++;
	numberThree.innerText = three;
});
minusThree.addEventListener("click", () => {
	if (three > 0) {
		three--;
		numberThree.innerText = three;
	}
});

const plusFour = document.getElementById("plusFour"),
	minusFour = document.getElementById("minusFour"),
	numberFour = document.getElementById("numberFour");

let four = 0;

plusFour.addEventListener("click", () => {
	four++;
	numberFour.innerText = four;
});
minusFour.addEventListener("click", () => {
	if (four > 0) {
		four--;
		numberFour.innerText = four;
	}
});
//  Конец функции прибавления / вычитания

//  Рассчет плана снеков
function planSnek() {
	let chipsCount = document.getElementById("numberOne").innerHTML;
	let chipsK = (728*chipsCount);
	let chipsP = (8.4*chipsCount);
	let chipsF = (44.8*chipsCount);
	let chipsC = (74.2*chipsCount);

	let popcornCount = document.getElementById("numberTwo").innerHTML;
	let popcornK = (340*popcornCount);
	let popcornP = (4.56*popcornCount);
	let popcornF = (17.76*popcornCount);
	let popcornC = (40.64*popcornCount);

	let energyCount = document.getElementById("numberThree").innerHTML;
	let energyDrinkK = (240.3*energyCount);
	let energyDrinkP = (0*energyCount);
	let energyDrinkF = (0*energyCount);
	let energyDrinkC = (55.625*energyCount);

	let colaCount = document.getElementById("numberFour").innerHTML;
	let cocaColaK = (225*colaCount);
	let cocaColaP = (0*colaCount);
	let cocaColaF = (0*colaCount);
	let cocaColaC = (52.5*colaCount);

	let finK = (chipsK+popcornK+energyDrinkK+cocaColaK);
	let finP = (chipsP+popcornP+energyDrinkP+cocaColaP);
	let finF = (chipsF+popcornF+energyDrinkF+cocaColaF);
	let finC = (chipsC+popcornC+energyDrinkC+cocaColaC);

	document.getElementById("planKalori").innerHTML = (finK.toFixed(2));
	document.getElementById("planProtein").innerHTML = (finP.toFixed(2));
	document.getElementById("planFats").innerHTML = (finF.toFixed(2));
	document.getElementById("planCarbohydrates").innerHTML = (finC.toFixed(2));

	compareRes();
}
//  Конец рассчета плана снеков

// Сравнение результатов

function compareRes() {
	let normaK = parseInt(document.getElementById("normaKalori").innerHTML);
	let planK = parseInt(document.getElementById("planKalori").innerHTML);

	if (normaK > planK) {
		document.getElementById("resultCompare").innerHTML = ("Не превышает норму!");
	}

	else if (normaK < planK) {
		let proportion = (((planK - normaK)*100)/normaK);
		document.getElementById("resultCompare").innerHTML = `Превышает норму на ${proportion.toFixed() + '%'}`;
	}

	else {
		document.getElementById("resultCompare").innerHTML = ("Идёт рассчёт...");
	}
}
