import axios from 'axios'


export default {
    state: {
        devDatails: [] // для отображения через апи
    },
    mutations: {
        updateDetails(state, details) {
            // state.devDatails.splice(0)
            details.forEach(element => {
                state.devDatails.push(element)
            });
        }
    },
    actions: {
        changeDetailsState(context, id, time = '') {
            axios.get(`http://locallink.cybershell.net/packingstat?id=${id}${time}`)
                .then(response => {
                    let data = response.data.data;
                    const devDetails = [];
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
                    devDetails.push(single, double);
                    context.commit('updateDetails', devDetails)
                    console.log(devDetails);
                });
        }
    },
    getters: {
        devDatails(state) {
            console.log(state.devDatails)
            return state.devDatails
        },

        // dataDetails(state) {
        //     return state.dataDetails
        // }
    }
}