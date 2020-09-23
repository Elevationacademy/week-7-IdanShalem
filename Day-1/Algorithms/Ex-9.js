const getLetter = function() {
    const rawDist = {
      A: 60,
      B: 10,
      C: 10,
      D: 20
    }
    let randomNum = Math.floor((Math.random() * 100) + 1)
    const letters = Object.keys(rawDist)
    let currentPercentage = 0
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i]
      if (rawDist[letter] + currentPercentage >= randomNum) {
        return letter
      } else {
        currentPercentage += rawDist[letter]
      }
    }
}

