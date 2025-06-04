function generateQR() {
    const qrText = document.getElementById("qrText").value;
    const qrImage = document.getElementById("qrImage");
    const downloadBtn = document.getElementById("downloadBtn");

    if (!qrText.trim()) {
        alert("Please enter some text or a URL");
        return;
    }

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;

    qrImage.src = apiUrl;
    qrImage.onload = () => {
        downloadBtn.href = apiUrl;
        downloadBtn.style.display = "inline-block";
    };
}
