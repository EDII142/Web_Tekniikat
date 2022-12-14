// Creates an array and listens the button
let AllMessageInformations = [];
document.getElementById("submitMessage").addEventListener('click', submitMessage);
let form = document.getElementById("messagesForm");

// Function for the send message button
function submitMessage(e) {
    e.preventDefault();

    // Gives an error if username and/or message field is empty
    if (document.getElementById("username").value == "" || document.getElementById("message").value == "") {
        console.log("Error!");
        return;
    }

    let formData = new FormData(form);
    let username = formData.get("username");
    let message = formData.get("message");

    let messageInformation = {
        username, message
    }

    AllMessageInformations.push(messageInformation);
    printMessages();

    // Function of the printing messages onto the screen
    function printMessages() {
        let today = new Date();
        let currentDate = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();

        // Creates the overall div for the message
        const messageBox = document.createElement("div");
        const div = document.getElementById("pastMessages");
        div.appendChild(messageBox);

        // Adding username text to the message
        const messageBoxUsername = document.createElement("h1");
        const usernameText = document.createTextNode(messageInformation.username + " " + currentDate);
        messageBoxUsername.appendChild(usernameText);
        div.lastElementChild.appendChild(messageBoxUsername);

        // Adding written text to the message
        const messageBoxMessage = document.createElement("h1");
        const messageText = document.createTextNode(messageInformation.message);
        messageBoxMessage.appendChild(messageText);
        div.lastElementChild.appendChild(messageBoxMessage);

        // Adds important class if selected
        if (document.getElementById("checkbox1").checked == true) {
            div.lastElementChild.classList.add("important");
        }
    }
}