process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");


let chai = require('chai');
let chaiHttp = require('chai-http');
let {myServer} = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('Login Routes', () => {
    it('Return validation Errors',  () => {
          chai.request(myServer)
          .post('/api/signIn')
          .end((err, res) => {
                res.should.have.status(400);
                
              done();
          });
    });
});