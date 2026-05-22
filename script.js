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

const generateCard = item => {
	const card = document.createElement('div')
	card.className = 'mb-2 p-4 rounded-lg border border-gray-700 shadow-sm flex justify-between gap-6'
	card.innerHTML = `
<div class="flex-1">
    <h3 class="text-lg font-bold text-[#f43f5e]">${item.title}</h3>
    <p class="text-sm font-semibold">${item.subtitle}</p>
    <p class="text-sm whitespace-pre-wrap mt-2 text-gray-400">${item.description}</p>
    
    <div class="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm">
    <span class="flex items-center">
        <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        ${item.dateTimeString}
    </span>
    <span class="flex items-center">
        <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        ${item.googleMapsURL ? `<a href=${item.googleMapsURL}>${item.location}</a>` : item.location}
    </span>
    </div>
</div>

<div class="flex items-center h-full">
    <div class="text-lg bg-[#bef264] text-[#064e3b] font-semibold p-4 rounded text-center">
        ${item.price}
    </div>
</div>`

	return card
}

document.addEventListener('DOMContentLoaded', async () => {
	const today = new Date()
	today.setUTCHours(0, 0, 0, 0)
	const todayUTCString = today.toISOString()
	console.log(todayUTCString)

	const dropInResp = await fetch('./classes/dropins.json')
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

	const shortClassesResp = await fetch('./classes/short.json')
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
