async function load(url, table){
    const tableHead = document.querySelector("thead");
    const tableBody = document.querySelector("tbody");
    const response = await fetch(url);
    const data = await response.json();
    
   // tableHead.innerHTML = "<tr></tr>";
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


//for (const YearText of Year) {
  //  const headerElement = document.createElement("th");
    //headerElement.textContent = YearText;
    //tableHead.querySelector("tr").appendChild(headerElement);



load('https://datausa.io/api/data?drilldowns=Nation&measures=Population', document.querySelector("table"));
