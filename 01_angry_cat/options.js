const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("time-input");
const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
    const name = nameInput.value;
    const notificationTime = timeInput.value
    console.log(name)

    chrome.storage.sync.set({
        name,
        notificationTime
    }, () => {
        console.log(`Name is Set to ${name}`)
    })
});

chrome.storage.sync.get(["name"], (result) => {
    nameInput.value = result.name;
    timeInput.value = result.notificationTime ?? 1000
    console.log(result.name)
});