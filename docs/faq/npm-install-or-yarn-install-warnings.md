---
sidebarDepth: 0
---

# npm install or yarn install warnings or installation warnings

You might get some warnings while running `npm install` or `yarn install` like below:

```bash
info fsevents@2.3.1: The platform "linux" is incompatible with this module.
info "fsevents@2.3.1" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "@vue/eslint-config-airbnb > eslint-import-resolver-webpack@0.13.0" has unmet peer dependency "webpack@>=1.11.0".
warning " > sass-loader@10.1.0" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
```

The warnings you are receiving while installing is from library/packages we used.

We always keep our packages up to date when we make major release. However, the writer of that package may use an older dependency that is no longer maintained for backward compatibility or any other code related issue. But, that's not an issue. Those packages will work fine with our template.

**Also, check if you're missing files staring with a dot(.eslintrc.json)**

Even if you like to try you can install this packages in fresh React project without our template and you will get the same.
