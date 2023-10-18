
document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper('.swiper-container', 1, '.swiper-pagination')
})

// Init slider. In params selector of swiper, slides per view, and pagination class
const initSwiper = (selector, view, pag) => {
	const swiper = new Swiper(selector, {
		// Optional parameters
		loop: true, //Carousel enableю
		slidesPerView: view,
		grabCursor: true, //Hand cursor

		// If we need paginationю
		pagination: {
			el: pag,
			clickable: true //Enable click on dots of paginationю
		},

		autoplay: {
			delay: 7000, // Delay between slides
			disableOnInteraction: false // Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
		}
	});

	if (!swiper) return // Check, if the swiper is missing, do a return. To avoid errors in the console.
}


let windowHeight = window.innerHeight //Window height
const getWindowHeight = () => windowHeight

const isInScope = (elementSelector, st, offset = 0) => { //A function that calculates when a block appears in our overview.
	const element = document.querySelector(elementSelector)
	if (!element) return
	let bodyRect = document.body.getBoundingClientRect(),
		elemRect = element.getBoundingClientRect(),
		elemTop = elemRect.top - bodyRect.top

	if (!element) return

	return st >= (elemTop - getWindowHeight() + offset) && st <= (elemTop + element.clientHeight - offset) //Calculate distance to visibility our element
}

document.addEventListener('scroll', () => {
	const image1 = document.querySelector('.noAnimateImg1') //Each selector which need animate
	const image2 = document.querySelector('.noAnimateImg2')
	const subtitle1 = document.querySelector('.noAnimatedSub1')
	const subtitle2 = document.querySelector('.noAnimatedSub2')
	const footer = document.querySelector('footer')
	const stats = document.querySelector('.clients__stat')

	if(!image1 && image2) return

	if (isInScope('.noAnimateImg1', window.scrollY)) { //Check when our block appears in the viewport and call isIncsope functuion, hang the animated class.
		image1.classList.add('animated')
	}

	if (isInScope('.noAnimateImg2', window.scrollY)) { //Check when our block appears in the viewport and call isIncsope functuion, hang the animated class.
		image2.classList.add('animated')
	}

	if (isInScope('.noAnimateImg1', window.scrollY)) { //Check when our block appears in the viewport and call isIncsope functuion, hang the animated class.
		subtitle1.classList.add('animated')
	}

	if (isInScope('.noAnimateImg2', window.scrollY)) { //Check when our block appears in the viewport and call isIncsope functuion, hang the animated class.
		subtitle2.classList.add('animated')
	}
	
	if (isInScope('.footer', window.scrollY)) { //Check when our block appears in the viewport and call isIncsope functuion, hang the animated class.
		footer.classList.add('animated')
	}

	if ( isInScope( '.footer', window.scrollY ) ) {
		if(!footer || footer.classList.contains('scrolled')) return
        outNum('.footerNum')
		document.querySelector('.footer').classList.add('scrolled')
    }

	if ( isInScope( '.footer', window.scrollY ) ) {
		if(!stats || stats.classList.contains('scrolled')) return //Need added class and check that the function is not called again when scrolling.. 
        outNum('.clientsNum')
		stats.classList.add('scrolled')
    } 
})


// Running numbers
const stepTime = 120 //Speed each step

function outNum( elem) {
    let numElem = document.querySelectorAll(elem) //Get all elements

    numElem.forEach(elem => {
        let n = 0,
            step = parseInt(elem.dataset.step), //data-step in html
            limit = parseInt(elem.dataset.limit) //data-limit in html

        let interval = setInterval(() => { //Interval for steps with choosen step-time
            n = n + step
    
            if (n  >= limit) {
                elem.innerHTML = limit
                clearInterval(interval)
            }   else {
                elem.innerHTML = n
            }
        }, stepTime)
    })
}
