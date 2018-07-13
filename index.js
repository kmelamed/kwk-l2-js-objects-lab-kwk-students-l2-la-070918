// Write your solution in this file!

const driver = {
  name: 'Sam',
  address: '1s'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  let driver2 = { [key]: value }
 //let driver2 =object.assign({key: value}, driver);
 // return object.assign(driver2, driver);
 //driver2 = object.assign({name: 'Same', address: '1s', key: value}, driver1);
 return Object.assign({}, driver, driver2);
}