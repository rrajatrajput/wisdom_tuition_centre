function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_mnvao5i","template_gnbprxo" , params).then (alert("Email Sent !!"))
}
