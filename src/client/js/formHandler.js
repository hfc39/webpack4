export const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('hyperlink').value
        if (Client.urlValidate(formText)) {
            console.log('Looks like an URL');
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
                let newData = await response.json();

                try{
                    console.log('Here.');
                    console.log(newData);
                    return newData;                   
                } catch (error){
                    console.log('failed at sendDataAylien'+error);
                };
            };
            sendDataAylien('/aylien', {url:formText})
            .then(
                function (res){
                    console.log('res2');
                    const data = res.data;
                    document.getElementById('newURL').innerText = `Submitted URL:${formText}`;
                    document.getElementById('newPo').innerText = data.polarity;
                    document.getElementById('newScore').innerText = data.polarity_confidence;
                }
            )
        } else {
            console.log('Not an URL');
        }}
