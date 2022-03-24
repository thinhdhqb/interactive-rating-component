let fav;

document.querySelectorAll('.round-btn').forEach((elem) => {
    elem.onclick = (e) => {
        if (e.target.dataset.chosen === 'true') return;
        if (e.target.classList.contains('favicon-container')) return;
        document.querySelectorAll('.round-btn').forEach((elem) => {
            elem.dataset.chosen = 'false';
        })
        e.target.dataset.chosen = 'true';
        fav = e.target.innerHTML;
    } 
});

document.querySelector('.submit-btn').onclick = () => {
    if (fav === undefined) {
        return;
    }
    document.querySelector('.fav-selected').textContent = `You selected ${fav} out of 5`
    document.querySelector('.first').classList.add('hidden');
    document.querySelector('.second').classList.remove('hidden');
}