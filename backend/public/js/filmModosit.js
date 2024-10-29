async function torol(id) {
    const response = await fetch(`/api/cinema/egyedifilm/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const adat = await response.json();
        const msg = adat.msg;
        window.alert(msg);

        window.location.replace('/api/cinema/filmek');
    }
}
