// Challenge 1
  const doorToDoor = (volunteers, neighbourhoods) => {
    return neighbourhoods.length / volunteers.length   
  }


// Challenge 2
const interviewAnswer = (topic) => {
  if (topic == "arts funding") {
    return "We'll have to get creative!"
  } else if (topic == "economy") {
    return "Time is money."
  } else if (topic == "transportation") {
    return "It's going to be a long road, so we better get moving."
  } else {
    return "QUACK!!"
  }
}


// Challenge 3
const castVote = (name, votes) => {
  
  if(name == "Tim"){
    votes[0]+=1;
  } else if (name == "Sally") {
    votes[1]+=1;
  } else if (name == "Beth") {
    votes[2]+=1;
  }
  
  return votes;
}


// Challenge 4
const registerToVote = (name, unregisteredVoters) => {
  
  var i = unregisteredVoters.indexOf(name);

  if(i!==-1){
    unregisteredVoters.splice(i, 1)
  }
  
  return unregisteredVoters;
}


// Challenge 5
const chooseStations = (stations) => {
  
  var appropriateStations = [];
  
  for (var i in stations){
    if(stations[i][1] >= 20 && (stations[i][2] == "school" || stations[i][2] == "community centre")){
      appropriateStations.push(stations[i][0]);
    }
  }
  
  return appropriateStations;
}


// Challenge 6
// Challenge 7
// Challenge 8
// Challenge 9
// Challenge 10
// Challenge 11
// Challenge 12
// Challenge 13
// Challenge 14
// Challenge 15
// Challenge 16
// Challenge 17
// Challenge 18
// Challenge 19
// Challenge 20
// Challenge 21