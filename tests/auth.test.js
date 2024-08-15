const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth API', () => {
  it('should register a user', (done) => {
    chai
      .request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'password123' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message').eql('User registered successfully');
        done();
      });
  });

  it('should login a user', (done) => {
    chai
      .request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'password123' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
