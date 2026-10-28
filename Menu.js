let lunches = [];

function addLunchToEnd(array, item) {
  array.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array, item) {
  array.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`)
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
  return console.log("No lunches to remove.");
  } else {
    let removeItem = array.pop();
    console.log(`${removeItem} removed from the end of the lunch menu.`);
  }
  return array
}

function removeFirstLunch(array) {
  if (array.length === 0) {
  return console.log("No lunches to remove.");
} else {
  let removeItem = array.shift();
  console.log(`${removeItem} removed from the start of the lunch menu.`);
}
return array
} 

function getRandomLunch(array) {
  if (array.length === 0) {
    return console.log("No lunches available.");
  } else {
  const randomItem = array[Math.floor(Math.random() * array.length)];
  return console.log(`Randomly selected lunch: ${randomItem}`);
  }
} 

function showLunchMenu(array) {
  if (array.length === 0) {
    return console.log("The menu is empty.");
  } else {
    return console.log(`Menu items: ${array.join(", ")}`);
  }
}
