
(function () {
	const container = document.querySelector('.container')
	const main = document.querySelector('main')
	let LargeurContainer
	window.addEventListener('resize', GetWidthEl)
	GetWidthEl()
	function GetWidthEl() {
		window.innerWidth <= 1024 ? document.querySelector('.bg').style.display = 'block' : document.querySelector('.bg').style.display = 'none'
		LargeurContainer = container.getBoundingClientRect().width
		main.style.height = LargeurContainer - (window.innerWidth - window.innerHeight) + 'px'
	}
	//---------------------------------------------------------------------------------------------------------------------
	const img = document.querySelectorAll('.image')
	function scrollY() {
		var train = document.querySelector('.image-train'),
			spider = document.getElementById('spiderman')

		img.forEach(function (parallaxImg) {
			var dataVitesse = parallaxImg.getAttribute('data-vitesse'),
				images = parallaxImg.getBoundingClientRect().left - window.innerWidth / 2
			if (images > window.innerWidth || -images > window.innerWidth) return
			container.style.transform = 'translate3d(-' + window.pageYOffset + 'px, 0px, 0px)'
			parallaxImg.style.transform = 'translate3d(' + images * dataVitesse + 'px, 0px, 0px)'
		})
		train.style.transform = 'translate3d(' + -window.pageYOffset * train.getAttribute('data-vitesse') + 'px, 0px, 0px)'
		spider.style.transform = 'translate3d(0px, ' + -window.pageYOffset * spider.getAttribute('data-vitesse') + 'px, 0px)'
	}

	window.addEventListener('scroll', scrollY)
	//---------------------------------------------------------------------------------------------------------------------
	function rain() {
		let canvas = document.querySelector('canvas')
		let ctx = canvas.getContext('2d')
		let w = window.innerWidth
		let h = window.innerHeight
		canvas.width = w
		canvas.height = h

		for (let i = 0; i < 5; i++) {
			ctx.fillRect(
				Math.floor(Math.random() * w),
				Math.floor(Math.random() * h),
				Math.floor(Math.random() * 5),
				80
			)
			ctx.fillStyle = 'gray'
			ctx.fill()
		}
		requestAnimationFrame(rain)
	}
	rain()

})()