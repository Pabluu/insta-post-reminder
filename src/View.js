const View = {
    render({ minutes, seconds }) {
        document.body.innerHTML = `
        <p>Próximo Post Em</p>
        <span>${minutes}:${seconds}</span>`
    }
}

export default View;