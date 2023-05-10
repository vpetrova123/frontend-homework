const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(100, 169, 55, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(100, 88, 113, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(159, 234, 153, 0.8)',
  'rgba(192, 36, 240, 0.8)',
  'rgba(215, 80, 119, 0.8)',
  'rgba(103, 63, 127, 0.8)',
  'rgba(233, 75, 0, 0.8)',
  'rgba(34, 110, 80, 0.8)',
  'rgba(186, 158, 123, 0.8)',
  'rgba(1, 99, 170, 0.8)',
  'rgba(118, 239, 175, 0.8)',
  'rgba(13, 54, 155, 0.8)',
  'rgba(125, 163, 38, 0.8)',
  'rgba(176, 54, 247, 0.8)',
  'rgba(191, 101, 197, 0.8)',
  'rgba(25, 120, 219, 0.8)',
  'rgba(210, 199, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(100, 169, 55, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(100, 88, 113, 1)',
  'rgba(78, 52, 199, 1)',
  'rgba(159, 234, 153, 1)',
  'rgba(192, 36, 240, 1)',
  'rgba(215, 80, 119, 1)',
  'rgba(103, 63, 127, 1)',
  'rgba(233, 75, 0, 1)',
  'rgba(34, 110, 80, 1)',
  'rgba(186, 158, 123, 1)',
  'rgba(1, 99, 170, 1)',
  'rgba(118, 239, 175, 1)',
  'rgba(13, 54, 155, 1)',
  'rgba(125, 163, 38, 1)',
  'rgba(176, 54, 247, 1)',
  'rgba(191, 101, 197, 1)',
  'rgba(25, 120, 219, 1)',
  'rgba(210, 199, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const renderChart = async () => {
  const donutChart = document.querySelector('.donut-chart');
  const houses = [
    'Targaryen',
    'Tarly',
    'Stark',
    'Baratheon',
    'Lannister',
    'Greyjoy',
    'Clegane',
    'Baelish',
    'Seaworth',
    'Unknown',
    'Tyrell',
    'Free Folk',
    'Tarth',
    'Naathi',
    'None',
    'Bolton',
    'Naharis',
    'Lorathi',
    'Mormont',
    'Sparrow',
    'Viper',
    'Sand',
    'Worm',
    'Qyburn',
    'Bronn',
    'Corrupt Data',
  ];
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((character) => {
        if (houses.includes(character.family)) {
          const index = houses.indexOf(character.family);
          count[index] = count[index] + 1;
        } else if (houses.includes(character.lastName)) {
          const index = houses.indexOf(character.lastName);
          count[index] = count[index] + 1;
        } else count[count.length - 1] = count[count.length - 1] + 1;
      });
      new Chart(donutChart, {
        type: 'doughnut',
        data: {
          labels: houses,
          datasets: [
            {
              label: 'Game of Thrones Houses',
              data: count,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        },
      });
    });
};

renderChart();
