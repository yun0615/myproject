<template>
  <div class="home">
    <date-weather-bar />
    <b-container fluid>
      <b-row>
        <b-col v-for="(item, index) in rows" :key="index" class="flex-fill">
          <main-block :data="item" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import DateWeatherBar from '@/components/DateWeatherBar.vue';
import MainBlock from '@/components/MainBlock.vue';

export default {
  name: 'HomeView',
  components: {
    DateWeatherBar,
    MainBlock,
  },
  data() {
    return {
      rows: [
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.rows = [];
      for (let i = 1; i <= 10; i += 1) {
        const ind = this.padStr(`${i}`, 2);
        const obj = {
          logo: 'https://picsum.photos/400/400/?image=20',
          title: `${ind} 四海文化村`,
          title_num: '300人',
          items: [],
        };
        for (let j = 1; j <= 20; j += 1) {
          obj.items.push({
            name: `客家文化村${j}`,
            value: 30,
          });
        }
        this.rows.push(obj);
      }
    },
    padStr(str, length) {
      const diff = length - str.length;
      if (diff <= 0) {
        return str;
      }
      return '0'.repeat(diff) + str;
    },
  },
};
</script>

<style scoped>
.flex-fill {
  flex: 0 0 20%;
  max-width: 20%;
}
</style>
