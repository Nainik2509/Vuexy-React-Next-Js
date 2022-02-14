# How to add ACL in starter-kit

Master uses [CASL](https://casl.js.org/v5/en/) for ACL. Follow these steps to integrate ACL in starter-kit:

**Note**: You must have Auth integrated to integrate the ACL. Refer [this](/articles/how-to-add-jwt-in-starter-kit) article to integrate Auth in starter-kit.

1. Copy `acl.ts` config file from `full-version/src/configs` to `starter-kit/src/configs`
2. Navigate to `_app.tsx`
3. Import `ACLGuard` from `src/@core/component/auth` folder.
4. Import `defaultACLObj` from `src/configs/acl`.
5. Create `aclAbilities` variable
```js
const aclAbilities = Component.acl ?? defaultACLObj
```
6. Wrap your `getLayout` function with `ACLGuard`

```jsx
<AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
  {getLayout(<Component {...pageProps} />)}
</AclGuard>
``` 
7. Replace the acl folder in `src/layouts/components` with the one in  `full-version/src/layouts/components`
8. Add `action` & `subject` in navigation.
```js
{
  title: 'Second Page',
  icon: EmailOutline,
  path: '/second-page',
  action: 'read',
  subject: 'second-page'
}
``` 
9. Add `action` & `subject` in component file.
```js
SecondPage.acl = {
  action: 'read',
  subject: 'second-page'
}
```
10. Replace the homePage in `pages/index.tsx` file.
11. Finally Replace the subject if necessary in `src/configs/acl.ts` file.