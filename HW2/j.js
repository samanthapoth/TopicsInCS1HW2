async function load(url, table){
    const tableBody = document.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    
    tableBody.innerHTML = "";

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
