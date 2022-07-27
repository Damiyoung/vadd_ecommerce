import Annousment from '../components/Annousment';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newletter from '../components/Newletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    
   <div>
    
     <Annousment/>
      <Navbar />
     <Slider/>
     <Categories/>
     <Products/>
     <Newletter/>
     <Footer/>
     
   </div>
 

  );
};

export default Home