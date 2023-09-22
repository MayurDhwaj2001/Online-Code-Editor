function run() {
  const htmlcode = document.getElementById("html-code").value;
  const csscode = document.getElementById("css-code").value;
  const jscode = document.getElementById("js-code").value;
  const output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    htmlcode + "<style>" + csscode + "</style>";
  output.contentWindow.eval(jscode);
}

function copied() {
  const output = document.getElementById("toast");
  output.style.visibility = "visible";
  setTimeout(function () {
    output.style.visibility = "hidden"; // Hide the "toast" element after 2 seconds
  }, 2000);
}

function copyHTML() {
  const copyText = document.getElementById("html-code");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  // alert("Copied the text: " + copyText.value);
  copied();
}
function copyCSS() {
  const copyText = document.getElementById("css-code");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  copied();
}
function copyJS() {
  const copyText = document.getElementById("js-code");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  copied();
}
