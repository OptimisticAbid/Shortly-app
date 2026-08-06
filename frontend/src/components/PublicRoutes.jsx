import { useSelector } from "react-redux"

const PublicRoutes = ({ children }) => {
    const user = useSelector((state) => state.auth.user)

    if(user)
  return 
}

export default PublicRoutes