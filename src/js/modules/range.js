const inputRange = document.querySelector('input[type="range"]');
const rangePercent = document.querySelector(".range__percent span");

inputRange &&
	inputRange.addEventListener("input", (event) => {
		rangePercent.textContent = inputRange.value;
	});
