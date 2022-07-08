---
sidebarDepth: 0
---

# Card Statistics

## Overview
We have create different version of card components to make it easier for you to show your statistics neatly.


## Card Statistics Horizontal

```jsx
// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Demo Components Imports
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

const Component = () => <CardStatisticsHorizontal stats='2,856' trend='negative' trendNumber='10.2%' title='New Customers' icon={<AccountOutline />} />
```

Result:

<img alt='card-stats-horizontal' class='medium-zoom' :src="$withBase('/images/components/card-stats-horizontal.png')" />

## Props

| Prop        | Type                                                           | Required | Description                                     |
| :-----------| :--------------------------------------------------------------|:---------| :-----------------------------------------------|
| title       | `string`                                                       |  yes     | Title of the card                               |
| color       | `primary`, `secondary`, `success`, `error`, `warning`, `info`  |  no      | Color of the avatar                             |
| icon        | `ReactNode`                                                    |  yes     | Icon of avatar                                  |
| stats       | `string`                                                       |  yes     | The stat number to show on card                 |
| trend       | `positive`, `negative`                                         |  no      | To change color of the trend according to value |
| trendNumber | `string`                                                       |  yes     | The percentage number to show above stats       |

## Card Statistics Vertical

```jsx
// ** Icons Imports
import LabelVariantOutline from 'mdi-material-ui/LabelVariantOutline'

// ** Demo Components Imports
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const Component = () => <CardStatisticsVertical stats='862' trend='negative' trendNumber='-18%' title='New Project' subtitle='Yearly Project'  icon={<LabelVariantOutline />} />
```

Result:

<img alt='card-stats-vertical' class='medium-zoom' :src="$withBase('/images/components/card-stats-vertical.png')" />

## Props

| Prop        | Type                                                           | Required | Description                                     |
| :-----------| :--------------------------------------------------------------|:---------| :-----------------------------------------------|
| title       | `string`                                                       |  yes     | Title of the card                               |
| subtitle    | `string`                                                       |  yes     | Subtitle of the card                            |
| color       | `primary`, `secondary`, `success`, `error`, `warning`, `info`  |  no      | Color of the avatar                             |
| icon        | `ReactNode`                                                    |  yes     | Icon of avatar                                  |
| stats       | `string`                                                       |  yes     | The stat number to show on card                 |
| trend       | `positive`, `negative`                                         |  no      | To change color of the trend according to value |
| trendNumber | `string`                                                       |  yes     | The percentage number to show above stats       |

## Card Statistics Image

```jsx
// ** Icons Imports
import LabelVariantOutline from 'mdi-material-ui/LabelVariantOutline'

// ** Demo Components Imports
import CardStatisticsImg from 'src/@core/components/card-statistics/card-stats-with-image'

const Component = () => <CardStatisticsImg stats='13.7k' title='Ratings' trendNumber='+38%' chipText='Year of 2021' src='/images/cards/pose_f9.png' />
```

Result:

<img alt='card-stats-img' class='medium-zoom' :src="$withBase('/images/components/card-stats-img.png')" />

## Props

| Prop        | Type                                                           | Required | Description                                     |
| :-----------| :--------------------------------------------------------------|:---------| :-----------------------------------------------|
| title       | `string`                                                       |  yes     | Title of the card                               |
| chipText    | `string`                                                       |  yes     | Label of the chip                               |
| chipColor   | `primary`, `secondary`, `success`, `error`, `warning`, `info`  |  no      | Color of the chip                               |
| src         | `string`                                                       |  yes     | Path of the img                                 |
| stats       | `string`                                                       |  yes     | The stat number to show on card                 |
| trend       | `positive`, `negative`                                         |  no      | To change color of the trend according to value |
| trendNumber | `string`                                                       |  yes     | The percentage number to show above stats       |