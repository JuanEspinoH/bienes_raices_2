import { videos } from '../constants.js'
;(function () {
  const videoContainer = document.querySelector('#videoContainer')

  let currentVideoIndex = 0
  videoContainer.addEventListener('ended', () => {
    videoContainer.classList.remove('opacity-100')
    videoContainer.classList.add('opacity-0')

    setTimeout(() => {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length
      videoContainer.src = videos[currentVideoIndex]
      videoContainer.load()
      videoContainer.addEventListener(
        'loadeddata',
        () => {
          videoContainer.classList.remove('opacity-0')
          videoContainer.classList.add('opacity-100')
          videoContainer.play()
        },
        { once: true }
      )
    }, 700)
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    const containers = document.querySelectorAll('#propertiesContainer')
    const selectContainer = document.querySelector('#categorias')
    gsap.registerPlugin(ScrollTrigger)

    containers.forEach((container) => {
      gsap.from(container, {
        scrollTrigger: {
          trigger: container,
          start: 'top center+=100px',
          end: 'center center-=100px',
          scrub: true,
        },
        opacity: 0,
      })
    })
  })
})()
