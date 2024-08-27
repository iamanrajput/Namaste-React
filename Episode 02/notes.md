# Chapter 02 - Igniting our App

## Q What is `npm`?
A:  npm is like a magic toolbox for JavaScript programmers. It helps them find and use ready-made pieces of code (packages) made by other people.

## Q What is a `bundler`?
A: A `bundler` is a tool used in web development to combine multiple separate files, such as JavaScript, CSS, and images, into a smaller number of optimized files.

Webpack, Parcel, and Rollup are examples of popular bundlers used in web development.

## Q What is `Babel`?
A: `Babel` is a widely used open-source JavaScript compiler. Its primary purpose is to transform modern JavaScript code, which might use the latest language features and syntax (ES6+, ES7, etc.), into an older version that is compatible with older browsers and environments that don't support those newer features.

## Q What is the `difference between Webpack and Parcel`?
A: `Webpack` and `Parcel` are both tools used for bundling and managing assets in web development, but they have some differences in terms of configuration, features, and use cases:

### Configuration:
- `Webpack`: Webpack is highly configurable but requires more setup and configuration through a webpack.config.js file. This gives developers greater control over how assets are processed, optimized, and bundled.

- `Parcel`: Parcel follows a zero-config approach, meaning it requires minimal to no configuration. It automatically detects and bundles assets without extensive setup, making it simpler for beginners.

### Ease of Use:
- `Webpack`: While powerful, Webpack's configurability can be overwhelming for newcomers, and setting up loaders, plugins, and optimization can be time-consuming.

- `Parcel`: Parcel is designed for simplicity and ease of use. Its zero-config approach makes it quick to start with and is well-suited for small to medium projects without complex requirements.

### Features:
- `Webpack`: Webpack is extremely versatile and offers more advanced features like code splitting, dynamic imports, and fine-grained control over asset loading.

- `Parcel`: Parcel offers built-in features like a fast development server, automatic dependency resolution, and support for various asset types out of the box, which makes it great for rapid development.

### Customization:
- `Webpack`: The high level of customization in Webpack allows developers to tailor the build process to specific needs, but it can be more complex to set up and configure.

- `Parcel`: While it's less customizable than Webpack, Parcel's simplicity and zero-config approach make it suitable for projects where rapid development and simplicity are priorities.

### Use Cases:
- `Webpack`: Best suited for larger projects with complex requirements, multiple entry points, and intricate build processes that demand fine-tuning.

- `Parcel`: Ideal for smaller to medium-sized projects, prototypes, or beginners who want a straightforward setup without delving into extensive configuration.

## Q What is `.parcel-cache`?
A: The .parcel-cache directory is created by the Parcel bundler when it processes and builds your web project. It serves as a cache storage location to optimize the performance of subsequent builds.

## Q What is `npx`?
A: `npx` is a command-line tool that comes with npm (Node Package Manager) and is used to run Node.js packages. It's often used to execute packages that are not globally installed on your system. The primary purpose of npx is to make it easier to run packages without having to install them globally or clutter your project's dependencies.

### Run Parcel with npx:
Open your terminal and navigate to the root directory of your project. 
Run the following command using npx and specify parcel as the package name:
```
npx parcel index.html
```
## Q: What is difference between `dependencies` vs `devDependencies`?
A: Dependencies should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 

DevDependencies should contain modules/packages a developer needs during development.
such as, parcel, webpack, vite, mocha.

These packages are necessary only while you are developing your project, not necessary on production.

To save a dependency as a devDependency on installation we need to do, 
```
npm install --save-dev
```
instead of just,
```
npm install --save
```
## Q: What is `.gitignore`? What should we `add and not add` into it?
A: The `.gitignore` file is a text file that tells Git which files or folders to ignore in a project during commit to the repository.
`package-lock.json` should not add into your `.gitignore` file.

## Q: What is `Tree Shaking`?
A: `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

## Q: What is the difference between `package.json` and `package-lock.json`?
A: `package.json`:
* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.

## Q Read about: ^ - caret and ~ - tilde
A: In the context of versioning in software development, the caret (^) and tilde (~) symbols are used to specify version ranges for dependencies in files like package.json when working with package managers like npm or yarn.

`Caret (^)`:
When you use the caret symbol (^) in front of a version number, it indicates that you want to allow updates to the package as long as the major version remains the same. In semantic versioning (semver), versions are represented as MAJOR.MINOR.PATCH.

It will update you to all future minor/patch versions, without incrementing the major version.
`Tilde (~)`:
The tilde symbol (~) is used to specify a version range that allows updates to a package as long as the most recent version is within the same minor version range. In other words, it permits updates as long as the patch version is incremented.

It will update you to all future patch versions, without incrementing the minor version.

## Q: What is `node_modules` ? Is it a good idea to push that on git?
A: `node_modules` folder like a cache for the external modules that your project depends upon.
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.

## Q: What is the `dist` folder?
A: The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications.

## 
