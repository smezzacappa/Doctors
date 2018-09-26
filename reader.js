var fs = require('fs');


// read the CSV file
fs.readFile("care_teams.csv", (err, data) => {
    //throw error is there is one
    if(err) throw err;
    //Take the data and replace new lines with commas, and then deliminate by comma and Console Log the data.
    var newArray = data.toString().replace(/\n/g, ",").split(',');
    var doctors = newArray.sort();


    removeDupes = (arr) => {
        let unique_array= [];
        for(let i = 0; i < arr.length; i++){
            if(unique_array.indexOf(arr[i]) == -1){
                unique_array.push(arr[i])
            }
        }
        return unique_array;
    }
   

    const masterList = (removeDupes(doctors));

    console.log(masterList);
});




