import "./App.css";
import Header from "./Components/Header";
import MainComponent from "./Components/MainComponent";
import SideNavBar from "./Components/SideNavBar";

const App = () => {
  return (
    <>
      <Header></Header>
      <SideNavBar></SideNavBar>
      <MainComponent></MainComponent>
    </>
  );
};

export default App;
