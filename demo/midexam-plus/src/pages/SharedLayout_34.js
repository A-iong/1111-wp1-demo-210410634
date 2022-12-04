import { Outlet } from 'react-router-dom';
import Navbar_34 from '../components/NavBar_34';

const SharedLayout_34 = () => {
  return (
    <>
      <Navbar_34 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_34;
