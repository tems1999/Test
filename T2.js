function formatArray(arr) {
    var formattedArray = [];
    for (var i = 0; i < arr.length; i++) {
      formattedArray.push({
        "key": i + 1,
        "value": arr[i]
      });
    }
    return formattedArray;
  }
  
  var Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var formattedArray = formatArray(Array);
  console.log(formattedArray);
  