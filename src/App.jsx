import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
