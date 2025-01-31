import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";


function App() {
  return (
    <>
    <div className='mt-10 flex min-h-screen w-full flex-col justify-start bg-gray-200 bg-gradient-to-bl from-[#0093E9] to-[#80D0C7]">
    <div class="container mx-auto p-4'>
    <Header />
    <TodoList />
    <Footer />
    </div>
    </>
  )
    

}

export default App;
