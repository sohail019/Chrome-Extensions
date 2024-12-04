console.log("Hello from background service worker")
// let time = 0

// setInterval(() => {
//     time++
//     console.log(time)
// }, 1000)

chrome.alarms.create({
    periodInMinutes: 1/60
})

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(["timer", "isRunning"], (res) => {
        const time = res.timer ?? 0
        const isRunning = res.isRunning ?? true
        if(!isRunning) return
        chrome.storage.local.set({
            timer: time + 1
        })
        chrome.action.setBadgeText({
            text: `${time + 1}`
        })
        chrome.storage.sync.get(["notificationTime"], (result) => { 
            const notificationTime = result.notificationTime ?? 1000
            if(time % notificationTime == 0) {
                
                self.registration.showNotification("Angry Cat", {
                    body: `${notificationTime} has passed`,
                    icon: "icon.png"
                });
            }
        })
    })
})