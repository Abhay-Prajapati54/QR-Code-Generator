let btn = document.querySelector(".btn");
let img = document.querySelector("#QR-Img");
let input = document.querySelector("#text");
let qrBox = document.querySelector(".QR");

btn.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    img.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        encodeURIComponent(input.value);

    qrBox.classList.add("show-img");
});