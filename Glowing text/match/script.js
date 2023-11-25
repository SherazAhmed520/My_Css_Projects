// Team selection form submission
document.getElementById("team-selection-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get selected team values
    var team1 = document.getElementById("team1").value;
    var team2 = document.getElementById("team2").value;
    
    // Validate team selection
    if (team1 === "" || team2 === "" || team1 === team2) {
      alert("Please select two different teams to start the match.");
      return;
    }
    
    // Call API or generate random data to start the match
    startMatch(team1, team2);
  });
  
  // Start the match
  function startMatch(team1, team2) {
    // Implement match start functionality here
    // Fetch match data from an API or generate it randomly
    
    // Example: Update score and gameplay buttons
    document.getElementById("team1-score").innerHTML = "Team 1: <span id='team1-runs'>0</span>/<span id='team1-wickets'>0</span>";
    document.getElementById("team2-score").innerHTML = "Team 2: <span id='team2-runs'>0</span>/<span id='team2-wickets'>0</span>";
    
    var gameplayContainer = document.getElementById("gameplay-container");
    gameplayContainer.innerHTML = "";
    
    var runs = [0, 1, 2, 3, 4, 6];
    
    for (var i = 0; i < runs.length; i++) {
      var button = document.createElement("button");
      button.classList.add("gameplay-button");
      button.innerHTML = runs[i];
      button.addEventListener("click", function() {
        updateScore(this.innerHTML);
      });
      
      gameplayContainer.appendChild(button);
    }
  }
  
  // Update the score based on the runs
  function updateScore(runs) {
    // Implement score update functionality here
    // Update the score based on the runs
    // Example: Increment runs and wickets for the respective team
    
    var team1Runs = document.getElementById("team1-runs");
    var team1Wickets = document.getElementById("team1-wickets");
    var team2Runs = document.getElementById("team2-runs");
    var team2Wickets = document.getElementById("team2-wickets");
    
    team1Runs.innerHTML = parseInt(team1Runs.innerHTML) + parseInt(runs);
    team1Wickets.innerHTML = parseInt(team1Wickets.innerHTML) + 1;
    
    team2Runs.innerHTML = parseInt(team2Runs.innerHTML) + parseInt(runs);
    team2Wickets.innerHTML = parseInt(team2Wickets.innerHTML) + 1;
  }