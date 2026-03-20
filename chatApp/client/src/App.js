
import { Outlet } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <>
    <Toaster/>
      <main>
        <Outlet />
      </main>
      ;
    </>
  );
    
}
export default App;
