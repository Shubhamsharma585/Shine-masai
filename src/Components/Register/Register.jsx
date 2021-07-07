import React, { useState } from "react"
import styles from "../Register/Register.module.css"
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Regifooter from "./Regifooter"
import {auth, google} from "../FireAuth/auth"
import { registering } from "../../Redux/Register/action"

 


function Register()
{
 
      const dispatch = useDispatch();
  

      const [page1, setPage1] = useState(true)
      const [page2, setPage2] = useState(true)
      const [page3, setPage3] = useState(true)
      const [page4, setPage4] = useState(true)
      const [page5, setPage5] = useState(true)
      const [page6, setPage6] = useState(true)
      
      const [isregi, setIsregi] = useState(false)
      const [iscollege, setIscollege] = useState(false)
      const [isyear, setIsyear] = useState(false)
      const [isworked, setIsworked] = useState(false)

      const [ istitle ,setIstitle] = useState(false)
      const [ isindustry , setIsindustry] = useState(false)
      const [ isfunctionalarea ,setIsfunctionalarea] = useState(false)

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [mobile, setMobile] = useState("");
      const [pass, setPass] = useState("");
      const [gender, setGender] = useState("");
      const [location, setLocation] = useState("");

      const [degree, setDegree] = useState("");
      const [college, setCollege] = useState("");
      const [year, setYear] = useState("");
      const [course, setCourse] = useState("");

      const [title, setTitle] = useState("");
      const [company, setCompany] = useState("");
      const [industry, setIndustry] = useState("");
      const [functionalarea, setFunctionalarea] = useState("");


      
      const[skills, setSkills] = useState([]);
      const[ oneskill, setOneskill] = useState();
      const addskills = () => {  

           setSkills([...skills, oneskill])
           console.log(skills)
      } 
      

      



     function regi1()
     {

      console.log("continue clicked")
      setPage1(false)
     }

     function regi2()
     {
      console.log("continue clicked")
      setPage2(false)
     }


     function regi3()
     {
      console.log("continue clicked")
      setPage3(false)
     }

     function regi4()
     {
     
      setPage4(false)
     }

     function regi5()
     {
     
      setPage5(false)
     }

     function regi6()
     {
     
      setPage6(false)
     }

   

    const [gologin, setGologin] = useState(false)
    function logintab()
    {
      console.log("Gologin");
      setGologin((pre) => !pre)
    }


    if(gologin)
    {
       return <Redirect to="/myshine/login"/>
     }

     function handlesignup()
     {
      auth.signInWithPopup(google)
      .then(resp => 
      {return  (console.log(resp.user.displayName),
        setName(resp.user.displayName),
        setEmail(resp.user.email))
      }
        )
      .catch((err) => console.log(err)); 
     }

   
    
     function sendpayload()
     {
         console.log("all")
         const payload = {name, email, mobile, pass, gender, location, degree,
        college, year, course, skills, title, company, industry, functionalarea }
        dispatch(registering(payload))
         setIsregi(true)
               
     }
 
     if(isregi)
     {
        return <Redirect  to="/" push/>
     }





    return page1?(
        <div>
            
           <div className={styles.top}>
               {/* <img src={logo1} /> */}
               <div className={styles.login}
               onClick={() => logintab() }
               >Login</div>

           </div>

          
           <div className={styles.cont}>

   <div className={styles.mid}>
               <div className={styles.contimg}>
                  <img src={process.env.PUBLIC_URL +"Snapshots/regi.png"} alt=""/>
               </div>
     
             <div className={styles.cont1}>
                 <br/>
             
               <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}  /><br/><br/>
               <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
               <input type="text" placeholder="Mobile Number" value={mobile}  onChange={(e) => setMobile(e.target.value)} /><br/><br/>
               <input type="password" placeholder="Password" value={pass}  onChange={(e) => setPass(e.target.value)} /><br/><br/>

                <div className={styles.conti} onClick={() => regi1()}>
                         Continue →  
                     </div>




           
            <p style={{display:"flex", flexDirection:"row"}}><span><hr width="185px"/></span><span style={{width:"10px"}}></span> <span style={{color:"gray"}}>or</span> <span style={{width:"10px"}}></span> <span><hr width="185px"/></span></p>    
          
            <div className={styles.social}>
              <div onClick={() => handlesignup()}><img src={process.env.PUBLIC_URL +"Snapshots/google1.png"} alt=""/> <p>Google</p></div>
              <div><img src={process.env.PUBLIC_URL +"Snapshots/ld.png"} alt=""/> <p>Linkedin</p></div>
              <div><img src={process.env.PUBLIC_URL +"Snapshots/fb.png"} alt=""/> <p>Facebook</p></div>

            </div>
            <p style={{fontSize:"10px", color:"rgb(112, 82, 82)"}}>By syncing your social media account, you agree to shine <span style={{color:"blue"}}>terms and conditions</span></p>

         
           </div>


    </div>
           </div>
              <Regifooter/>
             


        </div>
    ):page2?(
        <div>
          {/* <h1>This is second Page</h1> */}

          

          
           <div className={styles.cont}>
     <div className={styles.commoncont}>
               

             <div className={styles.commoncont1}> 
             <div>
             <span style={{fontSize:"28px", fontWeight:"800"}}>Welcome {name},</span> 
                <p style={{fontSize:"15px", fontWeight:"400", color:"#6d7883"}}>Thanks for registering with us. Complete your profile and find the right job in a few steps</p> 
                <h4 style={{fontSize:"20px", fontWeight:"800", color:"#6d7883"}}>What is your identity?</h4> 
             </div>
             </div>

             <div className={styles.commoncont1}> 
                 <button className={styles.identity} onClick={() => setGender("male")}><div className={styles.identity1} width="50px"  style={{marginLeft:"20px",marginTop:"10px"}}></div>Male</button>
                 <button className={styles.identity} onClick={() => setGender("female")}><div className={styles.identity2} width="55px"  style={{marginLeft:"20px",marginTop:"15px"}}></div>Female</button>
                 <button className={styles.identity} onClick={() => setGender("non-binary")}><div className={styles.identity3} width="80px"  style={{marginLeft:"15px",marginTop:"10px"}}></div>Non-binary</button>
                 <button className={styles.identity} onClick={() => setGender("prefer not to say")}><div className={styles.identity4} width="100px"  style={{marginLeft:"20px",marginTop:"0px"}}></div>Prefer not to say</button>
                
             </div>
               
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi2()}>
                         Continue →  
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>   



        </div>
    ):page3?(
      <div>
         {/* <h1>This is third Page</h1> */}

          
         <div className={styles.cont}>
     <div className={styles.commoncont}>
              
             <div className={styles.commoncont2}> ``
             <h4 style={{fontSize:"28px", fontWeight:"800",marginRight:"20%",marginTop:"3px"}}>Which city do you live in?</h4> 
             </div>
             
             <div className={styles.commoncont1}>
                 <button className={styles.identity} onClick={() => setLocation("Delhi/NCR")}><div className={styles.identity5} width="50px"  style={{marginLeft:"20px",marginTop:"10px"}}></div>Delhi NCR</button>
                 <button className={styles.identity} onClick={() => setLocation("Mumbai")}><div className={styles.identity6} width="55px"  style={{marginLeft:"10px",marginTop:"15px"}}></div>Mumbai</button>
                 <button className={styles.identity} onClick={() => setLocation("Pune")}><div className={styles.identity7} width="80px"  style={{marginLeft:"15px",marginTop:"10px"}}></div>Pune</button>
              </div>
             <div className={styles.commoncont1}>
                 <button className={styles.identity} onClick={() => setLocation("Banglore")}><div className={styles.identity8} width="50px"  style={{marginLeft:"20px",marginTop:"10px"}}></div>Banglore</button>
                 <button className={styles.identity} onClick={() => setLocation("Chennai")}><div className={styles.identity9} width="55px"  style={{marginLeft:"28px",marginTop:"15px"}}></div>Chennai</button>
                 <button className={styles.identity} onClick={() => setLocation("Hyderabad")}><div className={styles.identity10} width="80px"  style={{marginLeft:"25px",marginTop:"10px"}}></div>Hyderabad</button> 
              </div>
             <div className={styles.commoncont2}> 
               <input 
               style={{marginRight:"12%", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Location"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               />
             </div>
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi3()}>
                         Continue →  
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>


      </div>
    ):page4?(
      <div>
         {/* <h1>This is four Page</h1> */}


   
         <div className={styles.cont}>
     <div className={styles.commoncont}>
              



    


          

           {isworked?(
           <div>
              <div className={styles.commoncont2}>
                  <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"0",marginTop:"3px", color:"rgb(75, 75, 75)", margin:"auto", textAlign:"center"}}>In which company you have worked?</h4>  
             </div>

             <div className={styles.commoncont2} style={{marginTop:"30px"}}> 
               <input 
               style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Company Name"
               value={company}
               onChange={(e) => setCompany(e.target.value)}
               />
               <button 
               style={{height:"42px", width:"42px",marginRight:"60px", cursor:"pointer"}}
               onClick={() => setIstitle(true)}
               >→</button>
             </div> 

             {istitle?(
                 <div className={styles.commoncont2} style={{marginTop:"30px" ,transition:"300ms"}}> 
                 <p style={{marginRight:"350px"}}> What was your Job Title?</p>  
                   <input 
                style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Title"
               value={title} 
               onChange={(e) => setTitle(e.target.value)}
               />
               <button
               style={{height:"42px", width:"42px",marginRight:"60px",cursor:"pointer"}}
               onClick={() => setIsindustry(true)}
               >→</button>
             </div>

             ):("")}

 { isindustry?(
        <div className={styles.commoncont2} style={{marginTop:"30px"}}> 
                  <p style={{marginRight:"350px"}}> What was Industry?</p>  
                    <input 
                 style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
                type="text" 
                placeholder="Enter Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                />
                <button
                style={{height:"42px", width:"42px",marginRight:"60px",cursor:"pointer"}}
                onClick={() => setIsfunctionalarea(true)}
                >→</button>
              </div>

            ):("")}
    {  isfunctionalarea?(
         <div className={styles.commoncont2} style={{marginTop:"30px"}}> 
         <p style={{marginRight:"350px"}}> What was Functional Area?</p>  
           <input 
        style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
       type="text" 
       placeholder="Enter Industry"
       value={functionalarea}
       onChange={(e) => setFunctionalarea(e.target.value)}
       />
       <button
       style={{height:"42px", width:"92px",marginRight:"20px",cursor:"pointer", backgroundImage:"linear-gradient( 135deg, rgb(162, 150, 217) 0%, rgb(127, 174, 224) 100%)", color:"white", fontWeight:"800", border:"0px"}}
       onClick={() => regi4()}
       >Continue</button>

     </div>
            ):("")}      
      

           </div>
           
           ):(
<div>


             <div className={styles.commoncont2}>
             <h4 style={{fontSize:"28px", fontWeight:"800",marginRight:"20%",marginTop:"3px"}}>Have you ever worked?</h4>  
             </div>

<div className={styles.commoncont1}> 
             <button className={styles.identity_second} onClick={() => setIsworked(true)} ><div className={styles.identity11} width="50px"  style={{marginLeft:"10px",marginTop:"10px",}}></div> <h4 style={{marginLeft:"5px",marginTop:"25px", width:"170px",  fontSize:"15px", color:"grey"}}>Yes, I have worked</h4></button>
             <button className={styles.identity_second}><div className={styles.identity12} width="55px"  style={{marginLeft:"20px",marginTop:"15px",}}></div> <h4 style={{marginLeft:"20px",marginTop:"25px", width:"170px", color:"grey"}}>No, I don't have any work experience/ I am a fresher</h4> </button>
             </div>


             <div className={styles.commoncont1}> </div>
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi4()}>
                         Continue →  
            </div>
            </div>        
</div>)

           }









    </div>
           </div>
           <Regifooter/>


      </div>
    ):page5?(
      <div>
         {/* <h1>This is five Page</h1> */}



          
            
         <div className={styles.cont}>
     <div className={styles.commoncont}>
              
         
     <div className={styles.commoncont2}>
       <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"8%",marginTop:"3px", color:"rgb(75, 75, 75)"}}>Let us know your highest educational qualification</h4>  
     </div>

     <div className={styles.commoncont2}>
       <div className={styles.quali}>
        <button className={styles.identity_third} onClick={() => setDegree("M.C.A")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>M.C.A</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("M.Sc")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>M.Sc</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.A")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.A</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.Sc")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.Sc</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.Com")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.Com</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("B.Ed")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>B.Ed</h4> </button>
        </div>

     </div> 
        <div className={styles.commoncont2} style={{marginTop:"0px"}}>
        <div className={styles.quali}>
         <button className={styles.identity_third} onClick={() => setDegree("B.Tech / B.E")}><h4 style={{marginLeft:"5px",marginTop:"8px", width:"",  fontSize:"15px", color:"grey"}}>B.Tech / B.E</h4></button>
         <button className={styles.identity_third} onClick={() => setDegree("M.Tech")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>M.Tech</h4> </button>
        <button className={styles.identity_third} onClick={() => setDegree("MBA / PGDM")}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>MBA / PGDM</h4> </button>     
        </div>
      </div>
               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi5()}>
                         Continue →  
            </div>
            </div>                
    </div>
           </div>
           <Regifooter/>


      </div>
    ):page6?(
      <div>
         {/* <h1>This is six Page</h1> */}



          
            
         <div className={styles.cont}>
     <div className={styles.commoncont}>
       
            

             <div className={styles.commoncont2}>
                  <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"0",marginTop:"3px", color:"rgb(75, 75, 75)", margin:"auto", textAlign:"center"}}>From which institute did you complete {degree}?</h4>  
             </div>

             <div className={styles.commoncont2} style={{marginTop:"-40px"}}> 
               <input 
               style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Collage Name"
               value={college}
               onChange={(e) => setCollege(e.target.value)}
               />
               <button 
               style={{height:"42px", width:"42px",marginRight:"60px", cursor:"pointer"}}
               onClick={() => setIscollege(true)}
               >→</button>
             </div> 

             {iscollege?(
                 <div className={styles.commoncont2} style={{marginTop:"-40px"}}> 
                 <p style={{marginRight:"350px"}}> In which year did you complete?</p>  
                   <input 
                style={{marginRight:"", height:"40px", width:"500px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Year"
               value={year}
               onChange={(e) => setYear(e.target.value)}
               />
               <button
               style={{height:"42px", width:"42px",marginRight:"60px",cursor:"pointer"}}
               onClick={() => setIsyear(true)}
               >→</button>
             </div>

             ):("")}

             {
               isyear?(
               <div>
                  <div className={styles.commoncont2} style={{marginTop:"10px"}}> 
             <p style={{marginRight:"370px"}}> What was your course type?</p>  
             </div>

             <div className={styles.commoncont2} style={{marginTop:"-20px"}}>
       <div className={styles.quali}>
        <button className={styles.identity_third} style={{height:"50px"}} onClick={() => setCourse("Full Time")}> <h4 style={{marginLeft:"5px",height:"80px", marginTop:"8px", width:"", color:"grey"}}>Full Time</h4> </button>
        <button className={styles.identity_third} style={{height:"50px"}} onClick={() => setCourse("Part Time")}> <h4 style={{marginLeft:"5px",height:"80px", marginTop:"8px", width:"", color:"grey"}}>Part Time </h4> </button>
        <button className={styles.identity_third} style={{height:"50px"}} onClick={() => setCourse("Correspondence")}> <h4 style={{marginLeft:"5px",height:"80px",  marginTop:"8px", width:"", color:"grey"}}> Correspondence</h4> </button>
        </div>
             </div> 
               </div>
            ):("")}


           



            

             



               
            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => regi6()}>
                         Continue →  
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>


      </div>
    ):(
      <div>
         {/* <h1>This is seven Page</h1> */}



          
           
         <div className={styles.cont}>
     <div className={styles.commoncont}>


     <div className={styles.commoncont2}>
       <h4 style={{fontSize:"22px", fontWeight:"800",marginRight:"50%",marginTop:"3px", color:"rgb(75, 75, 75)"}}>Skills</h4>  
     </div>



     <div className={styles.skillcont}>
     <div className={styles.skillcont21}> 
     <input 
               style={{marginLeft:"0px", height:"40px", width:"200px", borderRadius:"5px", border:"gray 1px solid" }}
               type="text" 
               placeholder="Enter Skills"
               value={oneskill}
               onChange={(e) => setOneskill(e.target.value)}
               />
                <button
               style={{height:"42px", width:"42px",marginRight:"0px",cursor:"pointer"}}
               onClick={() => addskills()}
               >→</button>


    <div style={{padding:"10px 10px 10px 10px"}}>       
       {skills.map((itm) => {return  <button className={styles.identity_third} style={{float:"left", margin:"5px 5px 5px 5px"}}> 
             <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey", float:"left"}}>{itm}</h4> </button>})
             }
     </div>        

          

      
     
     
     
     </div>
     <hr/>
     <div className={styles.skillcont22} style={{paddingTop:"50px"}}> 
     <div className={styles.commoncont2}>
       <div className={styles.skills}>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "English" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>English &#43;</h4> </button>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Bussiness" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Bussiness  &#43;</h4> </button>
        </div>
     </div> 

     <div className={styles.commoncont2} style={{marginTop:"0px"}}>
        <div className={styles.skills}>
        <button className={styles.identity_third}  onClick={() => setSkills([...skills, "Autocad" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Autocad  &#43;</h4> </button>
         <button className={styles.identity_third} onClick={() => setSkills([...skills, "Ansys" ])}><h4 style={{marginLeft:"5px",marginTop:"8px", width:"",  fontSize:"15px", color:"grey"}}>Ansys  &#43;</h4></button>  
        </div>
      </div>

     <div className={styles.commoncont2}>
       <div className={styles.skills}>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Excel" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Excel  &#43;</h4> </button>
        <button className={styles.identity_third} onClick={() => setSkills([...skills, "Creo" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Creo  &#43;</h4> </button>
        </div>
     </div> 

     <div className={styles.commoncont2} style={{marginTop:"0px"}}>
        <div className={styles.skills}>
         <button className={styles.identity_third} onClick={() => setSkills([...skills, "ProE" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>ProE  &#43;</h4> </button>
        <button className={styles.identity_third}  onClick={() => setSkills([...skills, "Matlab" ])}> <h4 style={{marginLeft:"5px",marginTop:"8px", width:"", color:"grey"}}>Matlab  &#43;</h4> </button>     
        </div>
      </div>
      
     
     
     
     
     </div>



     </div>







            <div className={styles.commoncont2}>
            <div className={styles.commoncontconti} onClick={() => sendpayload()}>
                         Submit 
            </div>
            </div>        
    </div>
           </div>
           <Regifooter/>


      </div>
    )
}

export default Register;