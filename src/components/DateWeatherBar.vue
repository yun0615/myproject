<template>
  <div class="date-weather-bar">
    <b-container fluid>
      <b-row class="text-right">
        <b-col span="12" class="text-right">
          {{ year }} 年 {{ month }} 月 {{ day }} 日
          <b-icon icon="sun" />
          <span class="temperature-display">
            23<span class="degree-symbol">°C</span>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'DateWeatherBar',
  props: {
    msg: String,
  },
  data() {
    return {
      year: 112,
      month: 4,
      day: 1,
      temperature: 30,
    };
  },
};
</script>

<style scoped lang="scss">
.date-weather-bar {
  padding: 24px;
  font-size: 2rem;
}
.temperature-display {
  padding-left: 10px;
  display: inline-block;
}
.degree-symbol {
  font-size: 0.6em;
  vertical-align: super;
}
</style>
