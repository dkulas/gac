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
    var name = data.name;
    var profilePicture = data.avatar_url;
    var dateJoined = data.created_at;
    var username = data.login;
    var website = data.blog;
    var email = data.email;
    var company = data.company;
    var location = data.location;
    var hireable = data.hireable;
    var userID = data.id;
    var bio = data.bio;
  });
};

function getUsername() {
  return document.getElementById("githubUsernameInput").value;
};

submitBtn.addEventListener("click", function() {
  fetchData();
});