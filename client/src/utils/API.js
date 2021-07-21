import axios from "axios"

export default {
//Gets all moods
getMoods: function(){
    return axios.get("/api/moods");
},
getMood: function(id){
    
}


}