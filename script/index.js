let scrollPosition = 0

document.addEventListener('DOMContentLoaded', () => {
	const mobileMenuButton = document.getElementById('mobile-menu-button')
	const mobileMenuOverlay = document.getElementById('mobile-menu-overlay')
	const mobileMenuCloseButton = document.getElementById('mobile-menu-close')

	// Toggle mobile menu
	mobileMenuButton.addEventListener('click', () => {
		mobileMenuOverlay.classList.remove('translate-x-full')
		mobileMenuOverlay.classList.add('translate-x-0')
	})

	// Close mobile menu
	mobileMenuCloseButton.addEventListener('click', () => {
		mobileMenuOverlay.classList.remove('translate-x-0')
		mobileMenuOverlay.classList.add('translate-x-full')
	})

	// Close menu when a link is clicked
	const mobileMenuLinks = document.querySelectorAll('#mobile-menu-overlay a')
	mobileMenuLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileMenuOverlay.classList.remove('translate-x-0')
			mobileMenuOverlay.classList.add('translate-x-full')
		})
	})
})

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('contact-form-submit').addEventListener('click', async e => {
		e.preventDefault()

		const contactResultElement = document.getElementById('contact-result-msg')
		contactResultElement.style.opacity = 0

		const nameElement = document.getElementById('name')
		const name = nameElement.value
		const emailElement = document.getElementById('email')
		const email = emailElement.value
		const messageElement = document.getElementById('message')
		const message = messageElement.value

		const response = await fetch('https://formspree.io/f/mgerrqwr', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				_replyto: email,
				email: email,
				message: message,
				_subject: 'Contact Form Submission from ' + name,
			}),
		})

		contactResultElement.style.opacity = 100
		if (response.ok) {
			nameElement.value = ''
			emailElement.value = ''
			messageElement.value = ''
			contactResultElement.textContent = 'Thank you for your message, I will be in touch shortly'
		} else {
			contactResultElement.textContent = 'Something went wrong, please try again'
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth',
			})
		})
	})

	// Get all buttons and sections
	const dropInsBtn = document.getElementById('show-drop-ins')
	const shortCoursesBtn = document.getElementById('show-short-courses')
	const bespokeBtn = document.getElementById('show-bespoke')

	const dropInsSection = document.getElementById('drop-ins-listing')
	const shortCoursesSection = document.getElementById('short-courses-listing')
	const bespokeSection = document.getElementById('bespoke-info')

	function hideAllSections() {
		dropInsSection.classList.add('hidden')
		shortCoursesSection.classList.add('hidden')
		bespokeSection.classList.add('hidden')
	}
	dropInsBtn.addEventListener('click', function () {
		hideAllSections()
		dropInsSection.classList.remove('hidden')
		document.getElementById('class-listings').scrollIntoView({ behavior: 'smooth', block: 'center' })
	})

	shortCoursesBtn.addEventListener('click', function () {
		hideAllSections()
		shortCoursesSection.classList.remove('hidden')
		document.getElementById('class-listings').scrollIntoView({ behavior: 'smooth', block: 'center' })
	})

	bespokeBtn.addEventListener('click', function () {
		hideAllSections()
		bespokeSection.classList.remove('hidden')
		document.getElementById('class-listings').scrollIntoView({ behavior: 'smooth', block: 'center' })
	})
})


document.addEventListener('DOMContentLoaded', async () => {
	const today = new Date()
	today.setUTCHours(0, 0, 0, 0)
	const todayUTCString = today.toISOString()

	const dropInResp = await fetch('/public/classes/dropins.json')
	const dropInsMaster = await dropInResp.json()
	const dropIns = dropInsMaster.sort((a, b) => a.timestamp > b.timestamp).filter(item => item.timestamp > todayUTCString)

	if (!dropIns || dropIns.length === 0) {
		document.getElementById('drop-ins-collection-no-class-msg').style.display = 'block'
		document.getElementById('drop-ins-collection').style.display = 'none'
	} else {
		const dropInsSection = document.getElementById('drop-ins-collection')
		dropIns.forEach(item => {
			const card = generateCard(item)
			dropInsSection.appendChild(card)
		})
	}

	const shortClassesResp = await fetch('/public/classes/short.json')
	const shortClassesMaster = await shortClassesResp.json()
	const shortClasses = shortClassesMaster.sort((a, b) => a.timestamp > b.timestamp).filter(item => item.timestamp > todayUTCString)

	if (!shortClasses || shortClasses.length === 0) {
		document.getElementById('short-term-collection-no-class-msg').style.display = 'block'
		document.getElementById('short-courses-collection').style.display = 'none'
	} else {
		const shortCoursesSection = document.getElementById('short-courses-collection')
		shortClasses.forEach(item => {
			const card = generateCard(item)
			shortCoursesSection.appendChild(card)
		})
	}
})
