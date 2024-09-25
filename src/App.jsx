import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ToTopButton from "./components/ToTopButton/ToTopButton.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./css/App.css";

export default function App() {
  return (
    <div>
      <ToTopButton />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

//
//  <Header />
{/* <Navbar />
<Home />
<ToTopButton />
<Footer />
</div> */}
//
//
