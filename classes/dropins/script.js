
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
