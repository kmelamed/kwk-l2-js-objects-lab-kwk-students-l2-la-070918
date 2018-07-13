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

function deleteFromDriverByKey(driver, key) {
  var driver2 = driver;
  delete driver2[key];
  const finalDriver = Object.assign({}, driver, driver2)
  return driver2;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
