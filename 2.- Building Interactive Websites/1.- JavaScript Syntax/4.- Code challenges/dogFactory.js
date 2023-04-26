// Write your code here:
const dogFactory = (name, breed, weight) => {
    if (typeof name === 'string' &&
        typeof breed === 'string' &&
        typeof weight === 'number') {
          return {
            _name: name,
            _breed: breed,
            _weight: weight,
            set name(name) {
              if (typeof name === 'string') {
                this._name = name;
              }
            },
            set breed(breed) {
              if (typeof breed === 'string') {
                this._breed = breed;
              }
            },
            set weight(weight) {
              if (typeof weight === 'string') {
                this._weight = weight;
              }
            },
            get name() {
              return this._name;
            },
            get breed() {
              return this._breed;
            },
            get weight() {
              return this._weight;
            },
            bark() {
              return 'ruff! ruff!'
            },
            eatTooManyTreats() {
              this._weight += 1;
            }
          }
        }
  }