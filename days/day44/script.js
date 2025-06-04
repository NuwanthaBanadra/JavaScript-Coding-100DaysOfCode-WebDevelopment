function addEmoji() {
    const picker = document.getElementById("emojiPicker");
    const emoji = picker.value;

    const emojiEl = document.createElement("div");
    emojiEl.classList.add("emoji");
    emojiEl.textContent = emoji;

    // Random starting position
    emojiEl.style.top = Math.floor(Math.random() * 300) + "px";
    emojiEl.style.left = Math.floor(Math.random() * 500) + "px";

    enableDrag(emojiEl);

    document.getElementById("canvas").appendChild(emojiEl);
}

function clearBoard() {
    document.getElementById("canvas").innerHTML = "";
}

function enableDrag(el) {
    let offsetX = 0, offsetY = 0, isDragging = false;

    el.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
        el.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        el.style.left = (e.clientX - offsetX) + "px";
        el.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
        el.style.cursor = "grab";
    });
}
