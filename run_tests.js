const spawn = require('child_process').spawn;
let runcount = 500;

function run() {
  // the second time it gets here, nightwatch.runner wont run. the callback will never fire.
  spawn('npx', ['nightwatch', './src/storefront_bestbuy.js'], { stdio: 'inherit' }).on('close', function () {
    runcount--;
    if (runcount > 0) {
      // run again
      console.log(`\n\n-------------------------------------------\n-------------------------------------------\n       test # ${runcount}\n-------------------------------------------\n-------------------------------------------\n`)
      run();
    } else {
      finish();
    }
  })
}

function finish() {
  console.log("finish");
}

run()
