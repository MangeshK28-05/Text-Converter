function makeItItalic() {
  const text = document.querySelector("#textInput").value;
  const output = document.querySelector("#fontDisplay");
  output.innerHTML = `<i>${text}</i>`;
}
function switchCase() {
  const Text = document.querySelector(`#TextInput`).value;
  const output = document.querySelector(`#caseDisplay`);
  output.innerHTML =
    Text === Text.toLowerCase() ? Text.toUpperCase() : Text.toLowerCase();
}
