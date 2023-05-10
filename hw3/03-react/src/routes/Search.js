//Search route

import { useState } from 'react';
import './../css/search.css';

function Search(props) {
  const { title } = props;
  const { characters } = props;

  const [query, setQuery] = useState('');
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(text);
  };

  function getResults() {
    let queryResults = characters.filter((character) => {
      if (query !== '' && character.fullName.toLowerCase().includes(query.toLowerCase())) {
        return character;
      }
      return '';
    });
    if (queryResults.length === 0) {
      return <p> No match</p>;
    }

    return queryResults.map((character, index) => (
      <div className="card text-center" key={index}>
        <img
          className="card-img-top characterImg ms-2 mt-2"
          src={character.imageUrl}
          alt="Character"
        />
        <div className="card-body">
          <p>{character.fullName}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className="container">
      <h1 className="text-black text-center">{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <section className="characters mt-4">{query && getResults()}</section>
    </div>
  );
}
export default Search;
