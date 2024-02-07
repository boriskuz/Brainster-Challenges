import { useEffect, useState } from 'react';
import { Bike } from '../App';

interface FiltersProps {
  products?: Bike[];
  handleFilter: (filterType: string, value?: string) => void;
}

const Filters = ({ products, handleFilter }: FiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('Show All');
  const [brands, setBrands] = useState<{ [key: string]: number }>({});
  const [genders, setGenders] = useState<{ [key: string]: number }>({});

  const handleLinkClick = (filter: string, filterType: string) => {
    setActiveFilter(filter);
    handleFilter(filterType, filter);
  };

  useEffect(() => {
    //Set Brands
    const brandCounts = products?.reduce((accumulator, currentValue) => {
      const brand = currentValue.brand;
      accumulator[brand] = (accumulator[brand] || 0) + 1;
      return accumulator;
    }, {} as { [key: string]: number });
    if (brandCounts) {
      setBrands(brandCounts);
    }

    //Set Gender
    const genderCounts = products?.reduce((accumulator, currentValue) => {
      const gender = currentValue.gender;
      accumulator[gender] = (accumulator[gender] || 0) + 1;
      return accumulator;
    }, {} as { [key: string]: number });
    if (genderCounts) {
      setGenders(genderCounts);
    }
  }, [products]);

  return (
    <div>
      <h3 className="fw-bold">Filter by:</h3>
      <h4 className="fw-bold mt-4">Show All</h4>
      <div className="list-group mt-4">
        <a
          href="/"
          className={`list-group-item list-group-item-action d-flex justify-content-between ${activeFilter === 'Show All' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('Show All', 'all');
          }}
        >
          <span>Show All</span>
          <span className="badge rounded-pill">{products?.length}</span>
        </a>
      </div>

      <h4 className="fw-bold mt-3">Gender</h4>
      <div className="list-group mt-4">
        {Object.keys(genders).map((gender) => (
          <a
            key={gender}
            href="/"
            className={`list-group-item list-group-item-action d-flex justify-content-between ${activeFilter === gender ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(gender, 'gender');
            }}
          >
            <span className="text-capitalize">{gender.toLowerCase()}</span>
            <span className="badge rounded-pill">{genders[gender]}</span>
          </a>
        ))}
      </div>
      <h4 className="fw-bold mt-3">Brand</h4>
      <div className="list-group mt-4">
        {Object.keys(brands).map((brand) => (
          <a
            key={brand}
            href="/"
            className={`list-group-item list-group-item-action d-flex justify-content-between ${activeFilter === brand ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(brand, 'brand');
            }}
          >
            <span>{brand}</span>
            <span className="badge rounded-pill">{brands[brand]}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Filters;
