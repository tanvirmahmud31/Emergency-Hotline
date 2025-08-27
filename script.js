
let count = 0;

// সবগুলো heart element নেবো
const allHearts = document.getElementsByClassName("hearts");

// প্রতিটা heart এ আলাদা করে event listener বসাবো
for (const heart of allHearts) {
  heart.addEventListener("click", function () {
    count++;
    document.getElementById("heart-count").innerText = count;
  });
}
