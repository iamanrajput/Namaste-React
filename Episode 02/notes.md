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
