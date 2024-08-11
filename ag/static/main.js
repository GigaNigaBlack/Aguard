

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("neo-table-body");
    const paginationButtonsContainer = document.querySelectorAll(".pagination-button");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");
    prevButton.addEventListener("click", () => changePage(-1));
    nextButton.addEventListener("click", () => changePage(1));
   
  
    // Rest of your code...

    // Define the data directly in the JavaScript code
    const data = [
        {
          "ID": 1,
          "Object Designation": "2023VD3",
          "Diameter in m": 264.00,
          "Impact Probability": 0.0025800,
          "PS max": -2.6500000,
          "Velocity": 21.01,
          "Impact time": "Wed, 08 Nov 2034 17:09:00"
        },
        {
          "ID": 2,
          "Object Designation": "1979XB",
          "Diameter in m": 360000.00,
          "Impact Probability": 0.0002300,
          "PS max": -2.8400000,
          "Velocity": 27.54,
          "Impact time": "Tue, 12 Dec 2056 21:38:00"
        },
        {
          "ID": 3,
          "Object Designation": "2008JL3",
          "Diameter in m": 1150.00,
          "Impact Probability": 0.0001500,
          "PS max": -2.9200000,
          "Velocity": 14.01,
          "Impact time": "Sat, 01 May 2027 09:05:00"
        },
        {
          "ID": 4,
          "Object Designation": "2000SG344",
          "Diameter in m": 1620.00,
          "Impact Probability": 0.0008900,
          "PS max": -3.1900000,
          "Velocity": 11.27,
          "Impact time": "Wed, 16 Sep 2071 00:54:00"
        },
        {
          "ID": 5,
          "Object Designation": "2005QK76",
          "Diameter in m": 1200.00,
          "Impact Probability": 0.0000300,
          "PS max": -3.4800000,
          "Velocity": 22.66,
          "Impact time": "Tue, 26 Feb 2030 08:15:00"
        },
        {
          "ID": 6,
          "Object Designation": "2023DO",
          "Diameter in m": 1050.00,
          "Impact Probability": 0.0004900,
          "PS max": -3.5200000,
          "Velocity": 13.18,
          "Impact time": "Fri, 23 Mar 2057 19:43:00"
        },
        {
          "ID": 7,
          "Object Designation": "2021GX9",
          "Diameter in m": 1150.00,
          "Impact Probability": 0.0000500,
          "PS max": -3.5600000,
          "Velocity": 20.17,
          "Impact time": "Fri, 16 Apr 2032 21:51:00"
        },
        {
          "ID": 8,
          "Object Designation": "2007KE4",
          "Diameter in m": 1200.00,
          "Impact Probability": 0.0000400,
          "PS max": -3.5700000,
          "Velocity": 15.03,
          "Impact time": "Sat, 26 May 2029 00:18:00"
        },
        {
          "ID": 9,
          "Object Designation": "2019VB37",
          "Diameter in m": 2400.00,
          "Impact Probability": 0.0000600,
          "PS max": -3.6700000,
          "Velocity": 18.34,
          "Impact time": "Mon, 26 Apr 2049 01:30:00"
        },
        {
          "ID": 10,
          "Object Designation": "2016YM4",
          "Diameter in m": 18000.00,
          "Impact Probability": 0.0000100,
          "PS max": -3.6800000,
          "Velocity": 22.03,
          "Impact time": "Sun, 20 Jul 2121 19:20:00"
        },
        {
          "ID": 11,
          "Object Designation": "2011DU9",
          "Diameter in m": 324.00,
          "Impact Probability": 0.0006800,
          "PS max": -3.7200000,
          "Velocity": 14.21,
          "Impact time": "Fri, 23 Feb 2046 20:44:00"
        },
        {
          "ID": 12,
          "Object Designation": "2012QD8",
          "Diameter in m": 8400.00,
          "Impact Probability": 0.0000100,
          "PS max": -3.7300000,
          "Velocity": 23.58,
          "Impact time": "Fri, 08 Mar 2047 23:22:00"
        },
        {
          "ID": 13,
          "Object Designation": "2018JD",
          "Diameter in m": 377.00,
          "Impact Probability": 0.0012700,
          "PS max": -3.7700000,
          "Velocity": 13.76,
          "Impact time": "Sun, 08 May 2067 13:21:00"
        },
        {
          "ID": 14,
          "Object Designation": "2020VV",
          "Diameter in m": 220.00,
          "Impact Probability": 0.0020100,
          "PS max": -3.7800000,
          "Velocity": 11.47,
          "Impact time": "Tue, 11 Oct 2050 10:13:00"
        },
        {
          "ID": 15,
          "Object Designation": "2017AE21",
          "Diameter in m": 2100.00,
          "Impact Probability": 0.0000100,
          "PS max": -3.8100000,
          "Velocity": 12.17,
          "Impact time": "Sat, 10 May 2025 04:56:00"
        },
        {
          "ID": 16,
          "Object Designation": "2022YO1",
          "Diameter in m": 16.80,
          "Impact Probability": 0.0004100,
          "PS max": -3.9000000,
          "Velocity": 18.25,
          "Impact time": "Tue, 17 Dec 2024 06:20:00"
        },
        {
          "ID": 17,
          "Object Designation": "2024JW16",
          "Diameter in m": 68000.00,
          "Impact Probability": 0.0000010,
          "PS max": -3.9200000,
          "Velocity": 26.50,
          "Impact time": "Wed, 09 Dec 2116 08:38:00"
        },
        {
          "ID": 18,
          "Object Designation": "2022UY14",
          "Diameter in m": 1560.00,
          "Impact Probability": 0.0000300,
          "PS max": -3.9300000,
          "Velocity": 23.23,
          "Impact time": "Tue, 28 Apr 2043 22:24:00"
        },
        {
          "ID": 19,
          "Object Designation": "2014CR13",
          "Diameter in m": 760.00,
          "Impact Probability": 0.0003600,
          "PS max": -4.0000000,
          "Velocity": 16.61,
          "Impact time": "Sat, 11 Feb 2108 19:52:00"
        },
        {
          "ID": 20,
          "Object Designation": "2021EU",
          "Diameter in m": 1100.00,
          "Impact Probability": 0.0000400,
          "PS max": -4.0300000,
          "Velocity": 23.98,
          "Impact time": "Tue, 29 Aug 2056 02:46:00"
        },
        {
          "ID": 21,
          "Object Designation": "2008FF5",
          "Diameter in m": 8400.00,
          "Impact Probability": 0.0000010,
          "PS max": -4.0300000,
          "Velocity": 41.02,
          "Impact time": "Sat, 27 Mar 2060 18:06:00"
        },
        {
          "ID": 22,
          "Object Designation": "2006JY26",
          "Diameter in m": 72.00,
          "Impact Probability": 0.0063700,
          "PS max": 0E-7,
          "Velocity": 11.57,
          "Impact time": "Thu, 03 May 2074 00:47:00"
        },
        {
          "ID": 23,
          "Object Designation": "2020VW",
          "Diameter in m": 2000.00,
          "Impact Probability": 0.0000200,
          "PS max": -3.9200000,
          "Velocity": 30.16,
          "Impact time": "Mon, 29 Nov 2042 23:15:00"
        },
        {
          "ID": 24,
          "Object Designation": "2015HX1",
          "Diameter in m": 460.00,
          "Impact Probability": 0.0005500,
          "PS max": -3.9600000,
          "Velocity": 19.72,
          "Impact time": "Sat, 13 Jun 2091 21:22:00"
        },
        {
          "ID": 25,
          "Object Designation": "2012HX",
          "Diameter in m": 320.00,
          "Impact Probability": 0.0019000,
          "PS max": -3.9900000,
          "Velocity": 17.89,
          "Impact time": "Mon, 12 Jul 2035 14:43:00"
        },
        {
          "ID": 26,
          "Object Designation": "2020BE2",
          "Diameter in m": 800.00,
          "Impact Probability": 0.0000800,
          "PS max": -4.0000000,
          "Velocity": 15.57,
          "Impact time": "Thu, 16 Nov 2079 05:32:00"
        },
        {
          "ID": 27,
          "Object Designation": "2016VZ4",
          "Diameter in m": 410.00,
          "Impact Probability": 0.0000400,
          "PS max": -4.0200000,
          "Velocity": 13.82,
          "Impact time": "Sun, 22 Oct 2038 08:21:00"
        },
        {
          "ID": 28,
          "Object Designation": "2022JU4",
          "Diameter in m": 620.00,
          "Impact Probability": 0.0001500,
          "PS max": -4.0500000,
          "Velocity": 22.39,
          "Impact time": "Mon, 10 Jul 2043 23:53:00"
        },
        {
          "ID": 29,
          "Object Designation": "2019LY2",
          "Diameter in m": 950.00,
          "Impact Probability": 0.0000200,
          "PS max": -4.0600000,
          "Velocity": 19.74,
          "Impact time": "Thu, 15 Jun 2082 11:09:00"
        },
        {
          "ID": 30,
          "Object Designation": "2023ND5",
          "Diameter in m": 2400.00,
          "Impact Probability": 0.0000050,
          "PS max": -4.0700000,
          "Velocity": 16.45,
          "Impact time": "Tue, 23 Nov 2051 03:22:00"
        },
        {
          "ID": 31,
          "Object Designation": "2020DA5",
          "Diameter in m": 750.00,
          "Impact Probability": 0.0001000,
          "PS max": -4.0900000,
          "Velocity": 14.88,
          "Impact time": "Fri, 27 May 2037 09:04:00"
        },
        {
          "ID": 32,
          "Object Designation": "2018LR1",
          "Diameter in m": 890.00,
          "Impact Probability": 0.0000700,
          "PS max": -4.1000000,
          "Velocity": 22.27,
          "Impact time": "Wed, 11 Mar 2044 20:30:00"
        },
        {
          "ID": 33,
          "Object Designation": "2021BM8",
          "Diameter in m": 280.00,
          "Impact Probability": 0.0001200,
          "PS max": -4.1100000,
          "Velocity": 16.96,
          "Impact time": "Tue, 30 Aug 2031 06:15:00"
        },
        {
          "ID": 34,
          "Object Designation": "2019SA5",
          "Diameter in m": 610.00,
          "Impact Probability": 0.0000600,
          "PS max": -4.1200000,
          "Velocity": 20.11,
          "Impact time": "Sun, 04 Jun 2065 23:48:00"
        },
        {
          "ID": 35,
          "Object Designation": "2021LQ2",
          "Diameter in m": 320.00,
          "Impact Probability": 0.0001500,
          "PS max": -4.1300000,
          "Velocity": 17.60,
          "Impact time": "Sat, 10 Feb 2087 16:23:00"
        },
        {
          "ID": 36,
          "Object Designation": "2017AM1",
          "Diameter in m": 1500.00,
          "Impact Probability": 0.0000800,
          "PS max": -4.1400000,
          "Velocity": 14.25,
          "Impact time": "Wed, 27 Sep 2069 09:50:00"
        },
        {
          "ID": 37,
          "Object Designation": "2018HZ1",
          "Diameter in m": 540.00,
          "Impact Probability": 0.0001300,
          "PS max": -4.1500000,
          "Velocity": 12.94,
          "Impact time": "Tue, 23 Jul 2049 01:34:00"
        },
        {
          "ID": 38,
          "Object Designation": "2021QD6",
          "Diameter in m": 1200.00,
          "Impact Probability": 0.0000200,
          "PS max": -4.1600000,
          "Velocity": 21.70,
          "Impact time": "Thu, 15 Dec 2074 06:01:00"
        },
        {
          "ID": 39,
          "Object Designation": "2019DM4",
          "Diameter in m": 890.00,
          "Impact Probability": 0.0000700,
          "PS max": -4.1700000,
          "Velocity": 20.39,
          "Impact time": "Mon, 22 Oct 2035 14:55:00"
        },
        {
          "ID": 40,
          "Object Designation": "2023GW8",
          "Diameter in m": 620.00,
          "Impact Probability": 0.0001000,
          "PS max": -4.1800000,
          "Velocity": 16.70,
          "Impact time": "Tue, 20 Jun 2034 12:00:00"
        },
        {
          "ID": 41,
          "Object Designation": "2022PX3",
          "Diameter in m": 280.00,
          "Impact Probability": 0.0000900,
          "PS max": -4.1900000,
          "Velocity": 23.45,
          "Impact time": "Wed, 07 Nov 2037 15:32:00"
        },
        {
          "ID": 42,
          "Object Designation": "2019WZ6",
          "Diameter in m": 930.00,
          "Impact Probability": 0.0000400,
          "PS max": -4.2000000,
          "Velocity": 17.21,
          "Impact time": "Sat, 25 Dec 2085 01:43:00"
        },
        {
          "ID": 43,
          "Object Designation": "2023HZ1",
          "Diameter in m": 1900.00,
          "Impact Probability": 0.0000150,
          "PS max": -4.2100000,
          "Velocity": 14.98,
          "Impact time": "Mon, 16 Oct 2076 05:20:00"
        },
        {
          "ID": 44,
          "Object Designation": "2021FA5",
          "Diameter in m": 650.00,
          "Impact Probability": 0.0000700,
          "PS max": -4.2200000,
          "Velocity": 21.64,
          "Impact time": "Sun, 22 May 2055 09:25:00"
        },
        {
          "ID": 45,
          "Object Designation": "2020LR3",
          "Diameter in m": 1300.00,
          "Impact Probability": 0.0000600,
          "PS max": -4.2300000,
          "Velocity": 23.89,
          "Impact time": "Tue, 13 Dec 2070 20:43:00"
        },
        {
          "ID": 46,
          "Object Designation": "2017RD1",
          "Diameter in m": 570.00,
          "Impact Probability": 0.0000500,
          "PS max": -4.2400000,
          "Velocity": 15.75,
          "Impact time": "Fri, 26 Nov 2033 10:21:00"
        },
        {
          "ID": 47,
          "Object Designation": "2018XB2",
          "Diameter in m": 330.00,
          "Impact Probability": 0.0000800,
          "PS max": -4.2500000,
          "Velocity": 16.89,
          "Impact time": "Sun, 10 Aug 2059 04:32:00"
        },
        {
          "ID": 48,
          "Object Designation": "2020MZ3",
          "Diameter in m": 460.00,
          "Impact Probability": 0.0000400,
          "PS max": -4.2600000,
          "Velocity": 14.45,
          "Impact time": "Sat, 12 Mar 2083 21:03:00"
        },
        {
          "ID": 49,
          "Object Designation": "2023LP7",
          "Diameter in m": 780.00,
          "Impact Probability": 0.0000900,
          "PS max": -4.2700000,
          "Velocity": 22.30,
          "Impact time": "Thu, 09 Sep 2042 02:50:00"
        },
        {
          "ID": 50,
          "Object Designation": "2019PH8",
          "Diameter in m": 300.00,
          "Impact Probability": 0.0000300,
          "PS max": -4.2800000,
          "Velocity": 11.92,
          "Impact time": "Mon, 23 May 2062 12:13:00"
        }
      ];
  
 
    // Loop through the data and generate the table rows
    // Loop through the data and generate the table rows
