const team = {
    _players: [
      {firstName: 'James', lastName: 'Krosinsky', age: 24},
      {firstName: 'Paul', lastName: 'McCleen', age: 25},
      {firstName: 'Dane', lastName: 'Still', age: 23}
    ],
    _games: [
      {opponent: 'Dallas', teamPoints: 23, opponentPoints: 30},
      {opponent: 'Wisconsin', teamPoints: 47, opponentPoints: 42},
      {opponent: 'New Jersey', teamPoints: 10, opponentPoints: 6}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      this._players.push({
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      })
    },
    addGame(opponent, teamPoints, opponentPoints) {
      this._games.push({
        opponent,
        teamPoints,
        opponentPoints
      })
    }
  }
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);