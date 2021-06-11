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

    it('returns three', () => {
        const result = answer(3);
        expect(result).to.equal("three");
    });

    it('returns four', () => {
        const result = answer(4);
        expect(result).to.equal("four");
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

    it( 'returns thirty four', () => {
        const result = answer(34);
        expect(result).to.equal("thirty four");
    })

    it( 'returns thirty five', () => {
        const result = answer(35);
        expect(result).to.equal("thirty five");
    })
    it( 'returns thirty six', () => {
        const result = answer(36);
        expect(result).to.equal("thirty six");
    })
    it( 'returns thirty seven', () => {
        const result = answer(37);
        expect(result).to.equal("thirty seven");
    })
    it( 'returns thirty eight', () => {
        const result = answer(38);
        expect(result).to.equal("thirty eight");
    })
    it( 'returns thirty nine', () => {
        const result = answer(39);
        expect(result).to.equal("thirty nine");
    });

    it( 'returns forty', () => {
        const result = answer(40);
        expect(result).to.equal("forty");
    });

    it( 'returns forty one', () => {
        const result = answer(41);
        expect(result).to.equal("forty one");
    });
});