function generateQR() {
    const qrInput = document.getElementById("qrInput").value;
    if (!qrInput) {
        alert("Please enter text or a URL!");
        return;
    }

    const qr = new QRious({
        element: document.createElement("canvas"),
        value: qrInput,
        size: 200
    });

    const qrResult = document.getElementById("qrResult");
    qrResult.innerHTML = "";
    qrResult.appendChild(qr.element);

    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.style.display = "block";
    downloadBtn.onclick = function () {
        const link = document.createElement("a");
        link.href = qr.element.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
    };
}
