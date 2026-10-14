const messageInput = document.getElementById("message");
const saveButton = document.getElementById("saveBtn");
const output = document.getElementById("output");

saveButton.addEventListener("click", function () {
    const message = messageInput.value.trim();

    if (message === "") {
        output.textContent = "Please enter a commit message.";
    } else {
        output.textContent = "Commit message: " + message;
        messageInput.value = "";
    }
});