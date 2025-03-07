
let scrollPosition = 0;

function lockScroll() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}


function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
}

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
                          'margin-bottom': '1rem',
                      },
                      title: {
                          'font-size': '1.1rem',
                          'color': 'white',
                          'margin-top': '0',
                          'margin-bottom': '0.5rem',
                      },
                      price: {
                          'font-size': '0.9rem',
                          'color': '#e2e8f0',
                          'margin-top': '0',
                      }
                  },
                  events: {
                    openModal: function () {
                        lockScroll()
                    }
                  }
              },
              toggle: {
                iframe: false
              },
              cart: {
                iframe: false,
                  contents: {
                      button: true
                  },
                  text: {
                      total: "Subtotal",
                      notice: "",
                      button: "Checkout"
                  },
                  events: {
                    afterInit: function (cart) {
                        const oldOpen = cart.open;
                        cart.open = function() {
                          lockScroll()
                          oldOpen.call(this)
                        }
                        
                        const oldClose = cart.close
                        cart.close = function() {
                            unlockScroll()
                            oldClose.call(this)
                          }

                          const oldToggleVisibility = cart.toggleVisibility
                          cart.toggleVisibility = function() {
                            cart.isVisible ? unlockScroll() : lockScroll()
                            oldToggleVisibility.call(this)
                          }

                        //document.querySelector(".shopify-buy__cart-toggle").addEventListener("click", () => lockScroll())
                    }
                }
              },
              modal: {
                iframe: false,
                events: {
                    closeModal: function () {
                        unlockScroll()
                    }
                  }
              },
              
              modalProduct: {
                  contents: {
                      imgWithCarousel: false,
                      buttonWithQuantity: false,
                      description: true
                  },
                  order: [
                      'img',
                      'title',
                      'variantTitle',
                      'price',
                      'description',
                      'button'
                  ],
                  text: {
                      button: 'Book Now'
                  }
              }
          }
      };
  
      // Create Drop-ins Collection
      client.collection.fetchWithProducts("gid://shopify/Collection/270738063456", {productsFirst: 10}).then((collection) => {
          if(collection.products.length > 0) {
              ui.createComponent('collection', {
                  id: '270738063456',
                  node: document.getElementById('drop-ins-collection'),
                  ...commonOptions
              });
          } else {
              document.getElementById("drop-ins-collection-no-class-msg").style.display = "block";
          }
      });
  
      // Create Short Courses Collection
      client.collection.fetchWithProducts("gid://shopify/Collection/270738128992", {productsFirst: 10}).then((collection) => {
          if(collection.products.length > 0) {
              ui.createComponent('collection', {
                  id: '270738128992',
                  node: document.getElementById('short-courses-collection'),
                  ...commonOptions
              });
          } else {
              document.getElementById("short-term-collection-no-class-msg").style.display = "block";
          }
      });


  });


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuCloseButton = document.getElementById('mobile-menu-close');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('translate-x-full');
        mobileMenuOverlay.classList.add('translate-x-0');
    });

    // Close mobile menu
    mobileMenuCloseButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('translate-x-0');
        mobileMenuOverlay.classList.add('translate-x-full');
    });

    // Close menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu-overlay a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('translate-x-0');
            mobileMenuOverlay.classList.add('translate-x-full');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("contact-form-submit").addEventListener("click", async (e) => {
        e.preventDefault();

        const contactResultElement = document.getElementById("contact-result-msg")
        contactResultElement.style.opacity = 0
        
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

        contactResultElement.style.opacity = 100
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

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  
    // Get all buttons and sections
    const dropInsBtn = document.getElementById('show-drop-ins');
    const shortCoursesBtn = document.getElementById('show-short-courses');
    const bespokeBtn = document.getElementById('show-bespoke');
    
    const dropInsSection = document.getElementById('drop-ins-listing');
    const shortCoursesSection = document.getElementById('short-courses-listing');
    const bespokeSection = document.getElementById('bespoke-info');

    function hideAllSections() {
        dropInsSection.classList.add('hidden');
        shortCoursesSection.classList.add('hidden');
        bespokeSection.classList.add('hidden');
    }
    dropInsBtn.addEventListener('click', function() {
        hideAllSections();
        dropInsSection.classList.remove('hidden');
        document.getElementById('class-listings').scrollIntoView({behavior: 'smooth', block: "center"});
    });
    
    shortCoursesBtn.addEventListener('click', function() {
        hideAllSections();
        shortCoursesSection.classList.remove('hidden');
        document.getElementById('class-listings').scrollIntoView({behavior: 'smooth', block: "center"});
    });
    
    bespokeBtn.addEventListener('click', function() {
        hideAllSections();
        bespokeSection.classList.remove('hidden');
        document.getElementById('class-listings').scrollIntoView({behavior: 'smooth', block: "center"});
    });
});



