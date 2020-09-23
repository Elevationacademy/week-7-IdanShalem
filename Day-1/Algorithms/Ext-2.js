const findClosest = function(points, point) {
    let closestLocation = points[0], 
        xShortestDist = Math.abs(point.x - closestLocation.x),
        yShortestDist = Math.abs(point.y - closestLocation.y)
    for(let i = 1; i < points.length; i++) {
        let xCurrentDist = Math.abs(point.x - points[i].x),
            yCurrentDist = Math.abs(point.y - points[i].y) 
        if(xCurrentDist < xShortestDist && yCurrentDist < yShortestDist) {
            xShortestDist = xCurrentDist
            yShortestDist = yCurrentDist
            closestLocation = points[i]
        }
    }
    return closestLocation
}

let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }

console.log(findClosest(pizzaLocations, homeLocation)) // should return {x: 3, y: 1}