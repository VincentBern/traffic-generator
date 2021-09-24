const testsDir = process.env.TESTS_DIRECTORY;

module.exports = {
  src_folders: [
    'input',
    'src/commerce_journeys'
  ],
  custom_commands_path: "commands",
  test_settings: {
    default: {
      launch_url: 'http://web',
      selenium_host: 'hub',
      desiredCapabilities: {
        browserName: 'firefox',
        // javascriptEnabled: true,
        // chromeOptions: {
        //   args: [
        //     "headless",
        //     "no-sandbox",
        //     "privileged",
        //     "allow-insecure-localhost",
        //     "disable-gpu"
        //   ]
        // },
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests_output/screenshots',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        //     javascriptEnabled: true,
        //     chromeOptions: {
        //       args: [
        //         "headless",
        //         "no-sandbox",
        //         "privileged",
        //         "allow-insecure-localhost",
        //         "disable-gpu"
        //       ]
        //     },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        // javascriptEnabled: true,
      },
    },
    chromeDebug: {
      desiredCapabilities: {
        browserName: 'chrome',
        //     javascriptEnabled: true,
        //     chromeOptions: {
        //       args: [
        //         "headless",
        //         "no-sandbox",
        //         "privileged",
        //         "allow-insecure-localhost",
        //         "disable-gpu"
        //       ]
        //     },
      },
    },
    firefoxDebug: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
      },
    },
  },
};
