import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-10 space-y-10">
        <Hero />
        <SelectedWork />
        <Services />
      </main>
    </div>
  );
}

export default App;




// function App() {

//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/create' element={<CreateProduct />} />
//         <Route path='/edit/:id' element={<EditProduct />} />
//         <Route path='/person/:id' element={<SingleProduct />} />
//         <Route path='/contact' element={<ContactMe />} />
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App