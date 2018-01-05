# typescript-react-jspm

Boilerplate for personal use, someone might find it useful with Typescript + React + JSPM (plus some gulp helpers as work arounds for buggy conversion between Typescript > Javascript > JSPM, mostly due to the css plugin and `module: system` from Typescript)

## What

* Typescript 2.6+
* Boostrap 4
* React 16+ + Router
* Redux + Actions + Persist + Thunk
* Jest
* Lodash
* Bluebird
* JSPM 0.17+
* Open Sans
* Other minor helper modules (see `jspm.dependencies` in `package.json`)
* Gulp for the release / fix task

## How

* `git clone https://github.com/pocesar/js-typescript-react-jspm.git yourproject`
* `cd yourproject`
* Edit package.json and put your project name on it, plus your extra typescript `@types` devDependencies
* `npm install`
* Hack around, you should edit your `_index.html`, not your `index.html` then:
  * `npm run vendor:build` to build your vendor separated from your main project (should be done once usually) in `dist/vendor.js`
  * `npm run ts:watch` for TS watching during dev
  * `npm run build` will make a release out of your sources (actually execute the more "advanced" Gulp task that calls `npm run build:release`)
  * `npm run test:build` will build your TS test sources
  * `npm test` jest test it
  * `npm run serve` simple serve your `index.html`, navigate to `http://127.0.0.1:5000`. To use your own port, use `npm run serve -- --port 3000`
  * `npm run sass:build` for SASS build (one time)
  * `npm run sass:watch` for SASS watching
* ...
* Profit!

## LICENSE

MIT