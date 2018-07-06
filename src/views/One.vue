<template>
  <div>
    <div>One charts here</div>
    <chart :data="[1, 8, 5, 4, 3, 0, 8, 4, 6, 5, 1, 3]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Chart from '@/components/Chart'

export default {
  name: 'One',

  components: {
    Chart
  }
}
</script>
