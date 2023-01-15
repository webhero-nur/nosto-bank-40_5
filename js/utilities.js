function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  inputField.value = "";
  if (inputFieldValueString === "") {
    alert("Cannot be empty");
    return 0;
  }
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (isNaN(inputFieldValue)) {
    alert("Must be a number");
    return 0;
  }
  if (inputFieldValue < 0) {
    alert("Amount cannot be negative");
    return 0;
  }
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue.toFixed(2);
}
