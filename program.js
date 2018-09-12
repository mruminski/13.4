var os = require('os');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (!input) { return; }
  var cmd = input.toString().trim();
  switch (cmd) {
    case '/exit':
      process.stdout.write('Quitting app!');
      process.exit();
      break;
    case '/info':
      var lng = process.env.LANG;
      var nodeVersion = process.versions.node;
      console.log('User language:', lng);
      console.log('Used Node.js version:', nodeVersion);
      process.exit();
      break;
    case '/getOSinfo':
      getOSinfo();
      break;
    default:
      process.stderr.write('Wrong command');
      process.exit();  
    }
});

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
  console.log('Uptime: ~',(uptime / 60).toFixed(0), 'min');
  console.log('User name:', user.username);
  console.log('Home dir:', user.homedir);
}