const openModal = document.querySelectorAll('.open-modal')
const modalListenApp = document.querySelector('.modal-listen-app')


openModal.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const modalId = link.getAttribute('data-modal-id');

    const modal = document.getElementById(modalId);
    modalListenApp.style.display = 'flex';
    modal.style.display = 'block'

    const closeBtn = modal.querySelector('.close')
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none'
      modalListenApp.style.display = 'none'
    })
  })
})

window.addEventListener("load" ,() => {
  const loader = document.querySelector(".loader")
  loader.classList.add("loader-hidden")

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
})




