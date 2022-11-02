import { Link, Outlet } from 'react-router-dom';
import NavBar_34 from '../components/Navbar_34';



const SharedLayout_34 = () => {
  return (
    <>
    <NavBar_34 />
    <section className='section'>
      <Outlet />
    </section>
    </>
      
  );
};
export default SharedLayout_34;
