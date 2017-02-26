if (!navigator.onLine) {
  document.body.classList.add('no-transition')
  document.body.classList.add('offline')
  setTimeout(_ => {
    document.body.classList.remove('no-transition')
  })
}

window.ononline = window.onoffline = _ => {
  if (navigator.onLine) {
    document.body.classList.remove('offline')
  } else {
    document.body.classList.add('offline')
  }
}

navigator.serviceWorker.register('sw.js')
