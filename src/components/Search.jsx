import React from 'react'
import '../assets/styles/components/Search.scss';
import img from '../assets/static/qmfmezwvxuvv9uckxnt3.jpg';

const Search = () => (
  <section className="main">
    <h2 className="main__title">Filtro</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </section>
);

export default Search;