import Footer from "../components/Footer";
import Header from "../components/Header";


function Layout({ children }) {
    return (
       <div
       className="mt-10 flex min-h-screen w-full flex-col justify-start bg-gray-200 bg-gradient-to-bl from-[#0093E9] to-[#80D0C7]">
        <div className="container mx-auto p-4">
            <Header />
            {children}
            <Footer />
       </div>
       </div>
    )
}

export default Layout;