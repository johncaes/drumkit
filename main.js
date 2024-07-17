const keys = document.querySelectorAll('.key')
const sounds = document.getElementsByTagName('audio')
const soundsArr = Array.from(sounds)

// sounds[0].play()
function playSound(element) {
	element.classList.add('--playing') // ui display

	// play sound
	let keyPressed = element.dataset.key
	const soundFound = soundsArr.find(
		(sound) => sound.dataset.key === keyPressed
	)
	soundFound.currentTime = 0
	soundFound.play()
}
function stopSound(element) {
	element.classList.remove('--playing')

	// play sound
	let keyUnressed = element.dataset.key
	const soundFound = soundsArr.find(
		(sound) => sound.dataset.key === keyUnressed
	)
	// console.log('stop', soundFound)
	// soundFound.currentTime = 0
	// soundFound.stop()
}

window.addEventListener('keydown', (e) => {
	let pressedKey = e.code
	keys.forEach((keyElement) => {
		let uiKey = keyElement.dataset.key
		if (uiKey === pressedKey) {
			playSound(keyElement)
		}
	})
})

window.addEventListener('keyup', (e) => {
	let unpressedKey = e.code
	keys.forEach((keyElement) => {
		let uiKey = keyElement.dataset.key
		if (uiKey === unpressedKey) {
			stopSound(keyElement)
		}
	})
})

window.addEventListener('DOMContentLoaded', () => {
	// console.log(sounds[0].dataset.key)
})
