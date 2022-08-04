const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /books should return a list of books', async () => {
    const resp = await request(app).get('/books');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      {
        id: '1',
        title: 'The Name of the Wind',
        released: 2007
      },
      {
        id: '2',
        title: 'The Wise Mans Fear',
        released: 2011
      },
      {
        id: '3',
        title: 'American Gods',
        released: 2011
      },
      {
        id: '4',
        title: 'Anansi Boys',
        released: 2005
      },
      {
        id: '5',
        title: 'Good Omens',
        released: 2006
      },
    ]);
  });
  it('#GET books/:id should return a single book', async () => {
    const resp = await request(app).get('/books/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      title: 'The Wise Mans Fear',
      released: 2011
    });
  });
  afterAll(() => {
    pool.end();
  });
});
