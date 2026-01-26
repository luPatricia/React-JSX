import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Spinner } from "../Spinner"
import { useNavigate } from "react-router"

export const ProtectedRoute = ({children}) =>{
 
  const {isAuthenticated, isLoading} =  useAuth()
  const navigate = useNavigate()
  
  useEffect(() =>{
     
   if(!isLoading && !isAuthenticated){
     navigate('/auth/login')
    // redirect /auth/login
   }

  }, [isAuthenticated, isLoading] )


  if(isLoading){
     return <Spinner/>
  }

  if(!isAuthenticated){
    return null
  }


 return children
}