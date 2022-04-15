// Returns true if user is logged in
const checkForLoggedIn = function() {
  return true;
};


// Display logged in as: *[user]email* in the top left of header bar
const displayLoggedInEmail = function(userInfoObj) {
  const loggedInDiv = document.createElement('div');
  loggedInDiv.classList.add('logged-in');

  const userEmailDisplay = document.createElement('span');
  userEmailDisplay.innerHTML = `Logged in as: <span style="color: white">${userInfoObj.email}</span>`;

  loggedInDiv.append(userEmailDisplay);
  headerBar.append(loggedInDiv);

}