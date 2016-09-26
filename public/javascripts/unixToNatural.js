var unixToNatural = function (unix) {
  var date = new Date(unix * 1000);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  var result = month + ' ' + day + ', ' + year;
  return result;
}

module.exports = unixToNatural;