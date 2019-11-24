// Challenge 1
  const doorToDoor = (volunteers, neighbourhoods) => {
    return neighbourhoods.length / volunteers.length;   
  }


// Challenge 2
const interviewAnswer = (topic) => {
  if (topic == "arts funding") {
    return "We'll have to get creative!";
  } else if (topic == "economy") {
    return "Time is money.";
  } else if (topic == "transportation") {
    return "It's going to be a long road, so we better get moving.";
  } else {
    return "QUACK!!";
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
    unregisteredVoters.splice(i, 1);
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
    return false;
  } else {
    for(var i=0;i<voter_signatures.length;i++){
      if(voter_signatures[i] !== voter_ids[i]){
        return "FRAUD!";
      }
    }
  }

  return "All clear, we can count the votes!";
}


// Challenge 7
const termTopics = (interviews) => {
  var topics = [0, 0, 0];
  for(var i in interviews){
    if(interviews[i] == "smart city"){
      topics[0]++;
    } else if(interviews[i] == "arts funding"){
      topics[1]++;
    } else  if(interviews[i] == "transportation"){
      topics[2]++;
    } 
  }
  return topics;
}


// Challenge 8
const smartGarbage = (trash, bins) => {
    bins[trash]++;
    return bins;
}


// Challenge 9
const carPassing = (cars, speed) => {
  cars.push({"time":Date.now(), "speed":speed});
  return cars;
}


// Challenge 10
const whereCanIPark = (spots, vehicle) => {
  // get vehicle type (R, S, or M)
  var type = vehicle.charAt(0).toUpperCase();
  
  // define which spot types this vehicle may use
  var lookingFor = "R";
  if(type == 'S'){
    lookingFor = "RS";
  } else if (type == 'M'){
    lookingFor = "RSM";
  }
  
  // go through each spot
  for(var row in spots){
    for(var col in spots[row]){
      // check if spot at coords is a spot we can use
      if(lookingFor.indexOf(spots[row][col]) !== -1){
        return [col, row];
      }
    }
  }
  
  return false;
}


// Challenge 11
const busTimes = buses => {
  let arrivals = {};
  
  for(var i in buses){
    arrivals[i] = buses[i].distance/buses[i].speed;
  }
  
  return arrivals;
}


// Challenge 12
const checkAir = function (samples, threshold) {
  var dirty = 0;
  
  for(i in samples){
    if(samples[i] == "dirty"){
      dirty++;
    }
  }
  
  var t = dirty / samples.length;
  
  if(t < threshold){
    return "Clean";
  } else {
    return "Polluted";
  }
  
}


// Challenge 13
const lightsOn = function(lights) {
  for(var i in lights){
    lights[i].on = true;
  }
  return lights;
}

const lightsOff = function(lights) {
  for(var i in lights){
    lights[i].on = false;
  }
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  if(lightsAreOn){
    return lightsOff(lights);
  } else {
    return lightsOn(lights);
  }
}


// Challenge 14
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  var price = 1;
  price += distanceTraveled * 0.25;
  if(numberOfPeople >= 30){
    price += 0.25;
  }
  return "$" + price.toFixed(2);
}


// Challenge 15
const finalPosition = (moves) => {
  var x = 0;
  var y = 0;
  
  for(var i in moves){
    switch(moves[i]){
      case "north":
        y++;
        break;
      case "south":
        y--;
        break;
      case "east":
        x++;
        break;
      case "west":
        x--;
        break;
    }
  }
  
  return [x, y];
}


// Challenge 16
const festivalColours = color1 => {
  var color2 = Math.abs(color1+150) % 360;
  var color3 = Math.abs(color1+210) % 360;
  return [color2, color3];
}


// Challenge 17
const judgeVegetable = (vegetables, metric) => {
  var best = vegetables[0];
  
  for(var i in vegetables){
    if (vegetables[i][metric] > best[metric]){
      best = vegetables[i];
    }
  }
  
  return best.submitter;
}

// Challenge 18
const countTickets = (tickets) => {
  var count = {"red": 0, "green": 0, "blue": 0};
  
  for(var i in tickets){
    count[tickets[i]]++;
  }
  
  return count;
}

const bestOdds = (tickets, raffleEntries) => {
  count = countTickets(tickets);
  
  r = count["red"] / raffleEntries["red"];
  g = count["green"] / raffleEntries["green"];
  b = count["blue"] / raffleEntries["blue"];
  
  if(r > g && r > b){
    return "You have the best odds of winning the red raffle.";
  } else if(g > b){
    return "You have the best odds of winning the green raffle.";
  } else {
    return "You have the best odds of winning the blue raffle.";
  }
}


// Challenge 19
const pumpkinSpice = money => {
  var ps = [0,0,0,0];
  
  while(money >= 5){
    money = money - 5;
    ps[0]++;
    ps[3]+=30;
  }
  while(money >= 3){
    money = money - 3;
    ps[1]++;
    ps[3]+=15;
  }
  while(money >= 1){
    money = money - 1;
    ps[2]++;
    ps[3]+=3;
  }  

  return ps;
}


// Challenge 20
const PI = 3.14159 

const sphereVolume = function (radius) {
  return (4/3) * PI * (radius**3);
}

const coneVolume = function (radius, height) {
  return PI * (radius**2) * (height/3);
}

const prismVolume = function (height, width, depth) {
  return height*width*depth;
}

const totalVolume = function (solids) {
  var total = 0;
  
  for(var i in solids){
    switch(solids[i].type){
      case 'sphere':
        total += sphereVolume(solids[i].radius);
        break;
      case 'cone':
        total += coneVolume(solids[i].radius, solids[i].height);
        break;
      case 'prism':
        total += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
        break;
    }
  }
  
  return total;
}


// Challenge 21
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(var i in recipes){
    console.log(bakeryA.includes(recipes[i].ingredients[0]))
    if((bakeryA.includes(recipes[i].ingredients[0]) && bakeryB.includes(recipes[i].ingredients[1])) || (bakeryA.includes(recipes[i].ingredients[1]) && bakeryB.includes(recipes[i].ingredients[0]))){
      return recipes[i].name;
    }
    
  }
}
