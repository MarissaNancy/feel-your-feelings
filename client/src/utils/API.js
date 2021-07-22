// //axios.get/api/food

import axios from "axios";



export default {

    getMood: function (category) {
        return axios.get("api/moods", + category );
    },
};