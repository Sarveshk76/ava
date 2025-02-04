# Snapshot report for `test/config/integration.js`

The actual snapshot is saved in `integration.js.snap`.

Generated by [AVA](https://avajs.dev).

## works as expected when run from the package.json directory

> resolves test files from configuration

    [
      {
        file: 'dir-a/dir-a-base-1.js',
        title: 'test',
      },
      {
        file: 'dir-a/dir-a-base-2.js',
        title: 'test',
      },
    ]

## resolves tests from the package.json dir if none are specified on cli

> resolves test files from configuration

    [
      {
        file: '../dir-a/dir-a-base-1.js',
        title: 'test',
      },
      {
        file: '../dir-a/dir-a-base-2.js',
        title: 'test',
      },
    ]

## resolves tests from an .mjs config file

> resolves test files from configuration

    [
      {
        file: '../dir-a/dir-a-base-1.js',
        title: 'test',
      },
      {
        file: '../dir-a/dir-a-base-2.js',
        title: 'test',
      },
    ]

## use current working directory if `package.json` is not found

> resolves test files without configuration

    [
      {
        file: 'test.js',
        title: 'test name',
      },
    ]

## looks for config files outside of project directory

> resolves test files from configuration

    [
      {
        file: 'foo.js',
        title: 'foo',
      },
    ]
