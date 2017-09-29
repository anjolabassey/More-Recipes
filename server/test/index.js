import http from 'http';
import assert from 'assert';

import 'app.js';

describe('POST api/recipes', () => {
  it('should return use post to add recipes', (done) => {
    chai.request(app)
      .post('')
      .end((error, response) => {
        expect(response).to.have.status(404);
        done();
      });
  });
});
});
