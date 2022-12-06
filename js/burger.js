const burger = document.querySelector('header nav .burger')
const line_1 = document.querySelector('header nav .burger .elements .line:nth-child(1)')
const line_2 = document.querySelector('header nav .burger .elements .line:nth-child(2)')
const line_3 = document.querySelector('header nav .burger .elements .line:nth-child(3)')
let bool = false
const popup = document.querySelector('header nav .popup')
const li = document.querySelectorAll('header nav .popup ul li')
const li_1 = document.querySelector('header nav .popup ul li:nth-child(1)')
const li_2 = document.querySelector('header nav .popup ul li:nth-child(2)')
const li_3 = document.querySelector('header nav .popup ul li:nth-child(3)')
const li_4 = document.querySelector('header nav .popup ul li:nth-child(4)')
const li_5 = document.querySelector('header nav .popup ul li:nth-child(5)')
const li_6 = document.querySelector('header nav .popup ul li:nth-child(6)')



burger.addEventListener("click", function(){
	if (bool == false){
		bool = true;

		popup.classList.toggle("open")

		line_2.style.width = '30px'
		line_3.style.width = '30px'
		setTimeout(function() {
			line_1.style.transform = 'translateY(9px)'
			line_2.style.opacity = '0'
			line_3.style.transform = 'translateY(-9px)'
			setTimeout(function() {
				line_1.style.transform = 'translateY(9px) rotate(45deg)'
				line_3.style.transform = 'translateY(-9px) rotate(-45deg)'
			}, 500)
		}, 500)

		for (let liS of li){
			liS.style.transition = '1.5s'
		}
		setTimeout(function() {
			li_6.style.opacity = '1'
			li_6.style.transform = 'translateX(0px)'
			setTimeout(function() {
				li_5.style.opacity = '1'
				li_5.style.transform = 'translateX(0px)'
				setTimeout(function() {
					li_4.style.opacity = '1'
					li_4.style.transform = 'translateX(0px)'
					setTimeout(function() {
						li_3.style.opacity = '1'
						li_3.style.transform = 'translateX(0px)'
						setTimeout(function() {
							li_2.style.opacity = '1'
							li_2.style.transform = 'translateX(0px)'
							setTimeout(function() {
								li_1.style.opacity = '1'
								li_1.style.transform = 'translateX(0px)'
							}, 250)
						}, 200)
					}, 150)
				}, 125)
			}, 100)
		}, 100)
		
	} else if (bool == true){
		bool = false;

		popup.classList.remove("open")

		line_1.style.transform = 'translateY(9px) rotate(0deg)'
		line_3.style.transform = 'translateY(-9px) rotate(0deg)'
		setTimeout(function() {
			line_1.style.transform = 'translateY(0px)'
			line_2.style.opacity = '1'
			line_3.style.transform = 'translateY(0px)'
			setTimeout(function() {
				line_2.style.width = '20px'
				line_3.style.width = '10px'
			}, 500)
		}, 500)

		for (let liS of li){
			liS.style.transition = '.25s'
		}
		setTimeout(function() {
			li_1.style.opacity = '0'
			li_1.style.transform = 'translateX(-100px)'
			setTimeout(function() {
				li_2.style.opacity = '0'
				li_2.style.transform = 'translateX(-100px)'
				setTimeout(function() {
					li_3.style.opacity = '0'
					li_3.style.transform = 'translateX(-100px)'
					setTimeout(function() {
						li_4.style.opacity = '0'
						li_4.style.transform = 'translateX(-100px)'
						setTimeout(function() {
							li_5.style.opacity = '0'
							li_5.style.transform = 'translateX(-100px)'
							setTimeout(function() {
								li_6.style.opacity = '0'
								li_6.style.transform = 'translateX(-100px)'
							}, 125)
						}, 100)
					}, 75)
				}, 50)
			}, 25)
		}, 0)
	}
})