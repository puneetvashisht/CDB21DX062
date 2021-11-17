function login(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    console.log({username, password})

    // async send data
    fetch('someurl', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => console.log(res));

    
}