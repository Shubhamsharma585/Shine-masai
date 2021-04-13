import React from 'react'

function JobAlertInput() {
    return (
        <div>
             <div>
                <p>Create a Free Job Alert 2021</p>
                <p>You can create upto 5 alerts</p>
            </div>
            <div>
                <h4>Let us know what kind of job you are looking for and we'll send them to your Inbox.</h4>
                <label >Keywods</label>
            <input placeholder="Enter Keywords" 
            type="text"/><br/>
            <label >Salary</label>
            <select>
                <option value="Any">-Any-</option>
                <option value="50k">50,000rs/Yr</option>
                <option value="100k">Rs 50,000 - 1Lakh/YR</option>
                <option value="150k">Rs 1.0-1.5 Lakh/Yr</option>
                <option value="200k">Rs 1.5-2.0 Lakh/Yr</option>
                <option value="250k">Rs 2.0-2.5 Lakh/Yr</option>
                <option value="300k">Rs 2.5-3.0 Lakh/Yr</option>
                <option value="350k">Rs 3.0-3.5 Lakh/Yr</option>
                <option value="400k">Rs 3.5-4.0 Lakh/Yr</option>
                <option value="450k">Rs 4.0-4.5 Lakh/Yr</option>
                <option value="500k">Rs 4.5-5.0 Lakh/Yr</option>
                <option value="600k">Rs 5-6 Lakh/Yr</option>
                <option value="700k">Rs 6-7Lakh/Yr</option>
                <option value="800k">Rs 7-8Lakh/Yr</option>
                <option value="900k">Rs 8-9Lakh/Yr</option>
                <option value="10M">Rs 9-10Lakh/Yr</option>
                <option value="12M">Rs 10-12Lakh/Yr</option>
                <option value="14M">Rs 12-14Lakh/Yr</option>
                <option value="16M">Rs 14-16Lakh/Yr</option>
                <option value="18M">Rs 16-18Lakh/Yr</option>

            </select><br/>
            <label >Department</label>
            <select name="Department" id="Department">
             <option value="Audit">Audit</option>
             <option value="Equity Research">Equity Research</option>
             <option value="Finance/Account/Tax">Finance/Account/Tax</option>
             <option value="Investment Banking">Investment Banking</option>
             <option value="Risk/ Underwriting">Risk/ Underwriting</option>
             <option value="Securities Trading">Securities Trading</option>
             <option value="Back operation Services">Back operation Services</option>
             <option value="Customer Services">Customer Services</option>
             <option value="Operations Management">Operations Management</option>
             <option value="Technical Support">Technical Support</option>
             <option value="Application programming/Maintainance">Application programming/Maintainance</option>
             <option value="Client Server">Client Server</option>
             <option value="DBA/ Data warehouse">DBA/ Data warehouse</option>
             <option value="Mainframe">Mainframe</option>
             <option value="Middleware">Middleware</option>
             <option value="Networking">Networking</option>
             <option value="Telecom Software">Telecom Software</option>
             <option value="Pre-Sales">Pre-Sales</option>
            </select><br/>
            <label >Location</label>
            <select name="Department" id="Department">
             <option value="Bangalore">Bangalore</option>
             <option value="Chennai">Chennai</option>
             <option value="Delhi">Delhi</option>
             <option value="Mumbai">Mumbai</option>
             <option value="Gurgao">Gurgao</option>
             <option value="Kolkatta">Kolkatta</option>
             <option value="Gujarat">Gujarat</option>
             <option value="Mysore">Mysore</option>
             <option value="Jharkhand">Jharkhand</option>
             <option value="Noida">Noida</option>
             <option value="Pune">Pune</option>
             <option value="Mysore">Mysore</option>
             <option value="Rajastan">Rajastan</option>
             <option value="Jammu/Kashmir">Jammu/Kashmir</option>
             <option value="Hridwar">Hridwar</option>
             <option value="MadyaPradesh">MadyaPradesh</option>
             <option value="Kerala">Kerala</option>
             <option value="Hydrabad">Hydrabad</option>
             <option value="Punjab">Punjab</option>
             <option value="Assam">Assam</option>
            </select><br/>

            <label >Experience</label>
            <select>
                <option value="Any">-Any-</option>
                <option value="00Y">0</option>
                <option value="01Y">1</option>
                <option value="02Y">2</option>
                <option value="03Y">3</option>
                <option value="04Y">4</option>
                <option value="05Y">5</option>
                <option value="06Y">6</option>
                <option value="07Y">7</option>
                <option value="08Y">8</option>
                <option value="09Y">9</option>
                <option value="10Y">10</option>
                <option value="11Y">11</option>
                <option value="12Y">12</option>
                <option value="13Y">13</option>
                <option value="14Y">14</option>
                <option value="15Y">15</option>
            </select><br/>
            <label>Email ID</label>
            <input placeholder="Your Email Id" type="Email"/><br/>
            <label >Name of the Alert</label>
            <input placeholder="Alert Name" type="text"/>
            
            <div>
                <button>Create job Alert</button>
            </div>
                
            
            </div>
            
        </div>
    )
}

export default JobAlertInput
