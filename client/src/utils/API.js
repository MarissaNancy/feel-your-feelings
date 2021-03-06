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
signup: function (userdata){
    return axios.post("/api/users/sign-up", userdata);
},
login: function (userdata){
    return axios.post("/api/users/login", userdata);
},
getDrink: function(){
    return axios.get("/api/drinks");
},
//Gets the drink with the given
getDrinks: function(category){
    return axios.get("/api/drinks/" + category);
},
getSong: function(){
    return axios.get("/api/songs");
},
//Gets the drink with the given
getSongs: function(category){
    return axios.get("/api/songs/" + category);
}
};