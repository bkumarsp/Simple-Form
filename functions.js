//function to find Average
const calculateAvg = marks => {
        var totalMarks = Number(marks.sub1) + Number(marks.sub2) + Number(marks.sub3) + Number(marks.sub4) + Number(marks.sub5);
        return totalMarks / 5;
    }
    //find user accurate Age using his Birthdate
const calculateAge = birthdate => {
    var today = new Date();
    return today.getFullYear() - birthdate.split('-')[0] - ((today.getMonth, today.getDay) < (birthdate.split('-')[1], birthdate.split('-')[2]));
}

const greetUser = userInfo => {
    var date = new Date();

    var greet = `<head> <title>Second Page</title> <style>#time{color: cyan;} body{background-color:  rgb(47, 95, 238); text-align: center; font-size: x-large; color: blue;} h1 {color: darkgreen;}  span{color: rgb(243, 7, 54)} strong{color: crimson;} #main{background-color:  rgb(71, 255, 184); width: 100%; height: 75%; margin-bottom: 0;} #header{background-color: rgb(245, 255, 108); width: 100%; height: 64px;} #footer{background-color:  goldenrod; width: 100%; height: 64px; text-align: left; padding: 0.5px; }  </style> </head>`;
    //above code adds title and styling
    greet += ` <div id = "header"> <h1> Hello ${userInfo.name}! </h1></div> `
    greet += "<hr>"
    greet += ` <div id = "main" > <p> You are <strong> ${userInfo.age} </strong>years old!</p> `
    greet += "<br>"
    greet += `Your Average Marks is: <span style = { color: red; }> ${userInfo.averageMarks}</span><hr></div> `
    greet += `<div id="footer"><h6>created by: <strong>Bharath Kumar S P</strong>,<span id="time">Date: ${date.toDateString()}, Time: ${date.toLocaleTimeString()}</span></h6></div>`

    return greet;
}

module.exports = { calculateAvg, calculateAge, greetUser };