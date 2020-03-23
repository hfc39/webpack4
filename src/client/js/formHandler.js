export const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('hyperlink').value
        if (Client.urlValidate(formText)) {
            console.log('Looks like an URL!');
            console.log("::: Form Submitted :::");
            const sendDataAylien = async ( url , data={} )=> {
                const response = await fetch (url , {
                    method:"POST",
                    //credentials:'same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
            };
            sendDataAylien("http://localhost:8081/aylien", { url:formText})
            .then(
                function (res){
                    document.getElementById('polarity').innerHTML = res.polarity
                    document.getElementById('subjectivity').innerHTML = res.subjectivity
                }
            )
        } else {
            console.log('Not an URL');
        }}
