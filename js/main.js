const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

clickBtn.addEventListener('click', () => {
	popup.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
	popup.style.display = 'none';
});
popup.addEventListener('click', () => {
	popup.style.display = 'none';
});

document.addEventListener("mousemove", function () {
	myFunction(event);
});

var mouse;
var cursor = document.getElementById("cursor");

function myFunction(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
	cursor.style.left = (mouseX - 555) + "px";
	cursor.style.top = (mouseY - 555) + "px";
}
