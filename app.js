const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('color-btn');
const span = document.getElementById('color-name');

btn.addEventListener("click", () => {
	const rand = Math.floor(Math.random() * colors.length);
	const color = colors[rand];
	span.innerHTML = color;
	document.body.style.background = color;
})