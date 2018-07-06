<template>
  <div
    ref="chartdiv"
    class="chart"
  />
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

let chart = null

export default {
  name: 'Chart',

  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },

  beforeDestroy () {
    chart && chart.dispose()
  },

  mounted () {
    chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

    chart.paddingTop = 0
    chart.paddingRight = 0
    chart.paddingBottom = 0
    chart.paddingLeft = 0

    let max = 1
    chart.data = this.data.map((data, index) => {
      max = data > max ? data : max
      return {
        column: index,
        value: data
      }
    })

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.renderer.disabled = true
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.grid.template.strokeOpacity = 0
    categoryAxis.renderer.ticks.template.disabled = true
    categoryAxis.dataFields.category = 'column'

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.disabled = true
    valueAxis.renderer.grid.template.location = 0
    valueAxis.renderer.grid.template.strokeOpacity = 0
    valueAxis.renderer.ticks.template.disabled = true
    valueAxis.tooltip.disabled = true
    valueAxis.min = 0
    valueAxis.max = max
    valueAxis.strictMinMax = true

    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.categoryX = 'column'
    series.dataFields.valueY = 'value'
    series.stroke = am4core.color('#3F51B5')
    series.fill = am4core.color('#3F51B5')
  }
}
</script>

<style scoped>
.chart {
  height: 180px;
  width: 320px;
}
</style>
