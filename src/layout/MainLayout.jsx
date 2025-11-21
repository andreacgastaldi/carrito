import {Outlet}  from  "react-router-dom";
import {Header} from "../components/Header/Header.jsx";

export const MainLayout = ()=>{
    return(
        <>
            <Header />
            
            <div className="main-content">
                <Outlet />
            </div>
        </>
    )
}   