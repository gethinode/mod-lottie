document.querySelectorAll('div.lottie-animation').forEach(container => {
  const loop = (String(container.getAttribute('data-lottie-loop')).toLowerCase() === 'true')
  const auto = (String(container.getAttribute('data-lottie-auto')).toLowerCase() === 'true')
  const hover = (String(container.getAttribute('data-lottie-hover')).toLowerCase() === 'true')
  const title = container.getAttribute('data-lottie-title')
  const data = container.getAttribute('data-lottie-data')

  if ((data === null) || (data === '')) {
    console.error('lottie.player.js: expected data attribute')
  } else {
    const anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop,
      autoplay: auto,
      path: data,
      name: 'my-lottie',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        title,
        progressiveLoad: true,
        hideOnTransparent: true
      }
    })

    if (auto) {
      container.setAttribute('data-lottie-playing', 'true')
    }

    anim.onSegmentStart = function () {
      container.setAttribute('data-lottie-playing', 'true')
    }

    anim.onComplete = function () {
      container.setAttribute('data-lottie-playing', 'false')
    }

    if (hover) {
      container.addEventListener('mouseenter', (event) => {
        const isplaying = (String(container.getAttribute('data-lottie-playing')).toLowerCase() === 'true')
        if (!isplaying) {
          anim.stop()
          anim.play()
          container.setAttribute('data-lottie-playing', 'true')
        }
      })

      if (loop && !auto) {
        container.addEventListener('mouseleave', (event) => {
          anim.stop()
          container.setAttribute('data-lottie-playing', 'false')
        })
      }
    }
  }
})
