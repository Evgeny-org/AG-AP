const point = document.querySelectorAll('header .slider .points .point')
const point_1 = document.querySelector('header .slider .points .point:nth-child(1)')
const point_2 = document.querySelector('header .slider .points .point:nth-child(2)')
const point_3 = document.querySelector('header .slider .points .point:nth-child(3)')
const point_4 = document.querySelector('header .slider .points .point:nth-child(4)')
const point_5 = document.querySelector('header .slider .points .point:nth-child(5)')

const element_1 = document.querySelector('header .slider img:nth-child(1)')
const element_2 = document.querySelector('header .slider img:nth-child(2)')
const element_3 = document.querySelector('header .slider img:nth-child(3)')
const element_4 = document.querySelector('header .slider img:nth-child(4)')
const element_5 = document.querySelector('header .slider img:nth-child(5)')


point_1.addEventListener("click", function(){
	for (let pointS of point){
		pointS.style.transform = 'scale(1)'
		pointS.style.border = '2px solid rgba(255, 255, 255, 0)'
		pointS.style.backgroundColor = 'rgba(255, 255, 255, .8)'
	}
	point_1.style.transform = 'scale(1.5)'
	point_1.style.border = '2px solid rgba(255, 255, 255, 1)'
	point_1.style.backgroundColor = 'rgba(255, 255, 255, 0)'

	element_1.style.left = '0%'
	element_2.style.left = '100%'
	element_3.style.left = '200%'
	element_4.style.left = '300%'
	element_5.style.left = '400%'
})

point_2.addEventListener("click", function(){
	for (let pointS of point){
		pointS.style.transform = 'scale(1)'
		pointS.style.border = '2px solid rgba(255, 255, 255, 0)'
		pointS.style.backgroundColor = 'rgba(255, 255, 255, .8)'
	}
	point_2.style.transform = 'scale(1.5)'
	point_2.style.border = '2px solid rgba(255, 255, 255, 1)'
	point_2.style.backgroundColor = 'rgba(255, 255, 255, 0)'

	element_1.style.left = '-100%'
	element_2.style.left = '0%'
	element_3.style.left = '100%'
	element_4.style.left = '200%'
	element_5.style.left = '300%'
})
point_3.addEventListener("click", function(){
	for (let pointS of point){
		pointS.style.transform = 'scale(1)'
		pointS.style.border = '2px solid rgba(255, 255, 255, 0)'
		pointS.style.backgroundColor = 'rgba(255, 255, 255, .8)'
	}
	point_3.style.transform = 'scale(1.5)'
	point_3.style.border = '2px solid rgba(255, 255, 255, 1)'
	point_3.style.backgroundColor = 'rgba(255, 255, 255, 0)'

	element_1.style.left = '-200%'
	element_2.style.left = '-100%'
	element_3.style.left = '0%'
	element_4.style.left = '100%'
	element_5.style.left = '200%'
})
point_4.addEventListener("click", function(){
	for (let pointS of point){
		pointS.style.transform = 'scale(1)'
		pointS.style.border = '2px solid rgba(255, 255, 255, 0)'
		pointS.style.backgroundColor = 'rgba(255, 255, 255, .8)'
	}
	point_4.style.transform = 'scale(1.5)'
	point_4.style.border = '2px solid rgba(255, 255, 255, 1)'
	point_4.style.backgroundColor = 'rgba(255, 255, 255, 0)'

	element_1.style.left = '-300%'
	element_2.style.left = '-200%'
	element_3.style.left = '-100%'
	element_4.style.left = '0%'
	element_5.style.left = '100%'
})
point_5.addEventListener("click", function(){
	for (let pointS of point){
		pointS.style.transform = 'scale(1)'
		pointS.style.border = '2px solid rgba(255, 255, 255, 0)'
		pointS.style.backgroundColor = 'rgba(255, 255, 255, .8)'
	}
	point_5.style.transform = 'scale(1.5)'
	point_5.style.border = '2px solid rgba(255, 255, 255, 1)'
	point_5.style.backgroundColor = 'rgba(255, 255, 255, 0)'

	element_1.style.left = '-400%'
	element_2.style.left = '-300%'
	element_3.style.left = '-200%'
	element_4.style.left = '-100%'
	element_5.style.left = '0'
})


