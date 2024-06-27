<template>
  <div class="main-block">
    <b-card no-body class="overflow-hidden border-0 shadow-none" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img :src="data.logo" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body class="p-0 pb-5">
            <b-card-title class="text-left">
              {{ data.title }}
              <div class="number-badge">{{ data.title_num }}</div>
            </b-card-title>
            <b-card-text>
              <b-list-group>
                <b-list-group-item v-for="(item, index) in data.items" :key="index"
                  class="custom-list-group-item d-flex justify-content-between align-items-center">
                  {{ item.name }}
                  <span class="price">{{ item.value }}人</span>
                </b-list-group-item>
              </b-list-group>
              <!-- <div v-for="(item, index) in data.child" :key="index">
                {{ item.name }} {{ item.value }}
              </div> -->
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  props: {
    data: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.custom-list-group-item {
  border: none !important;
  background-color: transparent !important;
  font-size: .7rem;
  padding: 0px;
}

.custom-list-group-item+.custom-list-group-item {
  border-top: none !important;
}

.custom-card {
  border: none o !important;
}

.number-badge {
  padding: 0.25em 0.5em;
}
</style>
