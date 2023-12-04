function handleModal(id) {
    let modal = document.querySelector(`#${String(id)}`);
    modal.classList.toggle("is-active")
}

function submitLogin(e) {
    let email = e.toLowerCase() ? e.toLowerCase() : "lol@empty.com"
    console.log(email)
    var params = new URLSearchParams(location.search);
    params.set('email', email);
    window.location.search = params.toString();
}

const app = Vue.createApp({
    data() {
        let urlp = new URLSearchParams(window.location.search).get('email') ? new URLSearchParams(window.location.search).get('email') : "lol@empty.com"
        return {
            valid: urlp === "death"
        }
    }
})