const muscles = {
    0: {
        'muscle': 'legs',
        'exercises': ['squats', 'leg extensions', 'bulgarian squats'],
        'multiplier': 1.7
    },
    1: {
        'muscle': 'chest',
        'exercises': ['bench press', 'inclined bench press', 'cable flies'],
        'multiplier': 1
    },
    2: {
        'muscle': 'shoulders',
        'exercises': ['lateral raise', 'front raise', 'overhead press'],
        'multiplier': .2
    },
    3: {
        'muscle': 'arms',
        'exercises': ['curls', 'french press', 'tricep extensions'],
        'multiplier': .3
    },
    4: {
        'muscle': 'back',
        'exercises': ['rows', 'deadlifts', 'lat pull-downs'],
        'multiplier': 1.2
    }
}
const selectRandomExercise = () => Math.floor(Math.random() * 5);
const displayRandomExercise = (randNum, bodyWeight) => {
    console.log(`In today\'s workout we\'ll train ${muscles[randNum].muscle},
    you\'ll do ${muscles[randNum].exercises[Math.floor(Math.random() * 3)]} until failure 
    with ${bodyWeight * muscles[randNum].multiplier} kg`)
}

displayRandomExercise(selectRandomExercise(), 72);