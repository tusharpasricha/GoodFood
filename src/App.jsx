import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DashBoard from "./DashBoard";

function App() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="w-5/6">
          <NavBar />
          <DashBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
