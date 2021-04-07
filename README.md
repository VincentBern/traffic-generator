# Traffic Generator

Generate analytics on any Coveo search UI by mimicking user interactions. This tool provides a library of commands that enable the creation of user journeys that range from simple 'search and browse' to more complex interactions, such as searching for multiple items in one session, adding them to the cart and perform a checkout.

The tool works with minimal to no-set up when used with projects built with the [Generic Store](https://github.com/coveo/storefront-headless), and works out-of-the-box with most Coveo implementations using the Coveo JavaScript Search Framework. It can also work with non-jsui implementations, but there will be some setup required.

The project uses the Nightwatch.js library at its core, but has been extended to fit the use-cases more reliably. Feel free to contribute and extend the library of commands to accommodate to your use-case, chances are someone else will need them.


## How-to install

Clone this repo, then `npm install`.

Make sure your `chromedriver` is running (for example: `node_modules\.bin\chromedriver`)


## How-to use

### 1. Setup UI selectors

There are 3 JSON files in the input/selectors folder. If you are using a non-custom JSUI implementation you can put the selectors inside the JSUI.json. If you are using a project derived from the Generic Store, you can use the GenericStore.json file. Likewise, if your implementation is custom, you can use the a custom.json file as a template.


### 2. Setup test file

Inside the src/ folder create a file containing the journey you wish to run. Check out the examples inside the Examples folder to see how different use-cases have been setup. 

When using a custom selectors file, you will need to import it inside the test file.

```
const CustomSelectors = require('../../input/selectors/TheGYM.json');
```

From there, pass the selectors variable to all Coveo commands, like so:

```
await browser.CoveoSearch("running shoes", CustomSelectors);
```


### 3. Run the file

To run the journey one time, use the following command:

```
npx nightwatch ./src/Examples/_jsui.js
```

To run it x amount of times, use the file runner called: run_test.js by running it via command line from the root of the project:

```
npm run_tests.js
```

Don't forget to change the file name that calls the test file you configured with the user journeys.



## Commands (folder: /commands):

Commands are the actions that allow the tool to interct with the search interface, such as: Click on facets, click results, search with keywords, etc. 

Feel free to create your own commands, and maybe create a pull request to enrich the library even further!

This is a list of commands with their respective parameters:

- CoveoClearSearchBox: By default included inside the CoveoSearch command, so a the search box is always cleared everytime a search is peformed.
Parameters:
  - selector (optional): json object with search UI selectors)

- CoveoClickResultByNumber: Click on a result by using the index number (1 for first result, 2 for 2nd...)
Parameters:
  - nthValue (optional): integer containing index value (if no value is provided random item will be chosen),
  - Selector (optional): object containing custom selectors

- CoveoClickResultByText: Click a search result by usings its title
Parameters:
  - text: title of result to be clicked on
  - Selectors (optional): object containing custom selectors
  - pagiantionDepth (optional): how many pages should we go through when searching for specified result. 5 is default
  - index: in case of multiple matching elements. Set to 1 by default (first item that mateches)

- CoveoSearch: Perform a search using keywords:
Parameters:
  - text: text to search by
  - Selectors (optional): object containing custom selectors

- CoveoSelectFacetValueByText: Click on facet value by using label text
Parameters:
  - facetValue: facet label text to search by. If not found, more values will be requested
  - Selectors (optional): object containing custom selectors
  - facetName: Name of the selector as it appears in Selector JSON file

- CoveoSelectTab: Click on a tab using tab title
parameters:
  - tabName: title of the tab
  - Selectors (optional): object containing custom selectors



## Complex Journeys

It is possible to run complex user journeys such as: search, click on facet, click on result, add to cart and checkout with multiple items. An example of this has been setup in the project.

The setup file is input/scenarios/productsBoughtTogether.json

Then to run it, checkout the example journey file: src/commerce_journeys/items_purchased_together.js

## Run Headless

In order to run the project headless (without spawning a visual browser), simply add the following lines to the nightwtch.json file right after the desiredCapabilities object

```
"chromeOptions": {
  "args": [
    "--headless"
  ]
}
```