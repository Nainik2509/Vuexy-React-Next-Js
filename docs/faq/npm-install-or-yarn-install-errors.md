---
sidebarDepth: 0
---

# npm install or yarn install errors

Causes of npm install or yarn install issues can be due to various things which include:

- Missing or inappropriate dependencies like node or some other environmental issues
- Dependency resolved by package manager (npm/yarn) conflict with other installed dependency
- The dependency of the package we use have an internal issue or that dependency has some issue with your environment
- Package or dependency of the package requires some additional step or configuration to work in your environment
- Downloaded package is broken or is tampered with.

To resolve such installation issues:

- Please try downloading the fresh package/zip and performing the installation again.
- Please make sure you are using the LTS version of node which is recommended and not one with the latest features.
- run `yarn cache clean` or `npm cache clean`
- Try using yarn if possible (Recommended).

After following about steps still, you are getting the error please [raise support](/guide/getting-started/support.md) at our support portal with the below details:

- Your OS information, Node version, npm/yarn version, Template/Package version
- Mention if you can run a fresh react project using `create-next-app` without our template
- Attach log file of the error you are getting in your console (Provide full log)
- Mention which command you are running
- Mention If you have any other machine, are you able to run our template on that machine
