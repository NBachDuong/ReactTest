import logo from './logo.svg';
import './App.css';
import CourseList from './CourseList';

const App = () => (
  <div>
      <h1>My Courses</h1>
      <CourseList />
    
    <div style={{ textAlign: "center" }}>
      {" "}
      {/* Center align the content */}
      
      <img
        src={logo}
        alt="React Logo"
        style={{ width: "200px", marginTop: "50px" }}
      />{" "}
      {/* Image with styles */}
      <p style={{ fontStyle: "italic" }}>
        This is the React logo! <br />
      </p>
      <p>The library for web and native user interfaces</p>
      <h1 id="jsx-intro">This is JSX</h1>
    </div>
  </div>
);


export default App;
