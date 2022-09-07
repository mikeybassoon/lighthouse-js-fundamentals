const chooseStations = function(stations) {
  let validLocations = [];
  for (let x in stations){
    if (stations[x][1] >= 20) {
      if (stations[x][2] === 'school' || stations[x][2] === 'community centre') {
        validLocations.push(stations[x][0]);
      }
    }
  }
  return validLocations;
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));