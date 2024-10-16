
function generate_greeting() {
    const greeting_num = document.querySelector(".random_num");
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?"
    const characters_len = characters.length

    let result = "";
    let range = Math.max(5, Math.floor((Math.random() * 12) + 1))

    for (let i = 0; i <= range; i++) {
        let random_char = characters.charAt(Math.floor((Math.random() * characters_len)))
        result += random_char;
    }

    // let random_num = Math.floor((Math.random() * 8000000000) +1);

    greeting_num.textContent = result;
}

function enable_eye() {
    const eye_container = document.querySelector("#eye-container");
    // const original = document.querySelector(".blinking-eye");
    const eye_wrap = document.querySelector(".eye-wrap")

    if (eye_container.childElementCount <= 10) {
        const eye_clone = eye_wrap.cloneNode(true);
        eye_container.appendChild(eye_clone);
    }

    const all_eyes = document.querySelectorAll(".blinking-eye");

    all_eyes.forEach(eye =>  {
        let rot_degree = Math.floor(Math.random() * 360);

        let random_x = Math.floor(Math.random() * 1500);
        let random_y = Math.floor(Math.random() * 750)

        eye_wrap.style.top = random_y + 'px';
        eye_wrap.style.left = random_x + 'px';

        eye.style.transform = 'rotate(' + rot_degree + 'deg)';
        eye.style.visibility = "visible";

        setTimeout(() => {
            eye.style.visibility = "hidden";
        }, 3000);
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(generate_greeting, 200);
    // setInterval(enable_eye, 40000);
})