alert("Welcome!")

// Starter Code
var tableData = data;


// View available data from data.js file
console.log(tableData);


// Create References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]




// Input data into HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating event listener for the button
// Setting up Filter Button for Date & City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // https://www.w3schools.com/jsref/jsref_tolowercase.asp
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    // var inputState = inputFieldState.property("value").toLowerCase().trim();
    // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    // var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // Top IF only works for filtering the date & City
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here... Keep Moving");
        }
})