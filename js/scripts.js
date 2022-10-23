document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = [].slice.call(document.querySelectorAll('ul.clean-nav li a.button'));
    let firstPaneOpening = true

    tabButtons.map(button => {
        button.addEventListener('click', e => {
            document.getElementById("contact").style.display = "block"
            const currentActiveButton = document.querySelector('li a.active.button')
            if (currentActiveButton) currentActiveButton.classList.remove('active')
            button.classList.add('active')

            const currentActivePane = document.querySelector('.tab-pane.active')
            if (currentActivePane) currentActivePane.classList.remove('active')

            const newActivePane = document.querySelector("[id='" + button.getAttribute('paneid') + "']")
            newActivePane.classList.add('active')
            
            if(firstPaneOpening) {
                window.scrollTo({top: button.offsetTop + button.offsetHeight, behavior: "smooth"})
                firstPaneOpening = false
            }

            const fadeIns = document.getElementsByClassName("fade-in")
            for(const fadeIn of fadeIns) fadeIn.classList.remove("is-visible")

            checkFadeIns()
        })
    })

    const checkFadeIns = () => {
        const fadeIns = document.getElementsByClassName("fade-in")
        for (const fadeIn of fadeIns) {
            const elementTop = fadeIn.offsetTop
            const elementBottom = fadeIn.offsetTop + fadeIn.offsetHeight
            const screenTop = window.scrollY
            const screenBottom = window.scrollY + window.innerHeight;

            if ((screenBottom > elementTop) && (screenTop < elementBottom) && !fadeIn.classList.contains('is-visible')) {
                fadeIn.classList.add('is-visible');
            }

        }
    }

    window.addEventListener("scroll", e => { checkFadeIns() })

    const overlay = document.getElementById("overlay")
    document.getElementById("contactMeButton").addEventListener("click", e => { overlay.style.display = "block" })
    document.getElementById("closeContactForm").addEventListener("click", e => { overlay.style.display = "none" })

    document.getElementById("contactForm").addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value

        fetch("https://formspree.io/f/mgerrqwr", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                _replyto: email,
                email: email,
                message: message,
                _subject: "Contact Form Submission from " + name
            })
        })

        //$("#contactForm :input").prop("disabled", true);
        document.getElementById("contactForm").style.display = "none"
        document.getElementById("thankYou").style.display = "block"
    });



}, false)