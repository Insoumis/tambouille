import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import css from './ListItem.scss';

import macron from './assets/macron.jpg';

const ListItem = ({ item }) => (
  <Link className={css.module} to={`/candidats/${item.id}`}>
    <article>
      <img src={macron} alt={item.candidat_name} height="170" width="170"/>
      <p>{item.dep_num} - {item.circo}</p>
      <h3>{item.candidat_name.split('').map((letter, i, letters) => {
        const spanClasses = []

        // prev char is space or first char
        if ((i > 0 && letters[i - 1] === ' ') || i === 0) {
          spanClasses.push(css.hasLeftPseudo)
        }

        // next char is space or last char
        if ((i < letters.length - 1 && letters[i + 1] === ' ') || i === letters.length - 1) {
          spanClasses.push(css.hasRightPseudo)
        }

        return <span className={spanClasses.join(' ')} key={i}>{letter}</span>
      })}</h3>
    </article>
  </Link>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    candidat_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
