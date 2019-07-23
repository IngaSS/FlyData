import axios from 'axios'


export default {
    state: {
        machines: [] // для отображения через апи
    },
    mutations: {
        updateMachines(state, machines) {
            state.machines = machines
        }   
    },
    actions: {
        changeState(context) {
            // setInterval(() => {
            //     axios.get('http://locallink.cybershell.net/stateofdevices').then((response) => {
            //   context.commit('updateMachines', response.data.data);
            // })
            // }, 3000);

            axios.get('http://192.168.200.115:8091/stateofdevices?t=20').then((response) => {
                context.commit('updateMachines', response.data.data);
            })
          }
    },
    getters: {
        machines(state) {
            return state.machines
        },
        machinesDetails(state) {
            return state.machinesDetails
        }
    }
}