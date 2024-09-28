function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    

    const serviceID = "service_mnvao5i";
    const templateID = "template_gnbprxo";  

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log("Success:", res);
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch ((err) => console.log(err));
        }
