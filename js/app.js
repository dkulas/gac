var submitBtn = document.getElementById("submitBtn");

(function checkFetch() {
  if (self.fetch) {
    console.log("Fetch is working");
  } else {
    alert("Something happened...it's not you, well it might be.  Check your browser settings and make sure it supports the fetch() API call.  Otherwise, please upgrade to the latest and greatest version of Chrome or FireFox");
  }
})();

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
