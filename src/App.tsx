import Banner from './components/Banner/Banner';
import DetailsBlock from './components/Details-block/DetailsBlock';
import Footer from './components/Footer/Footer';
import PlacesContainer from './components/Places-container/PlacesContainer';
import './css/main.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />

      <DetailsBlock title={'Stories of Adventure'} />

      <PlacesContainer />

      <DetailsBlock title={'Popular Adventures'} />

      <Footer />
    </div>
  );
};

export default App;
