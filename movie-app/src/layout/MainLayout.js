import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

export default function MainLayout() {
  return (
    <>
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
}
