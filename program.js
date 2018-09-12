var osInfo = require('./osInfo');

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
      osInfo.print();
      break;
    default:
      process.stderr.write('Wrong command');
      process.exit();  
    }
});
