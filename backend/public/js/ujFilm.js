let feldolgoz = document.querySelector('#feldolgoz');

feldolgoz.addEventListener('click', async (event) => {
    event.preventDefault();
    let cim = document.querySelector('#cim').value;
    let mufaj = document.querySelector('#mufaj').value;
    let idotartam = document.querySelector('#idotartam').value;
    let plakat = document.querySelector('#plakat').value;
    let idopontok = document.querySelector('#idopontok').value;

    const response = await fetch('/api/cinema/ujfilm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cim, mufaj, idotartam, plakat, idopontok }),
    });

    if (response.ok) {
        const adat = await response.json();
        const msg = adat.msg;
        window.alert(msg);

        window.location.replace('/api/cinema/filmek');
    }
});
