// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '1s'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driver2 = driver;// { [key]: value }
  return driver, Object.assign({[key]: value}, driver2), driver2;
}