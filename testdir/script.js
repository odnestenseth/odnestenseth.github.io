
// Shopify Buy Button setup
var client = ShopifyBuy.buildClient({
  domain: 'odnestensethtest.myshopify.com',
  storefrontAccessToken: '17d0a4fe9e268668fc970f8399490d93',
});

ShopifyBuy.UI.onReady(client).then(function (ui) {
    const commonOptions = {
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
            productSet: {
            iframe: false
            },
            product: {
                layout: 'horizontal',
                buttonDestination: 'modal',
                contents: {
                    imgWithCarousel: false,
                    button: true,
                    buttonWithQuantity: false,
                    options: false,
                    quantityInput: false,
                    description: false
                },
                text: {
                    button: 'Book Now'
                },
                styles: {
                    product: {
                        'width': '100%',
                        'max-width': '800px',
                        'margin-left': '0',
                        'margin-bottom': '0',
                    },
                    button: {
                        'background-color': '#000000',
                        'font-family': 'Poppins, sans-serif',
                        ':hover': {
                            'background-color': '#333333'
                        },
                        'border-radius': '40px',
                        'padding': '12px 24px',
                    },
                    title: {
                        'font-size': '1rem',
                        'margin-top': '0',
                        'margin-bottom': '0.5rem',
                    },
                    price: {
                        'font-size': '0.9rem',
                        'margin-top': '0',
                    }
                }
            },
            cart: {
                contents: {
                    button: true
                },
                text: {
                total: "Subtotal",
                notice: "",
                button: "Checkout"
                },
                styles: {
                    button: {
                        'background-color': '#000000',
                        'font-family': 'Poppins, sans-serif',
                        ':hover': {
                            'background-color': '#333333'
                        },
                        'border-radius': '40px',
                        'padding': '12px 24px',
                    }
                }
            },
            modalProduct: {
                contents: {
                    imgWithCarousel: false,
                    buttonWithQuantity: false
                },
                order: [
                'img',
                'title',
                'variantTitle',
                'options',
                'description',
                'quantity',
                'price',
                'button'
                ],
                text: {
                    button: 'Book Now'
                },
                styles: {
                    product: {
                        '@media (min-width: 601px)': {
                            'max-width': '100%',
                            'margin-left': '0px',
                            'margin-bottom': '0px'
                        }
                    },
                    button: {
                        'background-color': '#000000',
                        'font-family': 'Poppins, sans-serif',
                        ':hover': {
                            'background-color': '#333333'
                        },
                        'border-radius': '40px',
                        'padding': '12px 24px',
                    }
                }
            }
        }
    };


    client.collection.fetchWithProducts("gid://shopify/Collection/270738063456", {productsFirst: 10}).then((collection) => {
        if(collection.products.length > 1) {// Create components for each class type
            ui.createComponent('collection', {
                id: '270738063456',
                node: document.getElementById('drop-ins-collection'),
                ...commonOptions
            });
        } else {
            document.getElementById("drop-ins-collection-no-class-msg").style.display = "block"
        }
    })

    client.collection.fetchWithProducts("gid://shopify/Collection/270738128992", {productsFirst: 10}).then((collection) => {
        if(collection.products.length > 1) {// Create components for each class type
            ui.createComponent('collection', {
                id: '270738128992',
                node: document.getElementById('drop-ins-collection'),
                ...commonOptions
            });
        } else {
            document.getElementById("short-term-collection-no-class-msg").style.display = "block"
        }
    })
})


// Sidebar menu functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-fade-in').forEach(element => {
    observer.observe(element);
});

// Class type toggle functionality
const classToggles = document.querySelectorAll('.class-toggle');
const classSections = document.querySelectorAll('.class-section');

classToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const target = toggle.dataset.target;
        
        // Update toggle buttons
        classToggles.forEach(btn => btn.classList.remove('active', 'bg-black', 'text-white'));
        classToggles.forEach(btn => btn.classList.add('bg-white', 'text-black'));
        toggle.classList.add('active', 'bg-black', 'text-white');
        toggle.classList.remove('bg-white', 'text-black');
        
        // Show/hide class sections
        classSections.forEach(section => {
            if (section.id === target) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Auto-advance the carousel every 5 seconds
    setInterval(showNext, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("contact-form-submit").addEventListener("click", async (e) => {
        e.preventDefault();

        const contactResultElement = document.getElementById("contact-result-msg")
        contactResultElement.style.display = "none"
        
        const nameElement = document.getElementById("name")
        const name = nameElement.value
        const emailElement = document.getElementById("email")
        const email = emailElement.value
        const messageElement = document.getElementById("message")
        const message = messageElement.value

        const response = await fetch("https://formspree.io/f/mgerrqwr", {
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

        contactResultElement.style.display = "block"
        if(response.ok) {
            nameElement.value = ""
            emailElement.value = ""
            messageElement.value = ""
            contactResultElement.textContent = "Thank you for your message, I will be in touch shortly"
        } else {
            contactResultElement.textContent = "Something went wrong, please try again"
        }




    });
})
