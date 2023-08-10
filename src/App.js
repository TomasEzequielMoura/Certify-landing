import logo from './logo.svg';
import './App.css';
import './hover-buttons.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Intro from "./components/home/intro/intro";
import Blog from "./components/home/blog/blog";
import Characteristics from "./components/home/characteristics/characteristics";
import ChooseYourPlan from "./components/home/choose-your-plan/choose-your-plan";
import ContactUs from "./components/home/contact-us/contact-us";
import Customer from "./components/home/customer/customer";
import DiscoverOurServices from "./components/home/discover-our-services/discover-our-services";
import Features from "./components/home/features/features";
import GetInTouch from "./components/home/get-in-touch/get-in-touch";
import IframeYt from "./components/home/iframe-yt/iframe-yt";
// import Subscribe from "./components/home/subscribe/subscribe";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Intro></Intro>
        <Characteristics></Characteristics>
        <Features></Features>
        <IframeYt></IframeYt>
        <DiscoverOurServices></DiscoverOurServices>
        <GetInTouch></GetInTouch>
        <ChooseYourPlan></ChooseYourPlan>
        <ContactUs></ContactUs>
        <Blog></Blog>
        <Customer></Customer>
        {/* <Subscribe></Subscribe> */}
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
