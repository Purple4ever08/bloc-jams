function forEach(array, callback) {
  for (var i=0; i < array.length; i++){
    console.log(array[i]);
    callback(array[i]);
  }
}
