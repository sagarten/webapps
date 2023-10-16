import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeBody from "./component/HomeBody";
import TrackRecord from "./component/TrackRecord";
import Form from "./component/Form";
import Love from "./component/Love";
import Writing from "./component/Writing";
import Services from "./component/Services";

function App() {
  return (
    <div className="App">
      <div className="Home_container">
        <div className="Home_sub_container">
          <Header />
          <HomeBody />
        </div>
      </div>
      <TrackRecord />
      <Services></Services>
      <Love></Love>
      <Writing></Writing>
      <Form></Form>
      <Footer></Footer>

    </div>
  );
}

export default App;
