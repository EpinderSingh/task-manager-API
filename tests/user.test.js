const request = require('supertest');
const app = require('../src/app');

test('Should SignUp a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Epinder',
      email: 'epinder@emails.com',
      password: 'MyPass777!',
    })
    .expect(201);
});
