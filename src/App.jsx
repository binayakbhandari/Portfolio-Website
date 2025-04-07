
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">Main Content Goes Here</main>
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