export const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('hyperlink').value
        if (Client.urlValidate(formText)) {
            console.log('Lookslike an URL !');
            console.log("::: Form Submitted :::");
            const sendDataAylien = async (url, data={})=> {
                const response = await fetch (url , {
                    method:'POST',
                    credentials:'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                try{
                    console.log('Here.');
                    const newData = response;
                    console.log(newData);
                    //return newData;                   
                } catch (error){
                    console.log('??');
                };
            };
            sendDataAylien('/aylien', {url:formText})
            .then(
                function (res){
                    console.log('res');
                    const data = res.json;
                    console.log(data);
                    document.getElementById('newURL').innerText = `Submitted URL:${formText}`;
                    document.getElementById('newPo').innerText = data.polarity;
                    document.getElementById('newScore').innerText = data.polarity_confidence;
                }
            )
        } else {
            console.log('Not an URL');
        }}
