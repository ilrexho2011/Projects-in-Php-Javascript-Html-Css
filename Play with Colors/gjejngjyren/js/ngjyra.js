const main = () => {
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
  // terheqja e elementeve
  const btnReset = document.querySelector("#play-again");
  const btnSubmit = document.querySelector("#submit");
  const hexBox = document.querySelector(".hex-box");
  const result = document.querySelector("#result");
  const input = document.querySelector("#input");

  window.addEventListener("load", init);
  function init() {
    const randIdx = Math.floor(Math.random() * colorArray.length);
    hexBox.style.backgroundColor = colorArray[randIdx];
    result.innerHTML = "";
    console.log(rgb2hex(hexBox.style.backgroundColor));
  }

  btnSubmit.addEventListener("click", handleSubmit);
  btnReset.addEventListener("click", init);
  function handleSubmit() {
    if (input.value.toLowerCase() == rgb2hex(hexBox.style.backgroundColor)) {
      result.innerHTML = "Sakte! :)";
      result.style.color = "lightgreen";
    } else {
      result.innerHTML = "Gabim :(";
      result.style.color = "red";
    }
  }

  // varg me kode per ngjyra rastesore Hex
  const colorArray = [
    "#F8B195",
    "#F67280",
    "#C06C84",
    "#6C5B7B",
    "#355C7D",
    "#99B898",
    "#FECEAB",
    "#FF847C",
    "#E84A5F",
    "#2A363B",
    "#A8E6CE",
    "#DCEDC2",
    "#FFD3B5",
    "#FFAAA6",
    "#FF8C94",
    "#A8A7A7",
    "#CC527A",
    "#E8175D",
    "#474747",
    "#363636",
    "#E5FCC2",
    "#9DE0AD",
    "#45ADA8",
    "#547980",
    "#594F4F",
  ];
};

main();
