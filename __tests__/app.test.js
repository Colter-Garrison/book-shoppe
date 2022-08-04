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
  it('#GET /books/:id should return a single book', async () => {
    const resp = await request(app).get('/books/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      title: 'The Wise Mans Fear',
      released: 2011
    });
  });
  it('#GET /authors should return a list of authors', async () => {
    const resp = await request(app).get('/authors');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual([
      {
        id: '1',
        name: 'Patrick Rothfuss',
        dob: 1973,
        pob: 'Madison, Wisconsin'
      },
      {
        id: '2',
        name: 'Neil Gaiman',
        dob: 1960,
        pob: 'Portchester, Hampshire, England'
      },
      {
        id: '3',
        name: 'Terry Pratchett',
        dob: 1948,
        pob: 'Buckinghamshire, England'
      },
    ]);
  });
  it('#GET /authors/:id should return a single author', async () => {
    const resp = await request(app).get('/authors/2');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '2',
      name: 'Neil Gaiman',
      dob: 1960,
      pob: 'Portchester, Hampshire, England'
    });
  });
  afterAll(() => {
    pool.end();
  });
});
