const generateCard = item => {
	const card = document.createElement('div')
	card.className =
		'mb-2 p-4 rounded-lg border border-gray-700 shadow-sm flex flex-col justify-between gap-2'
	card.innerHTML = `
    <div class="flex gap-2">
        <div class="flex-1">
            <h3 class="font-bold text-[#f43f5e]" style="font-size:clamp(1.3rem, 7vw, 1.8rem)">${item.title}</h3>
            <p class="font-semibold" style="font-size:clamp(1.1rem, 2.5vw, 1.4rem)">${item.subtitle}</p>
        </div>
		<div class="flex items-start">
			<div class="text-2xl bg-[#bef264] text-[#064e3b] font-semibold p-4 md:p-4 rounded text-center">
				${item.price}
			</div>
		</div>
		<div class="flex items-start">
			<a href="${item.bookingUrl}" class="text-2xl bg-[#bef264] text-[#064e3b] font-semibold p-4 md:p-4 rounded text-center">
				Sign up
			</a>
		</div>
    </div>

    <div class="flex flex-wrap gap-2 text">
	    <p class="text whitespace-pre-wrap mt-2 text-gray-400">${item.description}</p>
        <span class="flex items-center">
            <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ${item.dateTimeString}
        </span>
        <span class="flex items-center">
            <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            ${item.googleMapsURL ? `<a href=${item.googleMapsURL}>${item.location}</a>` : item.location}
        </span>
    </div>
`

	return card
}

document.addEventListener('DOMContentLoaded', async () => {
	const today = new Date()
	today.setUTCHours(0, 0, 0, 0)
	const todayUTCString = today.toISOString()

	const dropInResp = await fetch('/public/classes/dropins.json')
	const dropInsMaster = await dropInResp.json()
	const dropIns = dropInsMaster
		.sort((a, b) => a.timestamp > b.timestamp)
		.filter(item => item.timestamp > todayUTCString)

	if (!dropIns || dropIns.length === 0) {
		document.getElementById('drop-ins-collection-no-class-msg').style.display = 'block'
		document.getElementById('drop-ins-collection').style.display = 'none'
	} else {
		const dropInsSection = document.getElementById('drop-ins-collection')
		dropIns.forEach(item => {
			console.log(item)
			const card = generateCard(item)
			dropInsSection.appendChild(card)
		})
	}
})
