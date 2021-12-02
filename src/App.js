
import './App.css';
import "./Sidebar.js";
import Sidebar from './Sidebar.js';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="customer">
      <Sidebar />
      <Dashboard />
      <div className="rect21">
        <ul>
          <li>
            <h4>Customer</h4>
            <div className="line"></div>
            <button>+ &nbsp;&nbsp;New Customer</button>
          </li>
          <li></li>
          <li>
            <h5>Customer Id</h5>
            <h5>Customer Name</h5>
            <h5>Email</h5>
            <h5>Contact</h5>
          </li>
          <li>
            <p style={{color: "#2B83EA"}}>pay_G11ZY646x6Afk3</p>
            <p>Anonymous</p>
            <p>abc@gmail.com</p>
            <p>+919876543210</p>
          </li>
          <li>
            <p style={{color: "#2B83EA"}}>pay_G11ZY646x6Afk3</p>
            <p>Anonymous</p>
            <p>abc@gmail.com</p>
            <p>+919876543210</p>
          </li>
          <li>
            <p style={{color: "#2B83EA"}}>pay_G11ZY646x6Afk3</p>
            <p>Anonymous</p>
            <p>abc@gmail.com</p>
            <p>+919876543210</p>
          </li>
          <li>
            <p style={{color: "#2B83EA"}}>pay_G11ZY646x6Afk3</p>
            <p>Anonymous</p>
            <p>abc@gmail.com</p>
            <p>+919876543210</p>
          </li>
          <li>
            <p style={{color: "#2B83EA"}}>pay_G11ZY646x6Afk3</p>
            <p>Anonymous</p>
            <p>abc@gmail.com</p>
            <p>+919876543210</p>
          </li>
          <li>
            <p style={{color: "#2B83EA"}}>pay_G11ZY646x6Afk3</p>
            <p>Anonymous</p>
            <p>abc@gmail.com</p>
            <p>+919876543210</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
