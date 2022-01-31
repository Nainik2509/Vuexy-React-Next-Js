const replace = require('replace-in-file')

const contentToReplace = [
  {
    files: '../../jsx-version/src/**/*.js',
    from: "import { __rest } from 'tslib'",
    to: ''
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: 'forwardRef((_a, ref)',
    to: 'forwardRef((props, ref)'
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: 'var props = __rest(_a, [])',
    to: ''
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: 'const props = __rest(_a, [])',
    to: ''
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: 'var {',
    to: 'const {'
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: /=== void 0/g,
    to: '=== undefined'
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: /=== void 0 ? void 0/g,
    to: '=== undefined ? null'
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: /void 0/g,
    to: 'null'
  },
  {
    files: '../../jsx-version/src/@fake-db/apps/calendar.js',
    from: /;/g,
    to: ''
  },
  {
    files: '../../jsx-version/src/**/*.js',
    from: new RegExp('// @ts-ignore', 'ig'),
    to: ''
  }
]

contentToReplace.forEach(replacement => replace.sync(replacement))

console.log('Replaced Unwanted Code')
