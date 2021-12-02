import "./Sidebar.css";


function Sidebar(){
    return(
        <div className="frame95">
            <h1>Subspace.</h1>
            <div className="frame94">
                <ul>
                    <li style={{color: "#53B9EA"}}>H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</li>
                    <li style={{color: "#F05050"}}>H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transactions</li>
                    <li><span style={{color: "#F19A5E"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subscription Plans</li>
                    <li><span style={{color: "#27C24C"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settelement</li>
                    <li><span style={{color: "#F05050"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disputes</li>
                    <li><span style={{color: "#27C24B"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Refund</li>
                    <li className="active"><span style={{color: "#FBE165"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customers</li>
                    <li><span style={{color: "#27C24C"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Offers</li>
                    <li><span style={{color: "#F05050"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reward Points</li>
                    <li><span style={{color: "#53B9EA"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Account</li>
                    <li><span style={{color: "#FBE165"}}>H</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;




