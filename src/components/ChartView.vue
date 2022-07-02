<template>
  <div class="container">
    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
                <SingleLineChart/>
            </div>
        </div>
        <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">Multiple Line Chart</h6>
                <canvas id="salse-revenue"></canvas>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleLineChart from './charts/SingleLineChart'
export default {
  name: 'ChartView',
  components: {
    SingleLineChart,
  },
}
</script>