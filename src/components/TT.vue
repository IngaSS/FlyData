<template>
  <div class="table">
    <v-data-table
      :id="id"
      :devName="devName"
      :dateFrom="dateFrom"
      :pickerFrom="pickerFrom"
      :pickerTo="pickerTo"
      :dateTo="dateTo"
      :headers="headers"
      :items="details"
      :loading="show"
      sort-icon=""
      hide-actions
    >
      <template v-slot:items="props">
        <td @click="showDetails(id, devName, props.item.name)">{{ props.item.name }}</td>
        <td>{{ props.item.KPU }}</td>
        <td>{{ props.item.paid }}</td>
        <td>{{ props.item.notPaid }}</td>
        <td>{{ props.item.toAccount }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";
import DataTT1 from "../views/DataTT1";

export default {
  props: ["id", "dateFrom", "pickerFrom", "dateTo", "pickerTo", "devName"],
  components: {
    DataTT1
  },
  data: () => ({
    headers: [
      {
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "КПУ", value: "KPU" },
      { text: "Опл.", value: "paid" },
      { text: "Не опл.", value: "notPaid" },
      { text: "К учету", value: "toAccount" }
    ],
    show: true,
    details: []
    // type: 'Двойная'
  }),
  watch: {
    details() {
      this.show ? (this.show = false) : (this.show = true);
    }
  },
  methods: {
    showDetails(devId, devName, devType) {
      this.$router.push({
        name: "DataTT1",
        params: { Did: devId, name: devName, type: devType }
      }); // для отображения через АПИ
    },

    loadData(id, time = "") {
      axios
        .get(`http://192.168.200.115:8091/packingstat?id=${id}${time}`)
        .then(response => {
          let data = response.data.data;
          let single = Object.assign(
            {},
            {
              name: "Одинарная",
              KPU: data.single_comm_fit,
              paid: data.single_paid,
              notPaid: data.single_not_paid,
              toAccount: data.single_report
            }
          );
          let double = Object.assign(
            {},
            {
              name: "Двойная",
              KPU: data.double_comm_fit,
              paid: data.double_paid,
              notPaid: data.double_not_paid,
              toAccount: data.double_report
            }
          );
          this.details.push(single, double);
        });
    }
  },

  mounted() {
    this.loadData(this.id);
  },

  created() {
    eventBus.$on("chooseDate", data => {
      let dateFrom = data.date1;
      let dateTo = data.date2;
      let pickerFrom = data.picker1;
      let pickerTo = data.picker2;
      this.details.splice(0);
      let time = `&from=${dateFrom}%20${pickerFrom}:00&to=${dateTo}%20${pickerTo}:00`;
      this.loadData(this.id, time);
    });
    eventBus.$on("showAll", data => {
      let dateFrom = data.date1;
      let dateTo = data.date2;
      let pickerFrom = data.picker1;
      let pickerTo = data.picker2;
      this.details.splice(0);
      this.loadData(this.id);
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.DataTable:hover {
  text-decoration: none;
}

.table {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 1281px;
  margin-bottom: 7%;
}

.table table.v-table thead tr {
  height: 44px;
}

.table .v-datatable thead th.column.sortable {
  height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 3;
  letter-spacing: 3px;
  color: #858585;
}

.table table.v-table tbody td:not(:nth-child(1)) {
  padding-top: 15px;
}

.elevation-1 {
  box-shadow: none;
}

.table th {
  border: none;
}

.table table.v-table tbody td:first-child {
  text-align: center;
  color: #4a4a4a;
}

table.v-table tbody td:first-child {
  font-weight: 500;
  font-size: 16px;
  padding-top: 15px;
}

.theme--light.v-table thead tr:first-child {
  background-color: #f2f2f2;
}

@media screen and (max-width: 770px) {
  .tablePlusBtn {
    max-width: 100%;
  }
}
</style>
