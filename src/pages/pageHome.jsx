import React,{ useEffect, useState} from "react";
import UserList from "../components/UserList";
import AdminList from '../components/adminSection'

function PageHome() {

    const [user,setUser] = useState([
    {id:1,name:'Prayut',lastname:'Chan-O-cha',position:'president'},
    {id:2,name:'Prawit',lastname:'Wongsuwan',position:'president'}
    ])

  const [view,setView] = useState('user')

  useEffect(() => {
    console.log(`view_now: ${view}`);
  },[view]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-blue-600">
            Generation Thailand React - Assessment
        </h1>
        <div className="flex flex-row space-x-20 pt-20">
          <button
              className="text-4xl font-extrabold text-white mb-8 bg-blue-700 p-8 rounded-lg "
              onClick={() => setView("user")}
          >User Section</button>
          <button
              className="text-4xl font-extrabold text-white mb-8 bg-blue-700 p-8 rounded-lg"
              onClick={() => setView("admin")}
          >Admin Section</button>
        </div>
        

        {view === "user" ? ( 
          <UserList user={user} />) : (
          <AdminList user={user} setUser={setUser} />)
        }
    </div>
  );
}

export default PageHome;
