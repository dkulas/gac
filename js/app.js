var submitBtn = document.getElementById("submitBtn");

function fetchData() {
  fetch("https://api.github.com/users/" + getUsername())
  .then(data => data.json())
  .then(data => {
    console.log(data);
  });
};

function getUsername() {
  return document.getElementById("githubUsernameInput").value;
};

submitBtn.addEventListener("click", function() {
  fetchData();
});
