'use strict';

// REQUEST       HTTP
// Create        POST
// Read          GET
// Update        PUT/PATCH
// Delete        DELETE

// PUT replaces all values with new ones, PATCH replaces selected ones
// GET is only method we don't pass any variables in to

// STATUS CODE: 
// 100-199 -> informational response
// 200-299 -> successful response
// 300-399 -> redirect       (301 = moved permanently)
// 400-499 -> client errors  (404 - not found)
// 500-599 -> server errors  (500 - internal server error)

// const URL = "trainers.json";
// const URL2 = "https://pokeapi.co/api/v2/pokemon/ditto"

// fetch(URL)
// .then(function(response){
//     return response.json();
// })
// .then(function (data){
//     console.log(data);
// })
// .catch(function(err) {
//     console.error(err);
// })


// NEW VERSION - AXIOS
// axios.get(URL)
// .then(response => appendData(response.data))
// .catch(err => console.error(err));

// const appendData = (data) => {
//     let dataList = document.getElementById("dataDiv");
//     for(let i = 0; i < data.length; i++){
//         let trainer = document.createElement("div");
//         let id = document.createElement("card");
//         id.innerText = "ID" + data[i].userId;
//         trainer.appendChild(id);
//         let name = document.createElement("p");
//         name.innerText = "Name: " + data[i].name;
//         trainer.appendChild(name);
//         dataList.appendChild(trainer);
//     }
// }

const url = "https://reqres.in/api/users";

// fetch(url)
// .then(function(response){
//     return response.json();
// })
// .catch(function(err){
//     console.error(err);
// })
// .then(function(data){
//     console.log(data);
// })



axios.get(url)
.then(response => appendData(response.data))
.catch(err => console.error(err));

const appendData = (data) => {
    console.log(data.data);
    let subData = data.data;
    let dataList = document.getElementById("dataDiv");
    for(let i = 0; i< subData.length; i++){
        let person = document.createElement("div");
        let personID = document.createElement("p");
        //console.log(data[i]);
        personID.innerText = "ID: " + subData[i].id;
        console.log(personID.innerText);
        person.appendChild(personID);
        dataList.appendChild(person);

        let personEmail = document.createElement("p");
        personEmail.innerText = "Email: " + subData[i].email;
        person.appendChild(personEmail);
        dataList.appendChild(person);

    }
}


// axios.get(url)
// .then(response => console.log(response.data))
// .catch(err => console.error(err));
