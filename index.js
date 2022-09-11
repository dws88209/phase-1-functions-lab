// Code your solution in this file!
const headquaters= 42
function distanceFromHqInBlocks(pickup){
   if (42<pickup) {
    return pickup - 42
   } 
   else {
    return 42 - pickup
   } 
}
function distanceFromHqInFeet(pickup){
    distanceFromHqInBlocks(pickup); {
    if (42<pickup){
        return ((pickup - 42)*264)
    }
    else {
        return ((42-pickup)*264)
    }
    } 
} 
function distanceTravelledInFeet(start, destination){
    if (destination<start){
    return (start - destination)*264
} else {
    return (destination-start)*264
}
}
function calculatesFarePrice(start, destination){
const distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400){
return 0
} 
else if (distance>400 && distance<=2000){
console.log(distance)
    return (distance-400)*0.02
} 
else if (distance>2000 && distance<2500){
return 25
} else {
    return 'cannot travel that far'
}
}
