// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  //original
//   if (distance <= 400) {
//     return 0;
//   } else if (distance > 2500) {
//     return "Sorry, buddy.";
//   } else {
//     let price = (distance - 400) * 2
//     let total = (price / 100)
//     if (total > 25) {
//       total = 25;
//     }
//   } return total
// }

//solution
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
  }
}
