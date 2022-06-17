import {
    fakeBinary,
    fakeBinary2,
    abbreviateName,
    DNAtoRNA,
    BetterDNAtoRNA, countSheeps, betterCountSheep, check
} from "./CodeWars";
import {expect} from "chai";

describe('fakeBinary', () => {
    it('in string returns 0 if number is less than 5, or 1 if more than 5', () => {
        expect(fakeBinary('123456789')).to.equal('000011111');
    });

    it('test fakeBinary2', () => {
        expect(fakeBinary2('253486123156789')).to.equal('010011000011111');
    });
});

describe('Abbreviate Name', () => {
    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Guy Kozlovskij')).to.equal('G.K');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('dfgsdfghfdg hgrthrtyas')).to.equal('D.H');
    });
    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Aks Ballal')).to.equal('A.B');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Dan Bodart')).to.equal('D.B');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('erkopekopv gdfgdf')).to.equal('E.G');
    });

    it('returns only first letters of strings capitalized', () => {
        expect(abbreviateName('Loreta Koz')).to.equal('L.K');
    });
});

describe('DNAtoRNA', () => {
    it('replaces T with U in a string', () => {
       expect(DNAtoRNA('TTFSFDKDJGTTTUUUTT')).to.equal('UUFSFDKDJGUUUUUUUU');
    });
});

describe('DNAtoRNA', () => {
    it('replaces T with U in a string', () => {
        expect(BetterDNAtoRNA('GCAT')).to.equal('GCAU');
    });
});

describe('countSheeps', () => {
    const sheepArray = [
        true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true
    ];

    it('counts all true items in an array', () => {
        expect(countSheeps(sheepArray)).to.equal(17);
    });

    it('counts all true items in an array', () => {
        expect(betterCountSheep(sheepArray)).to.equal(17);
    });
});

describe('check', () => {
    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 'b')).to.equal(false);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 115)).to.equal(true);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 104)).to.equal(true);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], 54)).to.equal(false);
    });

    it('checks if any elements in an array match second element given as second argument', () => {
        expect(check([80, 117, 115, 104, 45, 85, 112, 115], '54')).to.equal(false);
    });
});
