import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Filters from './Filters/Filters';
import Card from './Card/Card';
import Footer from './Footer/Footer';

export interface Bike {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
  [key: string]: string | number;
}

export interface Products {
  products?: Bike[];
}

function App() {
  const [bikes, setBikes] = useState<Bike[]>();
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>();

  useEffect(() => {
    fetch('https://challenges.brainster.tech/ajax_data/data.json')
      .then((res) => res.json())
      .then((data) => {
        setBikes(data.products);
        setFilteredBikes(data.products);
      });
  }, []);

  const handleFilter = (filterType: string, value?: string) => {
    if (filterType === 'all') {
      setFilteredBikes(bikes);
    } else {
      const filteredBikes = bikes?.filter((item) => item[filterType] === value);
      setFilteredBikes(filteredBikes);
    }
  };

  return (
    <>
      <div className="container main-container">
        <Header />
        <div className="row mt-5 pb-5">
          <div className="col-5 col-sm-4 col-lg-3 filter">
            <Filters products={bikes} handleFilter={handleFilter} />
          </div>
          <div className="col-7 col-sm-8 col-lg-9">
            <Card products={filteredBikes} />
          </div>
        </div>
        <div className="row footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
