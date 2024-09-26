const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const hr = document.querySelector("hr");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#111";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
        hr.style.borderTop = "1px solid #fff";
    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
        hr.style.borderTop = "1px solid #000";
    }
});