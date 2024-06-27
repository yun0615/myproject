<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Fixed Left Column for Date and Weather -->
      <div class="fixed-left">
        <div class="date-weather">
          <span class="date">
            {{ date.year }}<br>
            年<br>
            {{ date.month }}<br>
            月<br>
            {{ date.day }}<br>日
          </span>
          <img :src="weather.icon" alt="weather">
          <span class="temperature">{{ weather.temp }}°</span>
        </div>
        <div class="icon-comp">
          <img src="@/assets/logo.png" alt="title">
        </div>
      </div>
      <!-- Main Content Grid -->
      <div class="main-content ml-auto">
        <div class="row">
          <div class="col-md-2" v-for="(section, indx) in sections" :key="indx">
            <div class="group-card" v-for="(area, areaIndx) in section" :key="`${indx}${areaIndx}`">
              <div class="group-icon">
                <template v-if="area.logo.length> 0">
                  <div class="group-icon-bak">
                    <img :src="area.logo" :alt="area.title">
                  </div>
                </template>
                <template v-else>
                  <div class="group-icon-empty" />
                </template>
              </div>
              <div class="group-content">
                <div v-if="area.totalPeople != -1" class="group-header"
                  :style="{ borderColor: area.color, backgroundColor: area.color }">
                  <div class="group-title">
                    <h4>{{ area.subTitle }}</h4>
                    <h4 class="group-v-title">{{ area.title }}</h4>
                  </div>
                  <div v-if="area.totalPeople >= 0" class="group-end">
                    <span>{{ area.totalPeople }}</span>
                    <p>人</p>
                  </div>
                </div>
                <div class="group-body" :style="{ borderColor: area.color,
                    minHeight: area.minHeight,
                    padding: (area.totalPeople == -1) ? '10px 15px' : '' }">
                  <table :width="`${(area.totalPeople == -1) ? '100%' : '80%'}`">
                    <template v-for="(item, itemIndx) in area.items">
                      <template v-for="(subItem, subKey, subIndx) in item.workshops">
                        <tr
                          :key="`${indx}${areaIndx}${itemIndx}${subIndx}`"
                          :style="{
                            borderBottom: (subIndx + 1 == Object.keys(item.workshops).length
                            && area.items.length > 1 && itemIndx + 1 != area.items.length)
                            ? `1px solid ${area.color}` : '0',
                          }">
                          <template v-if="subIndx == 0 && item.title.length > 0">
                            <td :rowspan="Object.keys(item.workshops).length"
                              class="group-body-title" valign="top"
                              :style="{ paddingTop: '10px', color: area.color }">
                              <span class="group-v-title">{{ item.title }}</span>
                              <br>
                              <span class="group-h-title">{{ item.total }}</span>
                              <br>
                              <span class="group-v-title">人</span>
                            </td>
                          </template>
                          <td class="group-body-text text-left">{{ subItem.workshop }}</td>
                          <td class="group-body-text text-right">
                            {{ subItem.count }}人
                          </td>
                        </tr>
                      </template>
                      <!-- <template v-if="item.title.length > 0">
                        <tr :key="`${indx}${areaIndx}${itemIndx}`">
                          <td class="group-body-title text-left">{{ item.title }}</td>
                          <td class="group-body-title text-right">
                            {{ item.total }}人
                          </td>
                        </tr>
                      </template> -->
                      <!-- <tr v-for="(subItem, subItemIndx) in item.workshops"
                        :key="`${indx}${areaIndx}${itemIndx}${subItemIndx}`">
                        <td class="group-body-text text-left">{{ subItem.workshop }}</td>
                        <td class="group-body-text text-right">
                          {{ subItem.count }}人
                        </td>
                      </tr> -->
                    </template>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import logo1 from '@/assets/area_logo/01.png';
