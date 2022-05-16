const selectField = document.querySelector(".select");
const selectFieldValue = document.querySelector(".select__value span");
const selectDropdown = document.querySelector(".select__dropdown");
const selectItems = document.querySelectorAll(".select__item");

selectField &&
	selectField.addEventListener("click", (event) => {
		if (selectField.classList.contains("select-active")) {
			selectField.classList.remove("select-active");
		} else if (event.target.closest(".select__value")) {
			selectField.classList.add("select-active");
		}
		if (selectField.classList.contains("select-active")) {
			selectDropdown.addEventListener("click", (event) => {
				selectItems.forEach((i) =>
					i.classList.remove("select__item-active")
				);
				event.target.classList.add("select__item-active");
				selectFieldValue.textContent = event.target.textContent;
				selectField.classList.remove("select-active");
			});

			window.addEventListener("click", (event) => {
				if (!event.target.closest(".select")) {
					selectField.classList.remove("select-active");
				}
			});
		}
	});
