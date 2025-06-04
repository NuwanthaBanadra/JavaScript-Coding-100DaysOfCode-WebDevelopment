function generateQR() {
    const input = document.getElementById('qrInput').value;
    const qrBox = document.getElementById('qrBox');
    const qrImage = document.getElementById('qrImage');
    const downloadLink = document.getElementById('downloadLink');

    if (input.trim() === '') {
        alert('Please enter text or a URL');
        return;
    }

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}`;

    qrImage.src = qrUrl;
    downloadLink.href = qrUrl;
    qrBox.classList.remove('hidden');
}
