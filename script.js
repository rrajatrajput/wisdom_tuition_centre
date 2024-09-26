function sendMail() {
    console.log("sendMail function called");

    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        query: document.getElementById("query").value,
    };
    

    const serviceID = "service_mnvao5i";
    const templateID = "template_gnbprxo";

    console.log("Sending parameters:", params); // Debugging line

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log("Success:", res);
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("query").value = "";
            alert("Your message was sent successfully!");
        })
        .catch(err => {
            console.error("Failed to send:", err);
            alert("Failed to send message. Please try again later.");
        });
}
