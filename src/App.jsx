import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutUs from './Components/Section/AboutUs';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <MainSection />
      <AboutUs />
      <Services />
      <Portfolio />
      <Experience />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

// const [items, setItems] = useState([]);

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((res) => {
//       return res.json();
//     })
//     .then((arr) => {
//       setItems(arr);
//       console.log(arr);
//     });
// }, []);

// useEffect(() => {
//   fetch('URL')
//     .then((res) => {
//       return res.json;
//     })
//     .then((arr) => {
//       setItems(arr);
//       console.log(arr);
//     });
// }, []);
