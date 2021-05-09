// Assign the data from `data.js`
var tableData = data;


// Select from html:
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event options
button.on("click", runEnter);
form.on("submit",runEnter);

// A function for the form
function runEnter() {
  d3.event.preventDefault();
  // Select the input datetime
  var inputDate = d3.select("#datetime");
  // Use only the value property to filter the table later
  var inputValue = inputDate.property("value");
  // Filter the data by input value
  var filterData = tableData.filter(ObsTable=>{
      // Match with data in table
    return ObsTable.datetime === inputValue });

    // Append every observation to the table
  var tbody = d3.select("tbody");
  filterData.forEach((ObsTable) => {
    var row = tbody.append("tr");
    Object.entries(ObsTable).forEach(([key, value]) => {
      let rowCell = row.append("td");
      rowCell.text(value);}
      );
  });
  

};