const team = {
    _players: [
        {
            firstName: 'Marc-Andre',
            lastName: 'terStegen',
            playerNumber: 1
        },
        {
            firstName: 'Sergino',
            lastName: 'Dest',
            playerNumber: 2
        },
        {
            firstName: 'Gerard',
            lastName: 'Picque',
            playerNumber: 3
        },
        {
            firstName: 'Ronald',
            lastName: 'Araujo',
            playerNumber: 4
        },
        {
            firstName: 'Clement',
            lastName: 'Lenglet',
            playerNumber: 15
        },
        {
            firstName: 'Jordi',
            lastName: 'Alba',
            playerNumber: 18
        },
        {
            firstName: 'Lionel',
            lastName: 'Messi',
            playerNumber: 10
        }

    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoint: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Branco',
            teamPoint: 50,
            opponentPoints: 40
        },
        {
            opponent: 'Branc',
            teamPoint: 23,
            opponentPoints: 15
        }
    ],

    get players(){
        return this._players
    },

    get games(){
        return this._games
    },

    addPlayer(firstName, lastName, playerNumber){
        let player = {
            firstName: firstName,
            lastName: lastName,
            playerNumber: playerNumber
    }
        this.players.push(player)
    },
    addGame(opponent, teamPoint, opponentPoints){
        let game = {
            opponent: opponent,
            teamPoint: teamPoint,
            opponentPoints: opponentPoints
    }
        this.games.push(game)
    }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('bruk', 454, 43)

console.log(team.players)
