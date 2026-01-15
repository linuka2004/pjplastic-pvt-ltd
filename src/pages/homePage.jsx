import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./productPage";
import ProductOverview from "./productOverview";
import Home from "./homeContent";
import ContactPage from "./contactPage";
import AboutUsPage from "./aboutUsPage";
import Footer from "../components/footer";


export default function HomePage() {
    return (
      <div>
        <div className="w-full h-full overflow-y-scroll max-h-full">
          <Header/>
            <div className="w-full min-h-[calc(100%-80px)]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/overview/:productID" element={<ProductOverview />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/*" element={<h1>Page Not Found</h1>} />
              </Routes>
            </div>
            {/* <Footer /> */}
        </div>
        <Footer />
        </div>
    )
}