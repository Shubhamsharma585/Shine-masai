import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { JobDescription } from './JobDescription'

function JobDescriptionSidebar() {
    const [data,setData] =useState([]);
    const [page, setPage] = React.useState(1);
    const [limit, setLimit]=useState(5);
    const [dis, setDis]=useState([]);

    const {location} =useParams(); 
    
    const handleSearch = () => {
        const requestParam = {
          method: "get",
          url: `https://json-heroku-shubham.herokuapp.com/jobDetails?location=${location}`,
          params: {
            
            per_page : limit,
            page :page
            
            
          }
        };
        axios(requestParam)
          .then((res) =>{
            setData(res.data);
            
            
        })
        
          .catch((err) => console.log("err"));
      };

      


      const getData =(id)=>{
          axios.get(`https://json-heroku-shubham.herokuapp.com/jobDetails/${id}`)
          .then(res=>{setDis(res.data)})
          .catch((err) => console.log("err"));
         

      }
    
      React.useEffect(handleSearch, [page]);




    return (
        <div style={{display:"flex"}}>
            <div>
                <div>
                    {data.map((el)=>(
                    <div key={el.id} onClick={()=>getData(el.id)} style={{width:"350px",border:"2px solid black", height:"250px"}}>
                        <h1>{el.title}</h1>

                    </div>))}
                    {<div>
                    <button style={{backgroundColor:"black",color:"red",marginTop:"15px"}} disabled={page === 1} onClick={() => setPage(page - 1)}>
                    {"<<prev"}
                    </button>
                    <strong> {page}</strong>
                    <button style={{backgroundColor:"black",color:"red",marginTop:"15px"}} disabled={data.length>5} onClick={() => setPage(page + 1)}>
                    {"next>>"}
                    </button>
                    </div>}
                        

                </div>

            </div>
                
            <div>
                <JobDescription dis={dis}/>
            </div>

            
        </div>
    )
}

export default JobDescriptionSidebar
