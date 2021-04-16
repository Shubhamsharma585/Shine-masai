import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype"



const initstate =
{
    isauth: false,
    isloading: false,
    iserror: false
    // name:"",
    // password:"",
    // title:"",
    // mobile:"",
    // resume:"",
    // dob:"",
    // location:"",
    // gender:"",
    // personal: {
    //     name:"",
    //     email:"",
    //     mobile:"",
    //     dob:"",
    //     location:"",
    //     gender:""
    // },
    // worksummary:{
    //     title:"",
    //     summary:"",
    //     experience:[1, 4],
    //     largestteam:"",
    //     anualsalary:"",
    //     notice:""
    // },
    // employment:{
    //     title:"",
    //     company:"",
    //     duration:"",
    //     industry: "",
    //     functionalarea:""  
    // },
    // education:[{
    //     title:"",
    //     branch:"",
    //     college:""
    // }],
    // skills: [],
    // desired:{
    //     role:"Not mentioned",
    //     location:"All India",
    //     department:"",
    //     industry:"- Any -",
    //     jobtype:"- Any -",
    //     shifttype:"",
    //     salary:""
    // }



    
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
                ...payload 
                  }
                } 
         case LOGIN_REQUEST:
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
export default loginreducer;