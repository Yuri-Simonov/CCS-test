let input = document.querySelector("input[name='file']");
let span = document.querySelector(".form__file span");

input.addEventListener("change", function () {
	let countFiles = 0;
	if (this.files && this.files.length >= 1) countFiles = this.files.length;

	if (countFiles) span.innerText = "Выбрано файлов: " + countFiles;
	else span.innerText = labelVal;
});
