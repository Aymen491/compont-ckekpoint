import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from "E:/projet-react/react/my-page/src/component/profile/FullName.js";
import ProfilePhoto from './component/profile/ProfilPhoto';
import Adress from "E:/projet-react/react/my-page/src/component/profile/Adress.js"
import Fini from "./component/profile/Foot.js"
function App() {
  return (
<div className="app">
    <div>
      <FullName/>
      < div>
      <ProfilePhoto/>
      </div>
      <div>
      <Adress/>
      </div>
      <div>
        <Fini/>
      </div>
    </div> 
    </div>
  );
}
export default App ;