const tl = gsap.timeline({
   scrollTrigger: {
      trigger: '.card-section',
      scroller: 'body',
      start: 'top 100%',
      end: 'top -200%',
      markers: true,
      scrub: true,
   }
})

tl
   .to('body', { backgroundColor: '#1a2ffb' })
   .to('.card', { rotation: (d) => ((d - 2) * 10) + (d * 4), duration: 0.2 })
   .to('.card', { rotationY: (d) => d * 10, duration: 0.2 }, '<')
   .to('.card', { margin: 0 }, '-=0.1')
   .to('.back', { rotationY: -180, stagger: 0.1, ease: 'back.inOut' }, '-=0.2')
   .to('.front', { rotationY: 0, stagger: 0.1, ease: 'back.inOut' }, '<')
   .to('.card', { rotation: 0, rotationY: 0, stagger: 0.1 }, '<')

ScrollTrigger.create({
   scroller: 'body',
   start: 'top top',
   end: 'top -200%',
   pin: '.card-section'
})





smoothScroll();
function smoothScroll() {
   const lenis = new Lenis()
   lenis.on('scroll', ScrollTrigger.update)

   gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
   })

   gsap.ticker.lagSmoothing(0)
}