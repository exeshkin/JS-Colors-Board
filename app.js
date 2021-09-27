const board = document.querySelector('#board')
const colors = []
const SQUARES_NUMB = 1023

while (colors.length < 500) {
	colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`)
}

function rand(frm, to) {
	return ~~(Math.random() * (to - frm)) + frm
}

console.log(colors);

for (let i = 0; i < SQUARES_NUMB; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColor(square))

	square.addEventListener('mouseleave', () => removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}