import logo2 from '@/assets/area_logo/02.png';
import logo3 from '@/assets/area_logo/03.png';
import logo4 from '@/assets/area_logo/04.png';
import logo5 from '@/assets/area_logo/05.png';
import logo6 from '@/assets/area_logo/06.png';
import logo7 from '@/assets/area_logo/07.png';
import logo8 from '@/assets/area_logo/08.png';
import logo9 from '@/assets/area_logo/09.png';
import logo10 from '@/assets/area_logo/10.png';
import { GetWorkShopAPI, GetWeatherAPI } from '@/api/main';

export default {
  data() {
    const oneCardHeight = '360px';
    const twoCardHeight = '180px';
    return {
      sections: {
        '01四海文化村': {
          1: {
            id: 1,
            subTitle: '01',
            minHeight: oneCardHeight,
            title: '四海文化村',
            logo: logo1,
            color: '#D82E1C',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '02生命教育中心': {
          1: {
            id: 1,
            subTitle: '02',
            minHeight: oneCardHeight,
            title: '生命教育中心',
            logo: logo2,
            color: '#F3AAC1',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '03領導力發展中心': {
          1: {
            id: 1,
            subTitle: '03',
            minHeight: oneCardHeight,
            title: '領導力發展中心',
            logo: logo3,
            color: '#257E51',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '04探索教育中心': {
          1: {
            id: 1,
            subTitle: '04',
            minHeight: oneCardHeight,
            title: '探索教育中心',
            logo: logo4,
            color: '#6B6D2F',
            totalPeople: -2,
            items: [{
              title: '斥候工程組',
              workshops: {
                124101: { workshop: '', count: 0 },
                124102: { workshop: '', count: 0 },
                124103: { workshop: '', count: 0 },
                124104: { workshop: '', count: 0 },
                124105: { workshop: '', count: 0 },
                124106: { workshop: '', count: 0 },
                124107: { workshop: '', count: 0 },
              },
              total: 0,
            }, {
              title: '繩索挑戰組',
              workshops: {
                124201: { workshop: '', count: 0 },
                124202: { workshop: '', count: 0 },
                124203: { workshop: '', count: 0 },
                124204: { workshop: '', count: 0 },
                124205: { workshop: '', count: 0 },
                124206: { workshop: '', count: 0 },
                124207: { workshop: '', count: 0 },
                124208: { workshop: '', count: 0 },
                124209: { workshop: '', count: 0 },
                124210: { workshop: '', count: 0 },
                124211: { workshop: '', count: 0 },
              },
              total: 500,
            }],
          },
        },
        '05童軍魔法學院': {
          1: {
            id: 1,
            subTitle: '05',
            minHeight: oneCardHeight,
            title: '童軍魔法學院',
            logo: logo5,
            color: '#1B2C76',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '06科技城': {
          1: {
            id: 1,
            subTitle: '06',
            minHeight: oneCardHeight,
            title: '科技城',
            logo: logo6,
            color: '#85C0DB',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '07宗教村': {
          1: {
            id: 1,
            subTitle: '07',
            minHeight: twoCardHeight,
            title: '宗教村',
            logo: logo7,
            color: '#E5E141',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
          2: {
            id: 1,
            subTitle: '',
            minHeight: twoCardHeight,
            title: '展覽組',
            logo: '',
            color: '#00A0E9',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {
                121101: { workshop: '', count: 0 },
              },
              total: 0,
            }],
          },
        },
        '08地球發展村': {
          1: {
            id: 1,
            subTitle: '08',
            minHeight: oneCardHeight,
            title: '地球發展村',
            logo: logo8,
            color: '#118484',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '09特別活動中心': {
          1: {
            id: 1,
            subTitle: '09',
            minHeight: oneCardHeight,
            title: '特別活動中心',
            logo: logo9,
            color: '#EB6100',
            totalPeople: 0,
            items: [{
              title: '',
              workshops: {},
              total: 0,
            }],
          },
        },
        '09特別活動中心1': {
          1: {
            id: 1,
            subTitle: '',
            minHeight: oneCardHeight,
            title: '全營特別活動',
            logo: '',
            color: '#EB6100',
            totalPeople: -2,
            items: [{
              title: '認識好夥伴',
              workshops: {
                121111: { workshop: '', count: 0 },
                122222: { workshop: '', count: 0 },
                123333: { workshop: '', count: 0 },
                124444: { workshop: '', count: 0 },
                125555: { workshop: '', count: 0 },
              },
              total: 0,
            }, {
              title: '嘉年華遊行',
              workshops: {
                129999: { workshop: '', count: 0 },
              },
              total: 0,
            }],
          },
        },
        '10參觀旅行中心': {
          1: {
            id: 1,
            subTitle: '10',
            minHeight: oneCardHeight,
            title: '參觀旅行中心',
            logo: logo10,
            color: '#F8B62D',
            totalPeople: 0,
            items: [{
              title: '紅線',
              workshops: {
                121011: { workshop: '1車', count: 0 },
                121012: { workshop: '2車', count: 0 },
                121013: { workshop: '3車', count: 0 },
              },
              total: 0,
            }, {
              title: '橙線',
              workshops: {
                121021: { workshop: '4車', count: 0 },
                121022: { workshop: '5車', count: 0 },
                121023: { workshop: '6車', count: 0 },
                121024: { workshop: '7車', count: 0 },
              },
              total: 0,
            }, {
              title: '黃線',
              workshops: {
                121031: { workshop: '8車', count: 0 },
                121032: { workshop: '9車', count: 0 },
                121033: { workshop: '10車', count: 0 },
              },
              total: 0,
            }, {
              title: '綠線',
              workshops: {
                121041: { workshop: '11車', count: 0 },
                121042: { workshop: '12車', count: 0 },
              },
              total: 0,
            }],
          },
        },
        '12d': {
          1: {
            id: 1,
            minHeight: oneCardHeight,
            subTitle: '',
            title: '',
            logo: '',
            color: '#F8B62D',
            totalPeople: -1,
            items: [{
              title: '藍線',
              workshops: {
                121051: { workshop: '13車', count: 0 },
                121052: { workshop: '14車', count: 0 },
                121053: { workshop: '15車', count: 0 },
                121054: { workshop: '16車', count: 0 },
                121055: { workshop: '17車', count: 0 },
                121056: { workshop: '18車', count: 0 },
              },
              total: 0,
            }, {
              title: '紫線',
              workshops: {
                121061: { workshop: '19車', count: 0 },
                121062: { workshop: '20車', count: 0 },
                121063: { workshop: '21車', count: 0 },
                121064: { workshop: '22車', count: 0 },
                121065: { workshop: '23車', count: 0 },
                121066: { workshop: '24車', count: 0 },
              },
              total: 0,
            }, {
              title: '灰線',
              workshops: {
                121071: { workshop: '25車', count: 0 },
                121072: { workshop: '26車', count: 0 },
                121073: { workshop: '27車', count: 0 },
                121074: { workshop: '28車', count: 0 },
                121075: { workshop: '29車', count: 0 },
                121076: { workshop: '30車', count: 0 },
              },
              total: 0,
            }],
          },
        },
      },
      date: {
        year: parseInt(moment().format('YYYY'), 10) - 1911,
        month: moment().format('M'),
        day: moment().format('D'),
      },
      weather: {
        temp: 30,
        icon: 'https://openweathermap.org/img/wn/10d@2x.png',
      },
      intervalId: null,
    };
  },
  mounted() {
    this.fetchData();
    this.fetchWeather();
    this.intervalId = setInterval(this.fetchData, 3000);
  },
  beforeDestroy() {
    // 組件銷毀前清理定時器
    clearInterval(this.intervalId);
  },
  methods: {
    async fetchWeather() {
      try {
        const rs = await GetWeatherAPI();
        const { date, weater } = rs.data;
        const dateObj = moment(date);
        this.date.month = dateObj.format('M');
        this.date.day = dateObj.format('D');
        this.date.year = parseInt(dateObj.format('YYYY'), 10) - 1911;
        this.weather.temp = Math.round(rs.data.source.main.temp);
        this.weather.icon = `https://openweathermap.org/img/wn/${weater[0].icon}@2x.png`;
      } catch (err) {
        console.error(err);
      }
    },
    async fetchData() {
      try {
        const rs = await GetWorkShopAPI({ time: moment().format('YYYY-MM-DD HH:mm:ss') });
        const data = rs.data.workshops;
        Object.keys(this.sections).forEach((key) => {
          Object.keys(this.sections[key]).forEach((mainObj) => {
            const { items } = this.sections[key][mainObj];
            items.forEach((x) => {
              const y = x;
              Object.keys(x.workshops).forEach((idNo) => {
                if (Object.prototype.hasOwnProperty.call(data, idNo)) {
                  if (!idNo.startsWith('1210')) {
                    y.workshops[idNo].workshop = data[idNo].workshop_name;
                  }
                  y.workshops[idNo].count = data[idNo].count;
                  // y.workshops[idNo].count = data[idNo].count + Math.floor(Math.random() * 10);
                  delete data[idNo];
                } else {
                  delete y.workshops[idNo];
                }
              });
            });
          });
        });
        Object.keys(data).forEach((key) => {
          const mainData = data[key];
          const { items } = this.sections[mainData.workshop_area]['1'];
          items[0].workshops[mainData.workshop_username] = {
            workshop: mainData.workshop_name,
            count: mainData.count,
          };
        });
        Object.keys(this.sections).forEach((key) => {
          Object.keys(this.sections[key]).forEach((subKey) => {
            const mainObj = this.sections[key][subKey];
            const { items, totalPeople } = mainObj;
            items.forEach((x) => {
              const y = x;
              let total = 0;
              Object.keys(x.workshops).forEach((idNo) => {
                total += y.workshops[idNo].count;
              });
              y.total = total;
              if (totalPeople >= 0) {
                mainObj.totalPeople = y.total;
              }
            });
          });
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}

.container-fluid {
  padding: 0;
}

.fixed-left {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 100vh;
  color: #fff;
  font-size: 20px;
  background-color: #601986;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.date-weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.date {
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.5;
}

.icon {
  font-size: 2em;
}

.temperature {
  font-size: 1.2em;
}

.icon-comp {
  margin-bottom: 20px;
}

.icon-comp img {
  width: 60px;
}

.main-content {
  margin-left: 70px;
  margin-top: 20px;
  padding-left: 30px;
  width: calc(100% - 100px)
}

.group-header {
  color: #fff;
  font-size: 14px;
  float: left;
  position: relative;
  top: 20px;
  left: -10px;
  /* height: 80%; */
  /* min-height: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 10px 4px;
}

.group-end {
  margin-top: 20px;
}

.group-header h4 {
  letter-spacing: 0.2rem;
  font-size: 14px;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;
}

.group-h-title {
  writing-mode: horizontal-tb;
  text-orientation: mixed;
}

.group-v-title {
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.group-icon {
  position: relative;
  left: 30%;
  margin-bottom: -40px;
  text-align: center;
}

.group-icon-bak {
  background-color: #fff;
  box-shadow: 0px 4px 10px #afafaf;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group-icon-empty {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group-icon img {
  height: 90%;
  width: 90%;
  /* object-fit: cover;
  object-position: center; */
}

.group-body {
  padding-top: 54px;
  border: 2px solid;
  border-radius: 8px;
}

.group-body-text {
  font-size: 12px;
}

.group-footer {
  padding: 10px;
  text-align: right;
}

.group-body-title {
  font-size: 12px;
  font-weight: bold;
}
</style>
