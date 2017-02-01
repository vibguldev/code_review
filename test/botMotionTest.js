chai = require('chai');
assert = chai.assert;
expect = chai.expect;
var moveBot = require('../botMotion.js')
describe('move bot when valid inout is given', function () {
  it('should return the array of final position of the bot', function (done) {
    var inputFile = '/Users/vibhugulati/Desktop/test.txt';
    moveBot(inputFile, (err = null, finalPosition) => {
      expect(finalPosition).to.eqls([ 3, 2, 'N' ]);
      done();
    });
  });
});