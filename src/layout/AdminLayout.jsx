import {Outlet}  from  "react-router-dom";


export const AdminLayout = ()=>{
    return(
        <section className="admin-layout">
            <h2>Admin Layout</h2>
            <main>
                <Outlet />
            </main>
        </section>
    )
}   
