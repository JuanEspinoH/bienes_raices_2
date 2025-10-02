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
    // const selectContainer = document.querySelector('#categorias')
    const videoItemsCont = document.querySelector('#videoItemsCont')
    const videoItem1 = document.querySelector('#videoItem1')
    const videoItem2 = document.querySelector('#videoItem2')
    const videoItem3 = document.querySelector('#videoItem3')
    const videoItem4 = document.querySelector('#videoItem4')

    gsap.fromTo(
      videoItemsCont,
      { opacity: 0, scaleY: 0 },
      { duration: 1, opacity: 1, scaleY: 1 }
    )
    gsap.to(videoItem2, { opacity: 0 })
    gsap.to(videoItem3, { opacity: 0 })
    gsap.to(videoItem4, { opacity: 0 })

    let tl = gsap.timeline({ repeat: -1 })
    tl.fromTo(videoItem1, { opacity: 0 }, { duration: 4, opacity: 1 })
    tl.fromTo(videoItem1, { opacity: 1 }, { duration: 4, opacity: 0 })
    tl.fromTo(videoItem2, { opacity: 0 }, { duration: 4, opacity: 1 })
    tl.fromTo(videoItem2, { opacity: 1 }, { duration: 4, opacity: 0 })
    tl.fromTo(videoItem3, { opacity: 0 }, { duration: 4, opacity: 1 })
    tl.fromTo(videoItem3, { opacity: 1 }, { duration: 4, opacity: 0 })
    tl.fromTo(videoItem4, { opacity: 0 }, { duration: 4, opacity: 1 })
    tl.fromTo(videoItem4, { opacity: 1 }, { duration: 4, opacity: 0 })

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
