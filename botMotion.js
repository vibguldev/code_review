var directions = {
  E: { L: 'N', R: 'S' },
  S: { L: 'E', R: 'W' },
  W: { L: 'S', R: 'N' },
  N: { L: 'W', R: 'E' },
}

var fs = require('fs');
var inputFile = process.argv[2];
fs.readFile(inputFile, (err, data) => {
  if (err) console.log("Error : ", err);
  else {
    var stringifiedContents = data.toString();
    var splittedConetnt = stringifiedContents.split('\n');
    moveBot(splittedConetnt); 
  }
});

function moveBot(botMotionData) {
  var inputData = botMotionData;
  var gridDimensions = inputData[0].split(' ');
  var maxGridSizeXAxis = Number(gridDimensions[0]);
  var maxGridSizeYAxis = Number(gridDimensions[1]);
  var position = inputData[1].split(' '); //array with [0] as x , [1] as y and [2] as direction
  position[0] = Number(position[0]);
  position[1] = Number(position[1]);
  var botCommandString = inputData[2].split('');
  botCommandString.forEach((command) => {
    switch (command) {
      case 'M':
        {
          switch (position[2]) {
            case 'N':
              {
                var newPosition = position[1] - 1;
                if (newPosition <= maxGridSizeYAxis && newPosition >= 0) {
                  position[1] = newPosition;
                }
              }
              break;
            case 'S':
            {
                var newPosition = position[1] + 1;
                if (newPosition <= maxGridSizeYAxis && newPosition >= 0) {
                  position[1] = newPosition;
                }
              }
              break;
            case 'W':
            {
                var newPosition = position[0] - 1;
                if (newPosition <= maxGridSizeXAxis && newPosition >= 0) {
                  position[0] = newPosition;
                }
              }
              break;
            case 'E':
            {
                var newPosition = position[0] + 1;
                if (newPosition <= maxGridSizeXAxis && newPosition >= 0) {
                  position[0] = newPosition;
                }
              }
              break;

          }
        }
        break;
      case 'L':
        position[2] = directions[position[2]]['L']
        break;
      case 'R':
        position[2] = directions[position[2]]['R']
        break;
    }
    console.log(position);
  })
}

