window.addEventListener('DOMContentLoaded', () => {
    alert("আপনার প্রয়োজনীয় সমস্ত কিছু একদম নিচের দিকে গেলে পেয়ে যাবেন।");
});

const adsterraSmartLink = "https://www.effectivecpmnetwork.com/ahfgm0hz?key=c3e085a8d445c6c9dc7aaa6ecdcaf489";

let downloadTracker = { app: false, f1: false, f2: false, f3: false, f4: false };
let currentTargetFile = "";
let currentStep = 1;
let countdownTimer;

const onlineDownloadLinks = {
    app: "https://play.google.com/store/apps/details?id=com.dts.freefiremax",
    f1: "https://raw.githubusercontent.com/theadavanced/open-source-dump/main/unlimited_diamond_config.cpp",
    f2: "https://raw.githubusercontent.com/theadavanced/open-source-dump/main/all_dress_unlocker.dat",
    f3: "https://raw.githubusercontent.com/theadavanced/open-source-dump/main/all_weapons_skin.cfg",
    f4: "https://raw.githubusercontent.com/theadavanced/open-source-dump/main/profile_customize_system.sys"
};

function startVerification(targetId) {
    currentTargetFile = targetId;
    currentStep = 1;
    
    document.getElementById("adModal").style.display = "flex";
    resetDots();
    setupStepUI();
}

function setupStepUI() {
    const modalBtn = document.getElementById("modalBtn");
    const timerBox = document.getElementById("timerBox");
    const stepText = document.getElementById("stepText");
    const statusLabel = document.getElementById("statusLabel");

    stepText.innerText = `Step ${currentStep} of 4`;
    updateDots();

    if (currentStep === 1) statusLabel.innerText = "ভেরিফাই করা হচ্ছে...";
    if (currentStep === 2) statusLabel.innerText = "সার্ভার ডাটা লিংক চেক করা হচ্ছে...";
    if (currentStep === 3) statusLabel.innerText = "কনফিগারেশন ফাইল প্রসেস হচ্ছে...";
    if (currentStep === 4) statusLabel.innerText = "ফাইনাল সিকিউরিটি ক্লিয়ারেন্স...";

    modalBtn.disabled = false;
    modalBtn.innerText = currentStep === 4 ? "DOWNLOAD NOW" : "CLICK TO VERIFY";
    timerBox.innerText = "15s";
}

function processNextStep() {
    const modalBtn = document.getElementById("modalBtn");
    const timerBox = document.getElementById("timerBox");
    let countdown = 15;

    modalBtn.disabled = true;
    window.open(adsterraSmartLink, '_blank');

    countdownTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            timerBox.innerText = `${countdown}s`;
        } else {
            clearInterval(countdownTimer);
            timerBox.innerText = "✓";
            
            if (currentStep < 4) {
                currentStep++;
                setupStepUI();
            } else {
                document.getElementById("adModal").style.display = "none";
                downloadTracker[currentTargetFile] = true;
                
                executeOnlineDownload(currentTargetFile);
                checkLockStatus();
            }
        }
    }, 1000);
}


function updateDots() {
    for (let i = 1; i <= 4; i++) {
        const dot = document.getElementById(`dot${i}`);
        if (i < currentStep) {
            dot.className = "step-dot completed";
        } else if (i === currentStep) {
            dot.className = "step-dot active";
        } else {
            dot.className = "step-dot";
        }
    }
}

function resetDots() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`dot${i}`).className = "step-dot";
    }
}

function executeOnlineDownload(targetId) {
    const targetUrl = onlineDownloadLinks[targetId];
    
    let downloadLink = document.createElement("a");
    downloadLink.href = targetUrl;
    downloadLink.target = "_blank";
    
    if (targetId !== 'app') {
        let fileName = "";
        if(targetId === 'f1') fileName = "unlimited_diamond_config.cpp";
        if(targetId === 'f2') fileName = "all_dress_unlocker.dat";
        if(targetId === 'f3') fileName = "all_weapons_skin.cfg";
        if(targetId === 'f4') fileName = "profile_customize_system.sys";
        downloadLink.setAttribute("download", fileName);
    }
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function checkLockStatus() {
    if (downloadTracker.app && downloadTracker.f1 && downloadTracker.f2 && downloadTracker.f3 && downloadTracker.f4) {
        document.getElementById("blurContainer").style.filter = "none";
        document.getElementById("blurContainer").style.pointerEvents = "auto";
        document.getElementById("blurContainer").style.userSelect = "auto";
        
        const lockNotice = document.querySelector(".lock-notice");
        lockNotice.innerHTML = "✅ Verification Success! 🛠️ প্রোক্সি সার্ভার অ্যাক্টিভেশন গাইডলাইন আনলক হয়েছে।";
        lockNotice.style.color = "#00ff66";
    }
}