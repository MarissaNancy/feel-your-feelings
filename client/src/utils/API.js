import axios from "axios"

export default {
//Gets all moods
// getMoods: function(){
//     return axios.get("/api/moods");
// },
// //Gets the mood with the given id
// getMood: function(id){
//     return axios.get("/api/moods/" + id);
// },
//Gets the drink with the given
getDrink: function(category){
    return axios.get("/api/drinks/" + category);
}

}