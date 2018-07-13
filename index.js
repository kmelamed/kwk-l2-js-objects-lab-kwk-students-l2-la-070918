// Write your solution in this file!

var driver = {
}

function updateDriverWithKeyAndValue(driver, key, value) {
  var driver2 = { [key]: value }
  const finalDriver = Object.assign({}, driver, driver2)
  return finalDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey() {
  
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
