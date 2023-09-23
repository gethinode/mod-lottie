document.querySelectorAll('div.lottie-animation').forEach(container => {
  
  const loop = (String(container.getAttribute('data-lottie-loop')).toLowerCase() === 'true')
  const auto = (String(container.getAttribute('data-lottie-auto')).toLowerCase() === 'true')
  const hover = (String(container.getAttribute('data-lottie-hover')).toLowerCase() === 'true')
  const title = container.getAttribute('data-lottie-title')
  const data = container.getAttribute('data-lottie-data')

  if ((data === null) || (data === "")) {
    console.error('lottie.player.js: expected data attribute')
  } else {
    const anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: loop,
      autoplay: auto,
      path: data,
      name: 'my-lottie',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        title: title, 
        progressiveLoad: true,
        hideOnTransparent: true,
      }
    });
    
    if (hover) {
      container.addEventListener("mouseenter", (event) => {
        anim.play();
      });
      
      container.addEventListener("mouseleave", (event) => {
        anim.stop();
      });
    }
  }
})
