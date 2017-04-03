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

    document.getElementById("name").innerHTML = name;
    document.getElementById("profilePicture").src = profilePicture;
    document.getElementById("dateJoined").innerHTML = "Date Joined: " + dateJoined;
    document.getElementById("username").innerHTML = "Username: " + username;
    document.getElementById("website").innerHTML = "Website: " + website;
    document.getElementById("email").innerHTML = "Email: " + email;
    document.getElementById("company").innerHTML = "Company: " + company;
    document.getElementById("location").innerHTML = "Location: " + location;
    document.getElementById("hireable").innerHTML = "Hireable: " + hireable;
    document.getElementById("userID").innerHTML = "UserID: " + userID;
    document.getElementById("bio").innerHTML = "Bio: " + bio;
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
submitBtn.addEventListener("click", function() {
  fetchData();
  clearData();
});