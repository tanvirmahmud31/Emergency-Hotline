

// navbar a hearts count
let count = 0;
const allHearts = document.getElementsByClassName("hearts");
for (const heart of allHearts) {
    heart.addEventListener("click", function () {
        count++;
        document.getElementById("heart-count").innerText = count;
    });
}

//copy count
let copy_count = 0;
const copyCount = document.getElementsByClassName("copy-btn");
for (const copy of copyCount) {
    copy.addEventListener("click", function () {
        copy_count++;
        document.getElementById("copy-parent").innerText = copy_count;
        const copyParent = copy.parentElement.parentElement
        const serviceNumber = copyParent.getElementsByClassName("service-number")[0].innerText
        alert("copied number " + serviceNumber)

        navigator.clipboard.writeText(serviceNumber);

        const oldText = btn.innerText;
        btn.innerText = "Copied!";

        setTimeout(() => btn.innerText = oldText, 1500);
        return

    });
}


// call section
const coinsElem = document.getElementById("coins");
let totalCoins = parseInt(coinsElem.innerText);

const allCallButtons = document.getElementsByClassName("call-btn");

for (const callbtn of allCallButtons) {
    callbtn.addEventListener("click", function () {
        const card = callbtn.parentElement.parentElement;

        const serviceName =
            card.getElementsByClassName("service-name")[0].innerText;
        const serviceNumber =
            card.getElementsByClassName("service-number")[0].innerText;

        if (totalCoins >= 20) {
            totalCoins -= 20;
            coinsElem.innerText = totalCoins;
            alert(`📞 Calling ${serviceName} at ${serviceNumber} ...`);
        } else {
            alert("Insufficient balance");
            return;
        }

        // Add call to history
        const callHistory = document.getElementById("history");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="bg-[#F5FFF6] rounded-lg p-4 flex  justify-between items-center mx-2 mt-2">
                <div class="flex-1 min-w-0">
                    <h1 class="font-bold">${serviceName}</h1>
                    <p>${serviceNumber}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        callHistory.appendChild(newHistory);
    });
}

// clear button
document.getElementById("clear-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const callHistory = document.getElementById("history");
    callHistory.innerHTML = "";
})