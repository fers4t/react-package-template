## React Package Template

A clean boilerplate for creating reusable packages in React.

### Installation

To install, simply clone the repository to your desired location.

### Usage

-  Click the `Use this template` button and clone the repository.
-  Run `pnpm i` in the root directory.
-  Code your desired functionality in the `/src` folder, remembering to export
   it in the `/src/index.ts` file.

### Development

Example folder structure:
```
-  react-package-template
-  your-app
```

-  Create a new React app in a separate folder (in this example, `your-app`).
-  Run `pnpm i` in your React app, specifying the path to the package with
   `pnpm i ../react-package-template`. This will include
   `react-package-template` in the `dependencies` section of `your-app`'s
   `package.json` file.
-  Run `pnpm watch` in the package directory to automatically build the package
   when code changes are made.
-  Run your React app to test the package live.

### Build

To build the package, run `pnpm run build` in the package directory.

### Release

To release the package, run `pnpm release` in the package directory.

### Features

-  npm release
-  commitlint

### TO-DO

-  Storybook integration
-  ...

## License

This project is licensed under the MIT License.
