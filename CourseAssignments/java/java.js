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

}

// Function of the printing messages onto the screen
function printMessages() {
    for (const messageInformation of AllMessageInformations) {
        console.log(messageInformation.username);
        console.log(messageInformation.message);
    }

}