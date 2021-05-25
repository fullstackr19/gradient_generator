window.onload = function () {
    const btn = document.getElementById('generator');
    const text = document.getElementById('color');

    const generate = function () {
        newColor1 = "#" + (Math.floor((Math.random() * 0xFFFFFF))).toString(16);
        newColor2 = "#" + (Math.floor((Math.random() * 0xFFFFFF))).toString(16);
        // console.log(newColor1, newColor2);
        if (newColor1.length < 7 && newColor2.length < 7) {
            generate();
        }
    }

    btn.addEventListener("click", (e) => {
        generate();

        document.body.style.background = `linear-gradient(to right, ${newColor1}, ${newColor2})`;
        // btn.style.color = newColor;
        text.innerText = `linear-gradient(to right, ${newColor1}, ${newColor2})`;
    });
}