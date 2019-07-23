<template>
  <div class="container-fluid">
    <div class="data">
      <HeaderForTTs :logo="this.logo" :color="this.color" />
      <BackBtn />
      <datePickers />
      <h3 class="devName">Упаковочная машина: {{this.$route.params.name}}</h3>
      <v-select
        class="filter"
        :items="['Все', 'Одинарная', 'Двойная']"
        v-model="type"
        color="lightgrey"
        suffix=""
      ></v-select>
      <v-data-table
        :headers="headers"
        :items="filteredItems"
        :pagination.sync="pagination"
        class="elevation-1 table detailsTbl"
        sort-icon=""
      >
        <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.date }}</td>
          <td>{{ props.item.type }}</td>
          <td>{{ props.item.remarks }}</td>
          <td>
            <v-icon small class="mr-2" @click="watchRecord(props.item.href)">videocam</v-icon>
          </td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import BackBtn from "../components/BackBtn";

import dataList from "../data.json";
import HeaderForTTs from "../components/HeaderForTTs";
import datePickers from "../components/datePickers";
import logo from "../images/Pack&Fly2.png";
import logoDom from "../images/logoDom4.svg";

export default {
  components: {
    HeaderForTTs,
    datePickers,
    BackBtn
  },
  data() {
    return {
      show: false,
      logoPF: logo,
      logo: logoDom,
      color: "#FC5601",
      pagination: {
        rowsPerPage: -1
      },
      type: this.$route.params.type,
      dataList: dataList,
      headers: [
        { align: "center", text: "Номер", value: "number" },
        { align: "center", text: "Дата", value: "date" },
        { align: "center", text: "Тип", value: "type" },
        { align: "center", text: "Комментарий", value: "comment" },
        { align: "center", text: "", value: "", sortable: false }
      ]
    };
  },
  methods: {
    watchRecord(item) {
      // надо сделать
    },
    showFilter() {
      !this.show ? (this.show = true) : (this.show = false);
      // this.show = true;
    }
  },
  computed: {
    filteredItems() {
      return this.dataList.filter(elem => {
        return this.type === "Все" ? this.dataList : elem.type === this.type;
      });
    }
  },
  mounted() {
    // axios
    //   .get(
    //     `http://locallink.cybershell.net/packingstat?id=${this.$route.params.Did}`
    //   )
    //   .then(response => {
    //     let data = response.data.data;
    //     let single = Object.assign(
    //       {},
    //       {
    //         name: "Одинарные",
    //         KPU: data.single_comm_fit,
    //         paid: data.single_paid,
    //         notPaid: data.single_not_paid,
    //         toAccount: data.single_report
    //       }
    //     );
    //     let double = Object.assign(
    //       {},
    //       {
    //         name: "Двойные",
    //         KPU: data.double_comm_fit,
    //         paid: data.double_paid,
    //         notPaid: data.double_not_paid,
    //         toAccount: data.double_report
    //       }
    //     );
    //     this.products.push(single, double);
    //   });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.data {
  text-align: -webkit-center;
  text-align: -moz-center;
}
.detailsTbl table.v-table tbody tr {
  text-align: -webkit-center;
}

.detailsTbl { 
  margin-top: 1%;
}

.filter {
  max-width: 1281px;
  position: sticky;
  top: 0;
  background-color: #f2f2f2;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}

.filter .v-input__slot {
  background-color: #f2f2f2;
}

.filter > .v-input__control {
  max-width: 60px;
  margin-left: 4%;
  opacity: 0.4;
}

.filter .v-input__slot {
  margin: 0;
}

.filter .v-select__selection--comma {
  margin: 7px 4px 7px 3px;
}

.filter .primary--text {
  color: black !important;
}

.filter .v-input__slot::before {
  display: none;
}

.filter > .v-messages__wrapper {
  display: none;
}

.filterBtn {
  height: 88px;
  width: 55px;
  margin: 0;
  padding: 0;
  border-radius: 50px;
  background-color: gray !important;
  position: fixed;
  top: 85%;
  left: 30px;
}

.filterBtn:hover,
.filterBtn:focus {
  position: fixed;
}

.filterBtn > .v-btn__content {
  max-width: 55px;
  color: white;
}

.filterBtn .material-icons {
  font-size: 44px;
}
</style>
