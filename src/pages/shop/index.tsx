import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { Product } from '../../types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ShopProps {
  dataProducts: Product[];
}

const Shop: NextPage<ShopProps> = ({ dataProducts }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (!searchValue) {
      delete router.query.searchTerm;

      router.push({
        pathname: '/shop',
        query: { ...router.query },
      });
    }
  }, [searchValue]);

  const handleFilter = async (filter: string) => {
    try {
      if (filter === '') {
        await router.push({
          pathname: '/shop',
        });
      } else if (filter === 'man' || filter === 'women') {
        await router.push({
          pathname: '/shop',
          query: { ...router.query, gender: filter },
        });
      } else {
        await router.push({
          pathname: '/shop',
          query: { ...router.query, category: filter },
        });
        setSearchValue('');
      }
    } catch (error) {
      console.error('Error navigating to /shop:', error);
    }
  };

  const handleSearch = () => {
    delete router.query.category;

    router.push({
      pathname: '/shop',
      query: { ...router.query, searchTerm: searchValue },
    });
  };

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${Object.keys(router.query).length === 0 ? 'how-active1' : ''}`}
                data-filter="*"
                onClick={() => handleFilter('')}
              >
                All Products
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${router.query.gender === 'women' ? 'how-active1' : ''}`}
                data-filter=".women"
                onClick={() => handleFilter('women')}
              >
                Women
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${router.query.gender === 'man' ? 'how-active1' : ''}`}
                data-filter=".man"
                onClick={() => handleFilter('man')}
              >
                Men
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${router.query.category === 'belt' ? 'how-active1' : ''}`}
                data-filter=".bag"
                onClick={() => handleFilter('belt')}
              >
                Belt
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${router.query.category === 'shoe' ? 'how-active1' : ''}`}
                data-filter=".shoes"
                onClick={() => handleFilter('shoe')}
              >
                Shoes
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${router.query.category === 'watch' ? 'how-active1' : ''}`}
                data-filter=".watches"
                onClick={() => handleFilter('watch')}
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>

            {/* search */}
            <div className="panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04" onClick={handleSearch}>
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                  onKeyUp={(e) => {
                    e.key === 'Enter' && handleSearch();
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            {dataProducts.length > 0 ? (
              dataProducts.map((product) => {
                return (
                  <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                    <div className="block2">
                      <div className="block2-pic hov-img0">
                        <img src={product.img} alt={product.title} />
                        <Link href={`/shop/${product.id}`}>
                          <a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">View Details</a>
                        </Link>
                      </div>

                      <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                          <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            {product.title}
                          </a>

                          <span className="stext-105 cl3">{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col">
                <h4>There are no results with your search... please try searching for other products.</h4>
              </div>
            )}
          </div>

          <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1">
              1
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              3
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let url: string;

  if (query.gender && query.searchTerm) {
    url = `http://localhost:5001/products?gender_like=${query.gender}&q=${query.searchTerm}`;
  } else if (query.category && query.gender) {
    url = `http://localhost:5001/products?gender_like=${query.gender}&q=${query.category}`;
  } else if (query.searchTerm) {
    url = `http://localhost:5001/products?q=${query.searchTerm}`;
  } else if (query.category) {
    url = `http://localhost:5001/products?q=${query.category}`;
  } else if (query.gender) {
    url = `http://localhost:5001/products?gender_like=${query.gender}`;
  } else {
    url = `http://localhost:5001/products`;
  }

  const resProducts = await fetch(url);
  const dataProducts: Product[] = await resProducts.json();

  return {
    props: {
      dataProducts,
    },
  };
};
