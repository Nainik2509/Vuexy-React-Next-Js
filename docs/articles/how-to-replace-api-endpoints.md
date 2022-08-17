# How to replace API endpoints

In your app you would want to use the real APIs instead of one created with the FakeDB.

To replace the APIs with the real ones make sure you have created the API's in your backend & connected the API's with your database.

::: warning NOTE
If the structure of the data you receive from the API is different than ours then, you'll have to update the app structure too.

You can refer to the data structure in `src/fake-db/`folder.
:::


## Apps/Pages

Let's take the Invoice App as an example to replace the API.

Follow these steps to replace the API for the invoice app:

1. You can find the API usage for apps in `src/store/apps` folder & you can find API usage for pages in the folder for its respective pages.
2. In case of invoice open `src/store/apps/invoice/index.{ts|js}` and replace the API in `createAsyncThunk` function.
3. You can also use your editor to find the APIs in the whole template & replace them accordingly.


## Authentication

In the case of Authentication all the APIs used are located in `src/configs/auth.{ts|js}`. You won't have to find and replace the Authentication APIs, you can just replace the authentication APIs in the exported object.

