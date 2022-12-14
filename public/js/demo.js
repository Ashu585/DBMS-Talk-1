const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.forms['myForm']['name'].value
    const email = document.forms['myForm']['email'].value
    const password = document.forms['myForm']['password'].value
    const toSend = {
        "name": name,
        email,
        password
    }
    fetch('/db/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toSend)
    }).then((result) => {
        if (result.status == 200) {
            alert('Success')
        }
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})