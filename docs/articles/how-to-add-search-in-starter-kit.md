# How to add Search in starter-kit

Search has been implemented in the full-version only. If you have started your project using the starter kit as per our suggestion, please follow the below steps in order to implement search functionality:

1. Copy `full-version/src/layouts/components/Autocomplete.tsx` and `full-version/src/layouts/components/autocompleteIconObj.ts` files and paste these files in the same path in the `starter-kit` folder

**Using fake-db**

2. Copy the `full-version/src/@fake-db/app-bar-search/index.ts` & `AppBarSearchType` type from the `full-version/src/@fake-db/types.ts` files and paste them into the same paths in the `starter-kit` folder

**Not using fake-db**

2. Update the `useEffect` hook (in which API is called using `axios`) according to the your requirement and also copy the `AppBarSearchType` type from the `full-version/src/@fake-db/types.ts` file & paste it in the `starter-kit/src/layouts/components/Autocomplete.tsx` file.

3. Import `starter-kit/src/layouts/components/Autocomplete.tsx` file in the `starter-kit/src/layouts/components/vertical/AppBarContent.tsx` and/or `starter-kit/src/layouts/components/horizontal/AppBarContent.tsx` file(s) and use it in whichever way you want.

And this is it. Enjoy searching in the template.
