var should = require("should")

var appIndex = require("../src/index");

describe('Application', function(){

  describe('Entry point', function(){
    
    it('Should return 0', function(){
    	var result = appIndex();
    	result.should.be.exactly(0).and.be.a.Number;
    })

  })

})
