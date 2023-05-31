import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/app.scss";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";

import "./style/app.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/founder.scss";
import "./style/menu.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
// console.log('Hey :>> ');
export default App;
