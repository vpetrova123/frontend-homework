import { backgroundColors, borderColors } from './../utils/chartColors';
import './../css/houses.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

function Houses(props) {
  const { title } = props;
  const { characters } = props;

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

  characters.forEach((character) => {
    if (houses.includes(character.family)) {
      const index = houses.indexOf(character.family);
      count[index] = count[index] + 1;
    } else if (houses.includes(character.lastName)) {
      const index = houses.indexOf(character.lastName);
      count[index] = count[index] + 1;
    } else count[count.length - 1] = count[count.length - 1] + 1;
  });

  const data = {
    labels: houses,
    datasets: [
      {
        label: houses,
        data: count,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="container">
      <h1 className="text-center">{title}</h1>
      <div>
        <Doughnut data={data} />
      </div>
    </section>
  );
}

export default Houses;
