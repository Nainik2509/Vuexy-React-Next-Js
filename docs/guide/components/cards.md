# Cards

## How to use Text Button inside a Card

::: warning
If you use text button, you must add `.card-action-dense` class along with `<CardActions>` component otherwise it will break the alignment.
:::

Here is the example of how to use the class mentioned above:

```jsx
<Card>
  <CardContent>...</CardContent>
  <CardActions className='card-action-dense'>
    <Button variant='text' color='primary'>
      Button
    </Button>
  </CardActions>
</Card>
```
