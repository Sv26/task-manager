const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { User } = require('../models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Task API', () => {
  let token;

  before((done) => {
    User.create({ username: 'taskuser', password: 'password123' }).then(() => {
      chai
        .request(app)
        .post('/api/auth/login')
        .send({ username: 'taskuser', password: 'password123' })
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });
  });

  it('should create a task', (done) => {
    chai
      .request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Task', description: 'Test description', dueDate: '2024-08-20' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('title').eql('Test Task');
        done();
      });
  });

  it('should get tasks', (done) => {
    chai
      .request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
