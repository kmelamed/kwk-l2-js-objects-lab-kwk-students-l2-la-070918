// Write your solution in this file!

var driver = {
}

function updateDriverWithKeyAndValue(driver, key, value) {
  let driver2 = { [key]: value }
  const finalDriver = Object.assign({}, driver, driver2)
  return finalDriver;
}