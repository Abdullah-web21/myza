function scrollDown() {
    window.scrollTo({ top: 300, behavior: 'smooth' });
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if(name === "" || email === "") {
        msg.innerText = "Please fill all fields!";
        msg.style.color = "red";
    } else {
        msg.innerText = "Message sent successfully!";
        msg.style.color = "green";
    }
}