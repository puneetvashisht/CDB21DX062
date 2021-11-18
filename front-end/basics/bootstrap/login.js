function login(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    console.log({username, password})
    console.log("Hello! I am an alert box!!"); 
    document.getElementsByClassName('alert')[0].style='display:block'
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