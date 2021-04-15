import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actiontype"



const initstate =
{
    isauth: false,
    isloading: false,
    iserror: false,
    password:"",
    resume:"",
    personal: {
        name:"",
        email:"",
        mobile:"",
        dob:"",
        location:"",
        gender:""
    },
    worksummary:{
        title:"",
        summary:"",
        experience:[1, 4],
        largestteam:"",
        anualsalary:"",
        notice:""
    },
    employment:{
        title:"",
        company:"",
        duration:"",
        industry: "",
        functionalarea:""  
    },
    education:[{
        title:"",
        branch:"",
        college:""
    }],
    skills: [],
    desired:{
        role:"Not mentioned",
        location:"All India",
        department:"",
        industry:"- Any -",
        jobtype:"- Any -",
        shifttype:"",
        salary:""
    }



    
}




function regireducer(state = initstate, { type, payload})
{
    console.log(state, type, payload)
         switch(type)
         {

        case REGISTER_SUCCESS:
                {
                    return {
                ...state,
                isloading: false,
                isauth: false,
   
                    }
                } 
         case REGISTER_REQUEST:
            {
            return {                            
                 ...state,
                 isauth: false, 
                }
           }

        default: {
            return {
               ...state
             }   

         }

    }    
    
}
export default regireducer;