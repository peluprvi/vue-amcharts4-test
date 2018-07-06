<template>
  <div>
    <div>Two charts here</div>
    <chart :data="[6, 2, 9, 10, 1, 3, 5, 0, 9, 7, 3, 5] " />
    <chart :data="[3, 2, 8, 7, 8, 10, 0, 0, 1, 7, 6, 6]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Chart'

export default {
  name: 'Home',

  components: {
    Chart
  }
}
</script>
