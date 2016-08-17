/**
function getTemplCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTemplCallback('San Francisco', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('San Francisco').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise err', err);
})
**/


// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('A & B need to be numbers');
    }

  });
}

addPromise(8, 2).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
