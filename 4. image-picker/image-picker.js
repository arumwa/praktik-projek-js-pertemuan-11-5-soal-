const img = document.querySelector(".image");
let hasil = document.querySelector(".hasil");

const daftarImage = {
    img1: "./img/Ini adalah gambar anjing.png",
    img2: "./img/Ini adalah gambar buaya.png",
    img3: "./img/Ini adalah gambar kucing.png",
    img4: "./img/Ini adalah gambar kupu-kupu.png",
    img5: "./img/Ini adalah gambar kura-kura.png",
    img6: "./img/Ini adalah gambar maung.png",
    img7: "./img/Ini adalah gambar panda.png",
    img8: "./img/Ini adalah gambar pinguin.png",
};

const {
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
} = daftarImage;

img.addEventListener("change", () => {
    for (const i in daftarImage) {
        if (img.value == i) {
            alert(`Gambar ${daftarImage[i]}`);
           hasil.innerHTML = `<img src="${daftarImage[i]}" />`;
        }
    }
});