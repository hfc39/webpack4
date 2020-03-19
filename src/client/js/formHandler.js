export const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('hyperlink').value
    //let formText = JSON.parse(JSON.stringify(formTextO[0]))
        if (Client.urlValidate(formText)) {
            console.log('Looks like an URL!');
            console.log("::: Form Submitted :::");
            const sendDataAylien = async ( url='', data={} )=> {
                const response = await fetch (url , {
                    method:'POST',
                    credentials:'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if(response) {
                    try {
                        a = JSON.parse(response);
                    } catch (e) {
                        alert(e);
                    }
                }
            };
            sendDataAylien('http://localhost:8081/aylien', {url:formText})
            .then(
                function (response){
                    document.getElementById('newPo').innerHTML = response.polarity || "";
                }
            )
        } else {
            console.log('Not an URL');
        }}
