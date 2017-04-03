var submitBtn = document.getElementById("submitBtn");

// Check if Fetch is available
(function checkFetch() {
  if (self.fetch) {
    console.log("Fetch is working");
  } else {
    alert("Something happened...it's not you, well it might be.  Check your browser settings and make sure it supports the fetch() API call.  Otherwise, please upgrade to the latest and greatest version of Chrome or FireFox");
  }
})();

// Isolate Github username
function getUsername() {
  return document.getElementById("githubUsernameInput").value;
};

// Fetch Github User Data
function fetchData() {
  fetch("https://api.github.com/users/" + getUsername())
  .then(data => data.json())
  .then(data => {

    console.log(data);

    var dateJoinedFull = data.created_at;
    var dateJoinedPartial = dateJoinedFull.split("T")[0];

    document.getElementById("name").innerHTML = data.name;
    document.getElementById("profilePicture").src = data.avatar_url;
    document.getElementById("dateJoined").innerHTML = "<strong>Date Joined</strong>: " + dateJoinedPartial;
    document.getElementById("username").innerHTML = data.login;
    document.getElementById("website").innerHTML = "<strong>Website</strong>: " + data.blog;
    document.getElementById("email").innerHTML = "<strong>Email</strong>: " + data.email;
    document.getElementById("company").innerHTML = "<strong>Company</strong>: " + data.company;
    document.getElementById("location").innerHTML = "<strong>Location</strong>: " + data.location;
    document.getElementById("hireable").innerHTML = "<strong>Hireable</strong>: " + data.hireable;
    document.getElementById("userID").innerHTML = "<strong>UserID</strong>: " + data.id;
    document.getElementById("bio").innerHTML = "<strong>Bio</strong>: " + data.bio;
  });
};

// Clear data on subsequent calls
function clearData() {
  document.getElementsByTagName("h1").innerHTML = "";
  document.getElementsByTagName("img").innerHTML = "";
  document.getElementsByTagName("li").innerHTML = "";
  document.getElementsByTagName("p").innerHTML = "";
}

// Initialize program
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  fetchData();
  clearData();
});

