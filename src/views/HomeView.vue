<template>
<div class="container-fluid">
  <nav class="d-flex bg-light border-bottom justify-content-center">
    <ul class="nav nav-pills mb-2 mb-md-0">
      <button @click = "current='TopicView'" class="nav-link active">トピック</button>
      <button @click = "current='CalendarView'" class="nav-link">カレンダー</button>
      <button @click = "current='ChartView'" class="nav-link">チャート</button>
      <button @click = "current='DataView'" class="nav-link">データ</button>
      <li class="nav-item"><a href="#" class="nav-link">ニュース</a></li>
    </ul>
  </nav>
</div>
  <component v-bind:is="current"></component>
</template>

<script>
import TopicView from '../components/TopicView.vue'
import CalendarView from '../components/CalendarView.vue'
import ChartView from '../components/ChartView.vue'
import DataView from '../components/DataView.vue'

export default {
  name: 'HomeView',
  components: {
    TopicView,
    CalendarView,
    ChartView,
    DataView,
  },
  data(){
    return{
      current: 'TopicView',
    }
  }
}
</script>