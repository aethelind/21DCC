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
const voterTurnout = (voter_signatures, voter_ids) => {
  if(voter_signatures.length !== voter_ids.length){
    return false
  } else {
    for(var i=0;i<voter_signatures.length;i++){
      if(voter_signatures[i] !== voter_ids[i]){
        return "FRAUD!"
      }
    }
  }

  return "All clear, we can count the votes!"
}


// Challenge 7
const termTopics = (interviews) => {
  var topics = [0, 0, 0];
  for(var i in interviews){
    if(interviews[i] == "smart city"){
      topics[0]++
    } else if(interviews[i] == "arts funding"){
      topics[1]++
    } else  if(interviews[i] == "transportation"){
      topics[2]++
    } 
  }
  return topics
}


// Challenge 8
const smartGarbage = (trash, bins) => {
    bins[trash]++;
    return bins;
}


// Challenge 9
const carPassing = (cars, speed) => {
  cars.push({"time":Date.now(), "speed":speed})
  return cars
}


// Challenge 10
const whereCanIPark = (spots, vehicle) => {
  // get vehicle type (R, S, or M)
  var type = vehicle.charAt(0).toUpperCase();
  
  // define which spot types this vehicle may use
  var lookingFor = "R"
  if(type == 'S'){
    lookingFor = "RS"
  } else if (type == 'M'){
    lookingFor = "RSM"
  }
  
  // go through each spot
  for(var row in spots){
    for(var col in spots[row]){
      // check if spot at coords is a spot we can use
      if(lookingFor.indexOf(spots[row][col]) !== -1){
        return [col, row]
      }
    }
  }
  
  return false
}


// Challenge 11
const busTimes = buses => {
  let arrivals = {};
  
  for(var i in buses){
    arrivals[i] = buses[i].distance/buses[i].speed
  }
  
  return arrivals
}

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