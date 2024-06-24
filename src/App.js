import "./App.css";
import { Player } from "video-react";
import mp4 from "../src/lotties/mp4/landscape.mp4";
import Person, { Check } from "./folders/Person";
import { Person2, Person3 } from "./folders/Person";
import Parent from "./ChildComponent/Parent";
import Form from "./Forms/Form";
import { Route, Routes } from "react-router-dom";
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Contect from "./ReactRouter/Contect";
import Navbar from "./ReactRouter/Navbar";
import { BrowserRouter } from "react-router-dom";
import NoPage from "./ReactRouter/NoPage";
import Crud from "./CRUD/Crud";
import Multipalinput from "./CRUD/Multipalinput";
import Modalcrud from "./CRUD/modal/Modalcrud";
import Context from "./useContext/Context";
import Context2 from "./useContext/Context2";
import Child from "./ChildComponent/Child";
import { AuthContext } from "./useContext/AuthContext ";
import Login from "./Axios/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CreateUser from "./Axios/CreateUser";
import Validation from "./Form-validation/Validation";
import Validationbootstrap from "./bootstrap/Validationbootstrap";
import Userref from "./Hooks/Userref";
import UseReducer from "./Hooks/UseReducer";
import UseCallback from "./Hooks/Usecallback/UseCallback";
import Usememo from "./Hooks/Usememo/Usememo";
import Customhook from "./Hooks/Custom hooks/Customhook";

function App() {
  // const arr = ["apple", "orange", "kiwi"];

  const obj = {
    name: "dipali",
    age: 23,
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={animationData} className="App-logo" alt="logo" /> */}
    //     <Lottie options={defaultOptions} height={400} width={400} />
    //     <p>
    //       <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      {/* {arr.map((item, id) => {
        return <p key={id}>{item}</p>;
      })} */}
      {/* <div className="demo">
        <video
          // width="320"
          // height="240"
          autoplay="autoplay"
          loop="true"
          muted
          className="video"
        >
          <source src={mp4} type="video/mp4" />
        </video>
        <p className="text">loremloremloremloremlorem</p>
      </div> */}
      {/* const obj ={
        name :"sdcsf",
        age:45
      }

      const {name ,age}=obj; */}
      {/* <Person color={obj} /> */}
      {/* <Person2 /> */}
      {/* <Person3 brand={"ford"} /> */}
      {/* <Check value={true} /> */}
      {/* <Parent brand={obj} /> */}
      {/* <Child /> */}
      {/* <Form /> */}
      {/*------------------------ react router------------------ */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> */}
      {/*----------------------------------- crud-------------------------------------- */}
      {/* <Crud /> */}
      {/* <Multipalinput /> */}
      {/* <Modalcrud /> */}
      {/* <AuthContext /> */}

      {/*---------------------------------------------------------- api----------------------------------------------------------- */}
      {/* <Login /> */}
      {/* <CreateUser /> */}

      {/*---------------------------- Validation---------------------------- */}
      {/* <Validation /> */}
      {/* <Validationbootstrap /> */}

      {/* -----------------------------------------------hooks------------------------------------------ */}
      {/* <Userref /> */}
      {/* <UseReducer /> */}
      {/* <UseCallback /> */}
      {/* <Usememo /> */}
      <Customhook />
    </>
  );
}

export default App;
