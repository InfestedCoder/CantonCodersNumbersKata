import {answer} from '../index';
import {expect} from "chai";

describe('spell out number', () => {

    it('returns one', () => {
        const result = answer(1);
        expect(result).to.equal("one");
    });

    it('returns two', () => {
        const result = answer(2);
        expect(result).to.equal("two");
    });

    it('returns twenty one', () => {
        const result = answer(21);
        expect(result).to.equal("twenty one");
    });

    it('returns twenty three', () => {
        const result = answer(23);
        expect(result).to.equal("twenty three");
    });

    it('returns eleven', () => {
       const result = answer(11);
       expect(result).to.equal("eleven");
    });

    it('returns thirty one', () => {
        const result = answer(31);
        expect(result).to.equal("thirty one");
    });
});