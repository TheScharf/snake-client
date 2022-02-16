const { connect } = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function() {
    process.stdin.on('data', (key) => {
      process.stdout.write('clrt' + 'c');
    });
  };

  stdin.on('data', handleUserInput);

  setupInput();

  return stdin;
};

