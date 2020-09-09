const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'Mike Tyson',
  email: 'tyson@mike.com',
  password: 'ShitTyie123!',
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should SignUp a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'EPINDER',
      email: 'singh@example.com',
      password: 'MyPass777!',
    })
    .expect(201);
});

test('Should login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test('Should not login nonexisting user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: 'thisissillypass',
    })
    .expect(400);
});
