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




  const tabs = document.querySelectorAll('.tabs li');
  const tabContent = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      tabContent.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
          content.classList.add('active');
        }
      });
    });
  });
  
