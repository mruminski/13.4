var os = require('os');
var time = require('./formatTime');

function getOSinfo() {
  var type = os.type();
  switch (type) {
    case 'Darwin':
      type = 'OSX';
      break;
    case 'Windows_NT':
      type = 'Windows';
      break;
    default:
      type = type;
  }
  var release = os.release;
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var user = os.userInfo();

  console.log('OS:',type);
  console.log('Release:',release);
  console.log('CPU Model:',cpu);
  console.log('Uptime: ',time.format(uptime));
  console.log('User name:', user.username);
  console.log('Home dir:', user.homedir);
}

exports.print = getOSinfo;