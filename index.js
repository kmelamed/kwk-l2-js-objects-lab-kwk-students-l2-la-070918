// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '1s'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  let driver2 = { [key]: value }
  return Object.assign({}, driver, driver2);
}