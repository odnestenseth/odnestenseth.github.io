function generateCard(item) {
	const card = document.createElement('div')
	card.className =
		'mb-2 p-4 rounded-lg border border-gray-700 shadow-sm flex flex-col justify-between gap-2'
	card.innerHTML = `
    <div class="flex gap-2">
        <div class="flex-1">
            <h3 class="font-bold text-[#f43f5e]" style="font-size:clamp(1.3rem, 7vw, 1.8rem)">${item.title}</h3>
            <p class="font-semibold" style="font-size:clamp(1.1rem, 2.5vw, 1.4rem)">${item.subtitle}</p>
        </div>
		<div class="hidden md:flex items-start gap-2">
            <div class="text-2xl bg-white/10 border border-white/20 text-white font-bold p-3 rounded text-center">
                ${item.price}
            </div>
            <a href="${item.bookingURL}" class="text-2xl bg-[#f43f5e] border-[#f43f5e] border-2 text-white hover:bg-[#e11d48] transition-colors font-semibold p-3 px-10 rounded text-center flex-1">
                Book here
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

    <div class="md:hidden flex items-start gap-2">
        <a href="${item.bookingURL}" class="text-2xl bg-[#f43f5e] border-[#f43f5e] border-2 text-white hover:bg-[#e11d48] transition-colors font-semibold p-3 rounded text-center flex-1">
            Book here
        </a>
        <div class="text-2xl bg-white/10 border border-white/20 text-white font-bold p-3 rounded text-center">
            ${item.price}
        </div>
    </div>
`

	return card
}
