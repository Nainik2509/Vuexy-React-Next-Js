# How to override layout

As explained in folder structure doc, layouts folder in the root of src is for users to override @core layouts. It is highly recommended to override layout instead of directly working with @core folder which will ease your updates to newer versions without facing any hassle of backing up your current code else it will override your changes in the @core folder each time you take an update.

## Override AppBar Content

- To override AppBar content, First we need to duplicate AppBarContent file from the @core folder.

### If you are using vertical menu layout, please follow below steps

1. Copy `AppBarContent.tsx|.jsx` file (According to the version you are using tsx/jsx) from `src/@core/layouts/components/appbar/vertical/AppBarContent.tsx|jsx`
2. Paste this file under `src/layout/components/appBar/vertical/AppBarContent.tsx|jsx`. It is not necessary to follow this exact path but this is just an example to manage files under layout folder for users.
3. Import this file in Vertical Layout found under `src/layouts/VerticalLayout.tsx|jsx` like following:

  ```js
   // ** AppBar & Components Imports
    import AppBarContent from 'layouts/components/appBar/vertical/AppBarContent'
  ```

4. Pass appBarContent as prop into vertical layout like following:

  ```js
  <Layout {...props} appBarContent={(props: any) => <AppBarContent {...props} />}>
    <Outlet />
  </Layout>
  ```

### If you are using horizontal menu layout, please follow below steps

1. Copy `AppBarContent.tsx|.jsx` file (According to the version you are using tsx/jsx) from `src/@core/layouts/components/appbar/horizontal/AppBarContent.tsx|jsx`
2. Paste this file under `src/layout/components/appBar/horizontal/AppBarContent.tsx|jsx`. It is not necessary to follow this exact path but this is just an example to manage files under layout folder for users.
3. Import this file in Vertical Layout found under `src/layouts/HorizontalLayout.tsx|jsx` like following:

  ```js
   // ** AppBar & Components Imports
    import AppBarContent from 'layouts/components/appBar/horizontal/AppBarContent'
  ```

4. Pass appBarContent as prop into horizontal layout like following

  ```js
  <Layout {...props} appBarContent={(props: any) => <AppBarContent {...props} />}>
    <Outlet />
  </Layout>
  ```

### Let's take an example of how to remove notifications dropdown from AppBar

1. Open `AppBarContent.tsx|.jsx` file that we just copied on this path `src/layout/components/appBar/horizontal/AppBarContent.tsx|jsx`
2. Remove notification components import like below

  ```js
    import NotificationDropdown from '@core/layouts/components/appBar/shared-components/NotificationDropdown'
  ```

3. Also, remove component render line

  ```js
    <NotificationDropdown />
  ```

Above steps should remove notification dropdown from the appbar.

### Let's take an example of removing a language & adding a new one in the language dropdown

