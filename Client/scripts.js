let url =
  "https://api.sheety.co/fa452b703a58dec144b4e5f6c6371f84/storeHours/sheet1";
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    const tableBody = document.querySelector("tbody");
    json.sheet1.forEach((rowData) => {
      const row = tableBody.insertRow();
      const dayCell = row.insertCell();
      const HoursCell = row.insertCell();
      dayCell.innerText = rowData.day;
      HoursCell.innerText = rowData.hours;
    });
  });
