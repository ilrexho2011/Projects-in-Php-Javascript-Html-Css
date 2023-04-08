const screen=document.querySelector('#screen')
const code=document.querySelector('#code')
const copyBtn=document.querySelector('#copyBtn')
const generateBtn=document.querySelector('#generateBtn')

const hexString="0123456789abcdef";

generateBtn.addEventListener("click", () => {
    let color = generateHexColor(hexString);
    screen.style.setProperty("--color", color);
    document.body.style.background = color;
    code.textContent = color;
});

function generateHexColor(hexString) {
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c += hexString.charAt(Math.floor(Math.random() *   hexString.length));
    }
    return c;
}

 copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(code.textContent);
});