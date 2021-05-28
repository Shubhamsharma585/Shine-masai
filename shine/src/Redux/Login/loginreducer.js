import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actiontype"



const initstate =
{
    isauth: false,
    isloading: false,
    iserror: false,
    isfailure: false,
    payload: {
        id: "",
    name: "",
    title: "",
    email: "",
    mobile: "",
    resume: "",
    personal: {
      name: "",
      email: "",
      mobile: "",
      dob: "",
      location: "",
      gender: ""
    },
    worksummary: {
      title: "",
      summary: "",
      experience: [
        1,
        4
      ],
      largestteam: "",
      anualsalary: "",
      notice: ""
    },
    employment: {
      title: "",
      company: "",
      duration: "",
      industry: "",
      functionalarea: ""
    },
    education: {
      title: "",
      branch: "",
      college: ""
    },
    skills: [
  
    ],
    desired: {
      role: "",
      location: "",
      department: "",
      industry: "",
      jobtype: "",
      shifttype: "",
      salary: ""
    }
    }
 
}




function loginreducer(state = initstate, { type, payload})
{
    
    console.log(state, type, payload)
         switch(type)
         {

        case LOGIN_SUCCESS:
                {
                    
                 console.log(payload)
                 
                    return {
                ...state,
                isauth: true,
                isloading: false,
                payload 
                  }
                } 
         case LOGIN_REQUEST:
            {
            return {                            
                 ...state,
                 isauth: false, 
                }
           }

       case LOGIN_FAILURE:
            {
            return {                            
                 ...state,
                 isauth: false,
                 isfailure: true
                }
           }   



        default: {
            return {
               ...state
             }   

         }

    }    
    
}
export default loginreducer;