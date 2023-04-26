// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
    }
    return newStrand
}

const bases = ['A', 'T', 'C', 'G'];
const pAequorFactory = (num, arr) => {
    if (typeof num !== 'number' && typeof arr !== 'object') {
        return 'Please provida valid data';
    }
    return {
        specimenNum: num,
        dna: arr,
        mutate() {
            let baseIndex = Math.floor(Math.random() * this.dna.length);
            console.log(baseIndex)
            let base = this.specimenNum[baseIndex];
            let possibleMutations = bases.slice().filter(elem => elem !== base);
            let randSelection = Math.floor(Math.random() * 3);
            console.log('Before: ', this.dna[baseIndex]);
            this.dna[baseIndex] = possibleMutations[randSelection];
            console.log('After: ', this.dna[baseIndex]);
        },
        compareMutations(obj) {
            let sum = 0;
            for (let i = 0; i < 15; i++) {
                if (this.dna[i] === obj.dna[i]) {
                    sum++;
                }
            }
            console.log(sum);
            let avg = Math.floor(sum * 100 / 15);
            console.log(`Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${avg}% DNA in common`)
        },
        willLikelySurvive() {
            const regex = /GA/g;
            const matches = this.dna.match(regex);
            console.log(matches);
        }
    }
}
const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());
console.log(pAequor1)
console.log(pAequor2)
// pAequor.mutate()
// console.log(pAequor)
// pAequor1.compareMutations(pAequor2);
pAequor1.willLikelySurvive();
  
  
  
  
  