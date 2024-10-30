
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

function start_tv() {
    const power_btn = document.querySelector("#tv-button")
    const main_content = document.querySelector("#main-container")
    const tv_svg = document.querySelector("#tv-wrap")
    const outer_container = document.querySelector("#initial-container")

    power_btn.addEventListener("click", () => {
        main_content.classList.remove("invisible");
        tv_svg.classList.add("invisible");
        outer_container.classList.add("invisible");
    })
}

function check_pass_requirements() {
    const user_pw = document.querySelector("#user_password");

    if (length(user_pw.textContent) >= 8 && length(user_pw.textContent) <= 18) {
        const char_span = document.querySelector("#char-length")
        char_span.classList.add("pass_valid")

    }
}

function check_password() {
    const user_pw = document.querySelector("#user_password");
    const cfm_pw = document.querySelector("#check_pass");

    const isMatch = (user_pw.value != "" && cfm_pw.value != "") && (user_pw.value === cfm_pw.value);

    // check_pass_requirements();

    if (isMatch) {
        user_pw.nextElementSibling.classList.add("verified");
        cfm_pw.nextElementSibling.classList.add("verified");
    } else {
        user_pw.nextElementSibling.classList.remove("verified");
        cfm_pw.nextElementSibling.classList.remove("verified");
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(generate_greeting, 200);
    // setInterval(enable_eye, 40000);
    start_tv();
})