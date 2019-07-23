<template>
  <div class="date">
    <div class="postHead row">
      <h1 v-if="show" class="col-md-5 period">
        Значения за {{ month }}
        <span class="smallFont">(с 1го по текущее число)</span>
      </h1>
      <div class="col-md-1" v-if="show"></div>
      <div class="col datePickers">
        <h6 class="choose">Сделать выборку за период:</h6>
        <div class="datePickersGroup">
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="fullDate" readonly v-on="on" class="datePickerFrom"></v-text-field>
            </template>
            <v-date-picker class="datePickerItem" v-model="date1"></v-date-picker>
            <v-time-picker class="datePickerItem" v-model="picker1"></v-time-picker>
          </v-menu>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="fullDate2" readonly v-on="on" class="datePickerTo"></v-text-field>
            </template>
            <div class="pickersSec">
              <v-date-picker v-model="date2" class="datePickerItem"></v-date-picker>
              <v-time-picker v-model="picker2" class="datePickerItem"></v-time-picker>
            </div>
            <v-btn flat class="okBtn" color="primary" @click="chooseDate">OK</v-btn>
          </v-menu>
        </div>
      </div>
      <!-- <div class="col-md-3" v-if="!show"></div> -->
      <v-btn class="col backBtn" @click="showAll" v-if="!show">Вернуться к текущему месяцу</v-btn>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "DatePickers",
  data: () => ({
    date1: new Date(Date.parse(new Date()) - 2592000000)
      .toISOString()
      .substr(0, 10),
    menu1: false,
    picker1: new Date().toLocaleTimeString().substr(0, 5),
    picker2: new Date().toLocaleTimeString().substr(0, 5),
    // modal1: false,
    date2: new Date().toISOString().substr(0, 10),
    menu2: false,
    modal_2: false,
    show: true,
    month: new Date().toLocaleString("default", { month: "long" }).toUpperCase()
  }),
  methods: {
    showAll() {
      eventBus.$emit("showAll", {});
      this.show = true;
      this.date2 = new Date().toISOString().substr(0, 10);
      this.picker2 = new Date().toLocaleTimeString().substr(0, 5);
      // this.chooseDate();
    },

    chooseDate() {
      eventBus.$emit("chooseDate", {
        date1: this.date1,
        date2: this.date2,
        picker1: this.picker1,
        picker2: this.picker2
      });
      this.show = false;
      this.menu2 = false;
    }
  },
  computed: {
    fullDate() {
      return `${this.date1} ${this.picker1}`;
    },

    fullDate2() {
      return `${this.date2} ${this.picker2}`;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.postHead {
  margin: 0;
  margin-top: 2%;
  min-height: 55px;
}

.date {
  overflow: hidden;
  margin-top: 3%;
  margin-bottom: 5%;
  max-width: 1281px;
}

.period {
  text-align: left;
  padding: 0;
  /* max-width: 385px; */
  min-height: 25px;
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
}

.smallFont {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

.datePickerItem {
  min-height: 392px;
  text-align: right;
  box-shadow: none;
}

.choose {
  padding-right: 37px;
  max-width: 260px;
  height: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.5;
  letter-spacing: 1.71px;
  text-align: center;
  color: #4a4a4a;
}

.datePickersGroup .v-input input {
  width: 85px;
  font-family: "Roboto", sans-serif;
  height: 15px;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: 1.71px;
  text-align: center;
  color: #4a4a4a;
}

.datePickerItem > .v-picker__title {
  min-height: 102px;
}

.datePickers {
  display: flex;
  padding-right: 0;
  padding-left: 0;
}

.datePickerFrom:before,
.datePickerTo:before {
  content: "с";
  line-height: 1.5;
  margin-right: 16px;
  width: 9px;
  height: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 1.71px;
  text-align: center;
  color: #4a4a4a;
}

.datePickerTo:before {
  content: "по";
  margin-left: 10px;
}

.datePickersGroup {
  display: flex;
  max-width: 365px;
  min-width: 365px;
}

.backBtn {
  background-color: transparent !important;
  box-shadow: none !important;
  right: 0;
  max-width: 180px;
  padding: 0;
  margin: 6px 0;
}

.backBtn .v-btn__content {
  font-size: 9px;
}

.okBtn {
  margin: 0;
  width: 100%;
  background-color: white;
  padding: 0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 1),
    0px 2px 2px 0px rgba(0, 0, 0, 1), 0px 1px 5px 0px rgba(0, 0, 0, 0.7);
}
</style>
