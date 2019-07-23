<template>
  <div class="container-fluid">
    <div class="wrapper">
      <HeaderForTTs :logo="this.logo" />
      <BackBtn />
      <div class="cont">
        <datePickers />
        <h3 class="devName">Упаковочная машина: Домодедово TT1</h3>
        <TT
          :id="130"
          :devName="'Домодедово TT1'"
          :dateFrom="this.dateFrom"
          :pickerFrom="this.pickerFrom"
          :pickerTo="this.pickerTo"
          :dateTo="this.dateTo"
        />
        <h3 class="devName">Упаковочная машина: Домодедово TT2</h3>
        <TT
          :id="131"
          :devName="'Домодедово TT2'"
          :dateFrom="this.dateFrom"
          :pickerFrom="this.pickerFrom"
          :pickerTo="this.pickerTo"
          :dateTo="this.dateTo"
        />
        <h3 class="devName">Упаковочная машина: Домодедово TT5</h3>
        <TT
          :id="132"
          :devName="'Домодедово TT5'"
          :dateFrom="this.dateFrom"
          :pickerFrom="this.pickerFrom"
          :pickerTo="this.pickerTo"
          :dateTo="this.dateTo"
        />
        <h3 class="devName">Упаковочная машина: Домодедово TT6</h3>
        <TT
          :id="133"
          :devName="'Домодедово TT6'"
          :dateFrom="this.dateFrom"
          :pickerFrom="this.pickerFrom"
          :pickerTo="this.pickerTo"
          :dateTo="this.dateTo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TT from "../components/TT";
import BackBtn from "../components/BackBtn";
import datePickers from "../components/datePickers";
import HeaderForTTs from "../components/HeaderForTTs";
import logo from "../images/Pack&Fly2.png";
import logoDom from "../images/logoDomn.svg";
export default {
  components: {
    TT,
    datePickers,
    HeaderForTTs,
    BackBtn
  },
  data: () => ({
    logoPF: logo,
    logo: logoDom,
    dateFrom: new Date(Date.parse(new Date()) - 2592000000)
      .toISOString()
      .substr(0, 10),
    dateTo: new Date().toISOString().substr(0, 10),
    pickerFrom: new Date().toLocaleTimeString().substr(0, 5),
    pickerTo: new Date().toLocaleTimeString().substr(0, 5)
  }),
};

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.container-fluid {
  padding: 0;
}

.wrapper {
  min-height: 1000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: -moz-center;
  text-align: -webkit-center;
}

.cont {
  background-color: #f2f2f2;
}

.devName {
  background-color: white;
  max-width: 1281px;
  min-height: 70px;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  font-size: 23px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 3;
  letter-spacing: 0.41px;
  color: #4a4a4a;
}

.tools > a > .v-btn__content {
  color: white;
}
</style>
