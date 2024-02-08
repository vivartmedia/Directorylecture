//fetch data from our random user API
//we will then store the user data into an array
//button to fetch the data on click
//we will then create buttons to iterrate up and down our array

//we'll need an ID for our created buttons to append to
//we'll need an ID to display our user's first and last name
// we'll to attach to our button that fetches our data

//Variables

//we'll need an empty array variable and then a variable to help us iterate thru our array, boolean to stop over usage of api end point

let username = document.getElementById('username');
let createBtnDiv = document.getElementById('createBtnDiv');
let getDataBtn = document.getElementById('getDataBtn');

let dataArray = [];
let counter = 1;
let apiEnd = true;

const apiCall = async () => {
    const promise = await fetch('https://random-data-api.com/api/v2/users');
    const data = await promise.json();
    dataArray.push(data);
}

getDataBtn.addEventListener('click', () => {
    if (apiEnd) {
        for (let i = 0; i < 5; i++) {
            apiCall();
        }
        createPrev();
        createNext();
        console.log(dataArray);
    }
    apiEnd = false;
});

const createPrev = () => {
    const prevbutton = document.createElement("button");
    prevbutton.textContent = "Prev";

    prevbutton.addEventListener('click', () => {
        counter--;

        if (counter < 0) {
            counter = 0
        } else {
            console.log(dataArray[counter].first_name + " " +  dataArray[counter].last_name);
        }
    });
    createBtnDiv.append(prevbutton);
}

const createNext = () => {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";

    nextButton.addEventListener('click', () => {
        counter++;

        if (counter > dataArray.length - 1) {
            counter = dataArray.length - 1;
        }
        console.log(dataArray[counter].first_name + " " +  dataArray[counter].last_name);

    })

    createBtnDiv.append(nextButton);
}