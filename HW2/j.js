async function load(url, table){
    const tableBody = document.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    
    tableBody.innerHTML = "";

    // for loop that iterates through all 9 years of data supplies in the link. The for loop accesses each line of data and then accesses the year 
    // and population element in each line. The year and population data are then added to the table with each year and its corresponding population 
    // occupying a row. 
        for (i = data.data.length-1; i >= 0; i--) {
            const yearElement = document.createElement("td");
            yearElement.textContent = data.data[i].Year;
            const populationElement = document.createElement("td");
            populationElement.textContent = data.data[i].Population.toLocaleString();
            tableBody.appendChild(yearElement);
            tableBody.appendChild(populationElement);
            const rowElement = document.createElement("tr");
            tableBody.appendChild(rowElement);
        }
    }

load('https://datausa.io/api/data?drilldowns=Nation&measures=Population', document.querySelector("table"));
