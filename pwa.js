if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Service worker registered')
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error)
      })
  })
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  const deferredPrompt = event
  const installButton = document.querySelector('#install-button')
  installButton.addEventListener('click', (event) => {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome)
      deferredPrompt = null
    })
  })
  installButton.hidden = false
})
