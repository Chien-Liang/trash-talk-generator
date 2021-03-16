const yourSelection = document.getElementById('your-selection')

yourSelection.addEventListener('click', event => {
  const card = event.target.closest('.card')
  const input = card.querySelector('input')
  if (!card) {
    return
  }
  input.checked = true
})
