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




// EXERCISES ---------------


const url = "https://reqres.in/api/users";

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
        let personIDStrong = document.createElement("h1");
        //console.log(data[i]);
        personIDStrong.innerText = "ID: " + subData[i].id;
        personID.appendChild(personIDStrong);
        console.log(personID.innerText);
        person.appendChild(personID);

        let personEmail = document.createElement("h4");
        personEmail.innerText = "Email: " + subData[i].email;
        person.appendChild(personEmail);
        
        let personName = document.createElement("p");
        let personNameUL = document.createElement("u");
        personNameUL.innerText = "Name: " + subData[i].first_name + " " + subData[i].last_name;
        personName.appendChild(personNameUL);
        person.appendChild(personName);

        let personImg = document.createElement("img");
        personImg.src = (`${subData[i].avatar}`);
        person.appendChild(personImg);

        let breakLine = document.createElement("hr");
        person.appendChild(breakLine);
        dataList.appendChild(person);
    }
}

// GET REQUEST

//1. GET request
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

//2. GET request for single user with ID: 2
fetch(url)
.then(function(response){
    return response.json();
})
.catch(function(err){
    console.error(err);
})
.then(function(data){
    let userDetails = data.data

    for (let i=0; i < userDetails.length; i++){
        if (userDetails[i].id == 2){
            console.log(userDetails[i]);
        }
    }
})

//3 POST request for 'Create'
// name with a value of "Morpheus"
// job with a value of "Leader"

fetch(url, {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "first_name": "Morpheus",
            "job" : "Leader"
        }
    )
}).then(response => response.json())
.then(data => console.log(`Request succeeded: ${JSON.stringify(data)}`))
.catch(error => console.log(`Request Failed: ${error}`));

//4 POST request for 'Register - Successful'
// email with a value of "eve.holt@reqres.inheus"
// password with a value of "pistol"

let url2 = "https://reqres.in/api/register";

fetch(url, {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "email": "eve.holt@reqres.inheus",
            "password": "pistol"
        }
    )
}).then(response => response.json())
.then(data => console.log(`Request succeeded ${JSON.stringify(data)}`))
.catch(error => console.log(`Request Failed: ${error}`));

//5 POST request for 'Login - Successful'
// email with a value of "eve.holt@reqres.inheus"
// password with a value of "cityslicka"
let loginURL = "https://reqres.in/api/login";

fetch(loginURL, {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "email": "eve.holt@reqres.inheus",
            "password": "cityslicka"
        }
    )
}).then(response => response.json())
.then(data => console.log(`Request succeeded ${JSON.stringify(data)}`))
.catch(error => console.log(`Request Failed: ${error}`));