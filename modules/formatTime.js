function formatTime(time) {
  var hour = Math.floor(time / 3600);
  var minute = Math.floor((time / 60) % 60);
  var second = time % 60;

  return hour+':'+minute+':'+second;
}

exports.format = formatTime;