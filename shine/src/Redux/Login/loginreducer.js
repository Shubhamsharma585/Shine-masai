import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype"



const initstate =
{
    isauth: false,
    isloading: false,
    iserror: false,
    data: []
   
 
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
                data: payload 
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