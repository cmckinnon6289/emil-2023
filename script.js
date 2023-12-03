function handleModal(id) {
    let modal = document.querySelector(`#${String(id)}`);
    modal.classList.toggle("is-active")
}