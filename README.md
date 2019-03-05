# yes-admin-common


## Local build and publish

To build, run:

`npm run build`

Or, to create a clean build, run:

`npm run clean-build`

To make available to other local projects, run:

`npm link`

And in the referencing project folder, run:

`npm link @nickmorton/yes-admin-common`

To unlink, use

`npm unlink`

And in the referencing project folder, run:

`npm unlink @nickmorton/yes-admin-common`

To publish to npm, first log in to npm using:

`npm login`

Then publish package using:

`npm publish --access public`
