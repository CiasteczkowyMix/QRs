let toGenerate = window.location.search;
toGenerate = toGenerate.slice(1,toGenerate.length);
alert("ą");
const generateQrCode = (url) => {
    const qr = new QRCode(document.getElementById("qr-code"), {
        text: url,
    width: 300,
    height: 300,
});
};
generateQrCode(toGenerate);
