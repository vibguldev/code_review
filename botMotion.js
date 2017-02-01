var directions = {
  E:{L:'N',R:'S'},
  S:{L:'E',R:'W'},
  W:{L:'S',R:'N'},
  N:{L:'W',R:'E'},
}



var fs = require('fs');
var inputFile = process.argv[2];
fs.readFile(inputFile, (err, data) => {if (err) console.log("Error : ",err);
else {
var StringifiedContents = data.toString();
var splittedConetnt = StringifiedContents.split('\n');
moveBot(splittedConetnt);


}
});




function moveBot(content){
  var inputData = content;
  var gridDimensions = inputData[0].split(' ');
  var maxGridSizeXAxis = Number(gridDimensions[0]);
  var maxGridSizeYAxis = Number(gridDimensions[1]);
  var position = inputData[1].split(' '); //array with [0] as x , [1] as y and [2] as direction
  position[0] = Number(position[0]);
  position[1] = Number(position[1]);
  
  var botCommandString = inputData[2].split('');


  botCommandString.forEach((command) => {
    if (command === 'M') {
      if ((position[2] === 'N')){
        var newPosition = position[1] - 1;
        if (newPosition <= maxGridSizeYAxis && newPosition >= 0) {
          position[1] = newPosition;
        }
      
      }
      else if (position[2] === 'S') {
        var newPosition = position[1] + 1;
        if (newPosition <= maxGridSizeYAxis && newPosition >= 0) {
          position[1] = newPosition;
        }
      }
      else if (position[2] === 'W') {
        var newPosition = position[0] + 1;
        if (newPosition <= maxGridSizeXAxis && newPosition >= 0) {
          position[0] = newPosition;
        }
        position[0] = position[0] - 1;
      }
      else if (position[2] === 'E') {
        var newPosition = position[0] + 1;
        if (newPosition <= maxGridSizeXAxis && newPosition >= 0) {
          position[0] = newPosition;
        }
      }
    }
    else if (command === 'L') {
      position[2] = directions[position[2]]['L']
    }
    else if (command === 'R') {
      position[2] = directions[position[2]]['R']
    }
    console.log(position);
  })
}