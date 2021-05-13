import {answer} from '../index';
import {expect} from "chai";

describe('meaning of life', () => {

    it('returns 42', () => {
        const result = answer();
        expect(result).to.equal(42);
    });

});