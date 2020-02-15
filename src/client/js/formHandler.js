function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('input').value
    const sendDataAylien = async function (url='', data={}) {
        const response = await fetch ( '/aylien', {
            method:'POST',
            credentials:'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        try{
            const newData = response.json();
            document.getElementById('newURL').innerText = `Submitted URL:${newData.URL}`;
            document.getElementById('newPo').innerText = newData.;
            document.getElementById('newScore').innerText =;
        } catch (error){
            console.log('failed at sendDataAylien');
        }
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
