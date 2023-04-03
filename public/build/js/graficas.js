const cargar = () =>{

  const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Hombre','Mujere'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19],
          backgroundColor: [
              'rgba(36, 27, 217, 0.2)',
              'rgba(217, 27, 173, 0.2)',
          ],
          borderColor: [
              'rgba(36, 27, 217, 1)',
              'rgba(217, 27, 173, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
  const dos = document.getElementById('rodaja');
  
    new Chart(dos, {
      type: 'doughnut',
      data: {
        labels: ['Hombre','Mujere'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19],
          backgroundColor: [
              'rgba(36, 27, 217, 0.2)',
              'rgba(217, 27, 173, 0.2)',
          ],
          borderColor: [
              'rgba(36, 27, 217, 1)',
              'rgba(217, 27, 173, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  const line = document.getElementById('popularidad');
  
    new Chart(line, {
      type: 'line',
      data: {
        labels: ['Hombre','Mujere'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19],
          backgroundColor: [
              'rgba(36, 27, 217, 0.2)',
              'rgba(217, 27, 173, 0.2)',
          ],
          borderColor: [
              'rgba(36, 27, 217, 1)',
              'rgba(217, 27, 173, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}