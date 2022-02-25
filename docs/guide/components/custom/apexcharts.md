---
sidebarDepth: 0
---

# Apexcharts

## Overview

You may visit [React Apexcharts Docs](https://apexcharts.com/docs/react-charts/) for a proper explanation of how to use it.

We have created an Apexcharts wrapper that dynamically returns the apexcharts component from the `react-apexcharts` package so that you don't have to do it manually all the time you use it.

## Usage

You can create your chart as it is in the [React Apexcharts Docs](https://apexcharts.com/docs/react-charts/) but make sure that you do not import the `react-apexcharts` package but instead add `import ReactApexcharts from 'src/@core/components/react-apexcharts'` import statement.

Let us take an example of a line chart:

<code-group>
<code-block title="TSX" active>
```tsx
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const ApexLineChart = () => {
  const options: ApexOptions = {
    ...
  }

  const series = [...]

  return <ReactApexcharts options={options} series={series} type='line' height={400} />
}

export default ApexLineChart
```
</code-block>

<code-block title="JSX">
```jsx
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const ApexLineChart = () => {
  const options = {
    ...
  }

  const series = [...]

  return <ReactApexcharts options={options} series={series} type='line' height={400} />
}

export default ApexLineChart
```
</code-block>
</code-group>
