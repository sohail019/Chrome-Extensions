const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");



// chrome.action.setBadgeText(
//   {
//     text: "Cat",
//   },
//   () => {
//     console.log("Cat is Angry");
//   }
// );


const updateTimerElements = () => {
    chrome.storage.local.get(["timer"], (res) => {
        const time = res.timer ?? 0
        timerElement.textContent = `My Timer is: ${time}`
    })
    const currentTime = new Date().toLocaleTimeString();
    timeElement.textContent = `My feed time is: ${currentTime}`;
}

updateTimerElements()
setInterval(updateTimerElements, 1000)



chrome.storage.sync.get(["name"], (result) => {
  nameElement.textContent = `My Name is ${result.name}`;
});


startBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: true
    })
})

stopBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: false
    })
})

resetBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        timer: 0,
        isRunning: false
    })
})