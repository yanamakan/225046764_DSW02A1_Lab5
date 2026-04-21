window.onload = function () {
    document.getElementById("blendBtn").addEventListener("click", function () {
        let output = document.getElementById("output");
        output.innerHTML = "";

        let surname = document.getElementById("surname").value;
        let font = document.getElementById("font").value;
        let position = document.querySelector("input[name='pos']:checked").value;
        let color = document.getElementById("colorPicker").value;
        let size = document.getElementById("sizeSlider").value;
        let spacing = document.getElementById("spacingSlider").value;

        if (position === "seq") {
            for (let i = 0; i < surname.length; i++) {
                let x = (i + 1) * 15;
                let y = x;
                let span = document.createElement("span");
                span.textContent = surname[i];
                span.style.position = "absolute";
                span.style.left = x + "px";
                span.style.top = y + "px";
                span.style.fontFamily = font;
                span.style.color = color;
                span.style.fontSize = size + "px";
                span.style.letterSpacing = spacing + "px";
                output.appendChild(span);
            }
        } else if (position === "rand") {
            for (let i = 0; i < surname.length; i++) {
                let x = Math.floor(Math.random() * 301);
                let y = Math.floor(Math.random() * 101);
                let span = document.createElement("span");
                span.textContent = surname[i];
                span.style.position = "absolute";
                span.style.left = x + "px";
                span.style.top = y + "px";
                span.style.fontFamily = font;
                span.style.color = color;
                span.style.fontSize = size + "px";
                span.style.letterSpacing = spacing + "px";
                output.appendChild(span);
            }
        } else if (position === "rev") {
            for (let i = 0; i < surname.length; i++) {
                let char = surname[surname.length - 1 - i];
                let x = (i + 1) * 15;
                let y = x;
                let span = document.createElement("span");
                span.textContent = char;
                span.style.position = "absolute";
                span.style.left = x + "px";
                span.style.top = y + "px";
                span.style.fontFamily = font;
                span.style.color = color;
                span.style.fontSize = size + "px";
                span.style.letterSpacing = spacing + "px";
                output.appendChild(span);
            }
        }
    })
}