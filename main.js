$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var searchQuery = $('input[type="text"]').val().toLowerCase();
      $('.box').each(function() {
        var boxText = $(this).text().toLowerCase();
        if (boxText.indexOf(searchQuery) !== -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
// get the dropdown and boxes
const themeDropdown = document.querySelector('.theme-dropdown select');
const boxes = document.querySelectorAll('.box');

// add event listener to dropdown
themeDropdown.addEventListener('change', () => {
  // get the selected theme value
  const themeValue = themeDropdown.value;

  // apply the selected theme to all boxes
  switch (themeValue) {
    case '1':
      boxes.forEach(box => {
        box.classList.remove('theme2', 'theme3', 'theme4');
        box.classList.add('theme1');
      });
      break;
    case '2':
      boxes.forEach(box => {
        box.classList.remove('theme1', 'theme3', 'theme4');
        box.classList.add('theme2');
      });
      break;
    case '3':
      boxes.forEach(box => {
        box.classList.remove('theme1', 'theme2', 'theme4');
        box.classList.add('theme3');
      });
      break;
    case '4':
      boxes.forEach(box => {
        box.classList.remove('theme1', 'theme2', 'theme3');
        box.classList.add('theme4');
      });
      break;
  }
});
const addToolBtn = document.getElementById("add-tool-btn");
const servicesNav = document.getElementById("services");

addToolBtn.addEventListener("click", () => {
  const form = document.createElement("form");
  form.innerHTML = `
    <label for="tool-name">Tool Name:</label>
    <input type="text" id="tool-name" name="tool-name">
    <label for="tool-url">Tool URL:</label>
    <input type="text" id="tool-url" name="tool-url">
    <button type="submit">Add Tool</button>
  `;
  document.body.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const toolName = form.querySelector("#tool-name").value;
    const toolUrl = form.querySelector("#tool-url").value;
    const newTool = document.createElement("a");
    newTool.href = toolUrl;
    newTool.textContent = toolName;
    servicesNav.appendChild(newTool);
    document.body.removeChild(form);
  });
});
