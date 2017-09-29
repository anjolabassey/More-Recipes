import http from 'http';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import chai, { assert } from 'chai';

import app from '../app.js';

chai.use(chaiHttp);

describe('Tests for enpoints', () => {
  describe('GET api/recipes/recipes', () => {
    it('should GET all recipes', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });
  describe('GET api/recipes/recipes', () => {
    it('should GET all recipes', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });

  describe('PUT api/recipes/recipes/recipeid', () => {
    it('should PUT recipe', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });

  describe('GET api/recipes/recipes', () => {
    it('should GET all recipes', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });

  describe('GET api/recipes/recipes', () => {
    it('should GET all recipes', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });

  describe('GET api/recipes/recipes', () => {
    it('should GET all recipes', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });

  describe('GET api/recipes/recipes', () => {
    it('should GET all recipes', (done) => {
      chai.request(app).get('/api/recipes').end((error, response) => {
        assert.equal(200, res.statusCode);
      });
    });
  });



});
