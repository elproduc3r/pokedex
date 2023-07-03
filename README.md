# Getting Started with Pokedex
Type in any Pokemon character to see details about it. All of your searches will show in the Recent Searches section. Click on any of your recent searches to quckly access that character again.

## Notes
Before making any API requests, the history is first checked to prevent any duplicate requests.
All types are exported to help with testing. Types are usually required in well written tests. Additionally, this was developed with the following engines:
```
  "node": "16.20.0",
  "npm": "8.19.4"
```
### Sprites
There are a lot of sprites for some characters so I chose to only show a handful of the sprites at the top level of the`sprites` data. I also indexed them in reverse order in `getSprites` because the "back facing" sprites were always first and it is a better experience to see the "front facing" sprites first.

## Not Yet Implemented
These 2 items were not yet implemented:
- Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.
- Automated tests that ensure the business logic implemented is correct.

### Running Pokedex

To run Pokedex:

1. clone this repo
2. In your Terminal run: `npm i`
3. In your Terminal run: `npm run start`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
