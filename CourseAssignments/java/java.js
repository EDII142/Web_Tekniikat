// Creates an array and listens the button
let AllMessageInformations = [];
document.getElementById("submitMessage").addEventListener('click', submitMessage);
let form = document.getElementById("messagesForm");

// Function for the send message button
function submitMessage(e) {
    e.preventDefault();

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
        // Creates the overall div for the message
        const messageBox = document.createElement("div");
        const div = document.getElementById("pastMessages");
        div.appendChild(messageBox);

        // Adding username text to the message
        const messageBoxUsername = document.createElement("h1");
        const usernameText = document.createTextNode("From: " + messageInformation.username);
        messageBoxUsername.appendChild(usernameText);
        div.lastElementChild.appendChild(messageBoxUsername);

        // Adding written text to the message
        const messageBoxMessage = document.createElement("h1");
        const messageText = document.createTextNode("Message: " + messageInformation.message);
        messageBoxMessage.appendChild(messageText);
        div.lastElementChild.appendChild(messageBoxMessage);

        // Adds important class if selected
        if (document.getElementById("checkbox1").checked == true) {
            div.lastElementChild.classList.add("important");
        }
    }
}