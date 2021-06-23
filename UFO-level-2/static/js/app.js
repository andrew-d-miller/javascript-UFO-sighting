// Starter
var tableData = data;


// View available data fromt he data.js
console.log(tableData);


// Create References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");

// Create buttons for new var inputs
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("shape");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

console.log(columns);



// Input data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating event listener for the button
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // https://www.w3schools.com/jsref/jsref_tolowercase.asp
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();
    // console.log(inputCity)
    var inputState = inputFieldState.property("value").toLowerCase().trim();
    // console.log(inputState)
    // var inputCountry = inputFieldCountry.property("value").toLowerCase().trim();
    // var inputShape = inputFieldShape.property("value").toLowerCase().trim();
    

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    // console.log(filterDate)
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    // console.log(filterCity)
    var filterState = tableData.filter(tableData => tableData.state === inputState);
    // console.log(filterState)
    // var filterCountry = tableData.filter(tableData => tableData.country === inputCountry);
    // var filterShape = tableData.filter(tableData => tableData.shape === inputShape);

    var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);
    // console.log(filterCombinedData)
    // var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity && tableData.state === inputState && tableData.country === inputCountry && tableData.shape === inputShape);
    // var filterCombinedDateState = tableData.filter(tableData => tableData.datetime === inputDate && tableData.state === inputState);

    $tbody.html("");

    let response = {
        filterDate, filterCity, filterCombinedData
    }

    // let response = {
    //     filterDate, filterCity, filterCombinedData, filterState, filterCountry, filterShape
    // }

    // if(response.filterDate.length !== 0) {
    //     addData(filterDate);
    // }

    // Need to accommodate for combining multiple filters
    if(response.filterCombinedData.length !== 0) {
        addData(filterCombinedData);
    }

    // else if(response.filterCity.length !== 0){
    //     addData(filterCity);
    // }
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }

        else if(response.filterCombinedDateState.length === 0 && ((response.filterDate.length !== 0 || response.filterState.length !== 0))) {
            addData(filterDate) || addData(filterState);
        }

        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})