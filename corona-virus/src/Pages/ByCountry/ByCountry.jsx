import React from 'react';

import Header from '../../Components/Header/Header';
import Flag from '../../Components/Commons/Flag/Flag';
import CounterData from '../../Components/Commons/CounterData/CounterData';

export default function ByCountry() {
  return (
    <>
      <Header />
      <section>
        <CounterData />
        <Flag />
      </section>
    </>
  );
}
