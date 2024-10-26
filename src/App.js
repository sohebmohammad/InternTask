import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Employees from "./components/Employees";
import Section1 from "./components/Section1";
import Brands from "./components/Brands";
import NewArraivals from "./components/NewArraivals";
import Payday from "./components/p";
import YongsFav from "./components/YoungsFav";
import Vouchers from "./components/Vouchers";
import Community from "./components/Community";
import Background from "./components/Backgroung";
function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Brands />
      <NewArraivals />
      <Payday />
      <YongsFav />
      <Vouchers />
      <Community />
      <Background />
    </>
  );
}

export default App;
