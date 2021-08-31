import Navbar from "../header/Navbar";
import Body from "../body/body";
import Footer from "../footer/footer";

function Home() {
  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
