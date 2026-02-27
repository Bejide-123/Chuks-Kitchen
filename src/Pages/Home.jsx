import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ChefsSpecials from "../Components/Chef"
import PopularCategories from "../Components/Categories"
import head from "../assets/Home-head.jpeg"
import low from "../assets/Home-lower.jpeg"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full">
          <img 
            src={head} 
            alt="Hero section" 
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Popular Categories Section */}
        <section className="w-full py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <PopularCategories />
          </div>
        </section>

        {/* Chef's Specials Section */}
        <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <ChefsSpecials />
          </div>
        </section>

        {/* Lower Banner Section */}
        <section className="w-full">
          <img 
            src={low} 
            alt="Lower section" 
            className="w-full h-auto object-cover"
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home