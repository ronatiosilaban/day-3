function showData(e) {
    e.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let massage = document.getElementById("massage").value

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("subject").value = ""
    document.getElementById("massage").value = ""

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(massage);




    if (name == '') {
        return alert("name input must be not empty")
    }
    if (email == '') {
        return alert("email input must be not empty")
    }
    if (phone == '') {
        return alert("phone input must be not empty")
    }
    if (subject == '') {
        return alert("subject input must be not empty")
    }
    if (massage == '') {
        return alert("massage input must be not empty")
    }

    let emaiReceiver = 'ronatio08@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emaiReceiver}?subject=${subject}&body=Hello, My name is ${name}, ${subject}, ${massage}, ${phone}`

    a.click()

}
