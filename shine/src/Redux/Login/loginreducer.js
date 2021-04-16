import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actiontype"



const initstate =
{
    isauth: false,
    isloading: false,
    iserror: false,
    payload: {
        name: ""
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