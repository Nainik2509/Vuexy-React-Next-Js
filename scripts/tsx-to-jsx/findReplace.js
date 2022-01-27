const replace = require('replace-in-file')

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: "import { __rest } from 'tslib'",
  to: ''
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: 'forwardRef((_a, ref)',
  to: 'forwardRef((props, ref)'
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: 'var props = __rest(_a, [])',
  to: ''
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: 'const props = __rest(_a, [])',
  to: ''
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: 'var {',
  to: 'const {'
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: /=== void 0/g,
  to: '=== undefined'
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: /=== void 0 ? void 0/g,
  to: '=== undefined ? null'
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: /void 0/g,
  to: 'null'
})

replace.sync({
  files: '../../jsx-version/src/@fake-db/apps/calendar.js',
  from: /;/g,
  to: ''
})

replace.sync({
  files: '../../jsx-version/src/**/*.js',
  from: new RegExp('// @ts-ignore', 'ig'),
  to: ''
})

console.log('Replaced Unwanted Code')

// replace.sync({
//   files: '../../jsx-version/src/**/*.js',
//   from: /} = _a, rest =/g,
//   to: ',...rest }'
// })

// replace.sync({
//   files: '../../jsx-version/src/**/*.js',
//   from: '...rest } __rest(_a',
//   to: '...rest } = _a'
// })

// replace.sync({
//   files: '../../jsx-version/src/**/*.js',
//   from: /...rest } __rest(_a, [[a-z]])/,
//   to: ''
// })
