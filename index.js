const {fork, exec, spawn} = require('child_process');

// P1
execFile('process1.js', ['2'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
}); 


// Updating process
execFile('updatingProcess.js', ['2', '22'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
}); 


// P1
execFile('process1.js', ['22'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
}); 

// P2
execFile('process1.js', ['2'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
}); 