import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ReserchIcon from './images/research.gif';

export default function Search() {
  const [clicked, setClicked] = useState(false);

  const location = useLocation();

  const wasClicked = (event) => {
    if (event === 'click') {
      setClicked(true);
    }

    if (clicked === true) {
      setClicked(false);
    }
  };

  return (
    <div>
      {location.pathname === '/details' && clicked === false ? (
        <img
          src={ReserchIcon}
          alt="White background with a animated magnifying glass clickable"
          className="research-gif"
          onClick={({ type }) => wasClicked(type)}
          aria-hidden="true"
        />
      ) : null}
      {clicked ? (
        <label htmlFor="countries">
          <select name="countries" id="countries">
            <option label=" " />
            <option value="br">br</option>
          </select>
        </label>
      ) : null}
    </div>
  );
}
