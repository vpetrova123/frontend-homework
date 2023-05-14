import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://thronesapi.com/api/v2/Characters')
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error('Request failed', error);
      });
  }, []);

  return (
    <>
      <Navbar characters={characters} />
    </>
  );
}