// Loop through the data and generate the table rows
console.log(data);
const itemsPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Initialize the current page
  let currentPage = 1;

  // Function to render the table
  function renderTable() {
    // Clear the table body
    tableBody.innerHTML = "";

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Loop through the data and generate the table rows for the current page
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= data.length) break;

      const item = data[i];
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = item["ID"];
      row.appendChild(idCell);

      const objectDesignationCell = document.createElement("td");
      objectDesignationCell.textContent = item["Object Designation"];
      row.appendChild(objectDesignationCell);

      const diameterCell = document.createElement("td");
      diameterCell.textContent = item["Diameter in m"];
      row.appendChild(diameterCell);

      const impactProbabilityCell = document.createElement("td");
      impactProbabilityCell.textContent = item["Impact Probability"];
      row.appendChild(impactProbabilityCell);

      const palermoScaleCell = document.createElement("td");
      palermoScaleCell.textContent = item["PS max"];
      row.appendChild(palermoScaleCell);

      const velocityCell = document.createElement("td");
      velocityCell.textContent = item["Velocity"];
      row.appendChild(velocityCell);

      const impactTimeCell = document.createElement("td");
      impactTimeCell.textContent = item["Impact time"];
      row.appendChild(impactTimeCell);

      tableBody.appendChild(row);
    }
  }

  function changePage(direction) {
    // Update the current page
    currentPage += direction;
  
    // Check if the current page is valid
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
  
    // Update the page info
    document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;
  
    // Render the table for the new page
    renderTable();
  
    // Disable the previous button if we're on the first page
    if (currentPage === 1) {
      document.getElementById("prev-page").disabled = true;
    } else {
      document.getElementById("prev-page").disabled = false;
    }
  
    // Disable the next button if we're on the last page
    if (currentPage === totalPages) {
      document.getElementById("next-page").disabled = true;
    } else {
      document.getElementById("next-page").disabled = false;
    }
  }
renderTable();
ocument.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;

// Disable the previous button if we're on the first page
if (currentPage === 1) {
  document.getElementById("prev-page").disabled = true; }


// Assuming the data is stored in a variable called 'data' in main.js

// Get references to the DOM elements

});
