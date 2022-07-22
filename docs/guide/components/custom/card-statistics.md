# Card Statistics

## Overview

We have create different version of card components to make it easier for you to show your statistics neatly.

## Card Statistics Horizontal

```jsx
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

const Component = () => (
  <CardStatisticsHorizontal
    stats='2,856'
    trend='negative'
    trendNumber='10.2%'
    title='New Customers'
    icon={<AccountOutline />}
  />
)

export default Component
```

Result:

<img alt='card-stats-horizontal' class='medium-zoom' :src="$withBase('/images/components/card-stats-horizontal.png')" />

### Props

| Prop        | Type                                                          | Required | Description                                         |
| :---------- | :------------------------------------------------------------ |:-------- | :-------------------------------------------------- |
| title       | `string`                                                      | Yes      | Title of the card                                   |
| color       | `primary`, `secondary`, `success`, `error`, `warning`, `info` | No       | Color of the icon inside the avatar                 |
| icon        | `ReactNode`                                                   | Yes      | Icon inside the avatar                              |
| stats       | `string`                                                      | Yes      | The statistic number on the card                    |
| trend       | `positive`, `negative`                                        | No       | To show the change in numbers than previous numbers |
| trendNumber | `string`                                                      | Yes      | To show the difference in numbers                   |

## Card Statistics Vertical

```jsx
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const Component = () => (
  <CardStatisticsVertical
    stats='862'
    trend='negative'
    trendNumber='-18%'
    title='New Project'
    subtitle='Yearly Project'
    icon={<BriefcaseVariantOutline />}
    optionsMenuProps={{ options: ['Refresh', 'Share', 'Update'] }}
  />
)

export default Component
```

Result:

<img alt='card-stats-vertical' class='medium-zoom' :src="$withBase('/images/components/card-stats-vertical.png')" />
<img alt='card-stats-vertical' class='medium-zoom' :src="$withBase('/images/components/card-stats-vertical-2.png')" />

### Props

| Prop             | Type                                                                 | Required | Description                                         |
| :--------------- | :------------------------------------------------------------------- |:-------- | :-------------------------------------------------- |
| title            | `string`                                                             | Yes      | Title of the card                                   |
| subtitle         | `string`                                                             | Yes      | Subtitle of the card                                |
| color            | `primary`, `secondary`, `success`, `error`, `warning`, `info`        | No       | Color of the avatar                                 |
| icon             | `ReactNode`                                                          | Yes      | Icon inside the avatar                              |
| stats            | `string`                                                             | Yes      | The statistic number on the card                    |
| trend            | `positive`, `negative`                                               | No       | To show the change in numbers than previous numbers |
| trendNumber      | `string`                                                             | Yes      | To show the difference in numbers                   |
| optionsMenuProps | [`OptionsMenuType`](/guide/components/custom/option-menu.html#props) | No       | Options to render in the more options menu          |

## Card Statistics Image

```jsx
import CardStatisticsImg from 'src/@core/components/card-statistics/card-stats-with-image'

const Component = () => (
  <CardStatisticsImg
    src='...'
    stats='13.7k'
    title='Ratings'
    trendNumber='+38%'
    chipText={`Year of ${new Date().getFullYear()}`}
  />
)

export default Component
```

Result:

<img alt='card-stats-img' class='medium-zoom' :src="$withBase('/images/components/card-stats-img.png')" />

### Props

| Prop        | Type                                                          | Required | Description                                         |
| :---------- | :------------------------------------------------------------ |:-------- | :-------------------------------------------------- |
| title       | `string`                                                      | Yes      | Title of the card                                   |
| chipText    | `string`                                                      | Yes      | Label of the chip                                   |
| chipColor   | `primary`, `secondary`, `success`, `error`, `warning`, `info` | No       | Color of the chip                                   |
| src         | `string`                                                      | Yes      | Path of the image                                   |
| stats       | `string`                                                      | Yes      | The statistic number on the card                    |
| trend       | `positive`, `negative`                                        | No       | To show the change in numbers than previous numbers |
| trendNumber | `string`                                                      | Yes      | To show the difference in numbers                   |
