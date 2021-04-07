'use strict';

const mbv = require('../multi-bracket-validation.js');

describe('MULTI-BRACKET VALIDATION TEST', () =>{
  it('Should return true on a correct bracket syntax', () => {
    const string = '[({})]';
    expect(mbv(string).toEqual(true));
  });

  it('Should return false on an incorrect bracket syntax', () => {
    const string = '[({})';
    expect(mbv(string).toEqual(false));
  });

  it('Should return false even if there are too many brackets', () => {
    const string = '[({})])))))))))))';
    expect(mbv(string).toEqual(false));
  });

  it('Should return false if the string is empty', () => {
    const string = '[({})]';
    expect(mbv(string).toEqual(true));
  });
});

