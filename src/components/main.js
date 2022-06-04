import {Tab, Tabs} from 'react-bootstrap';
import { useState } from 'react';
import FrontEnd from './frontend';
import Home from './home';
import style from '../assets/backGround.module.css';


function Main (){

  const [keyTab, setKeyTab] = useState(null);
    return (
        <>
 <Tabs
        activeKey={keyTab}
        onSelect={(k) => setKeyTab(k)}
        className="content"
      >
        <Tab eventKey="home" title="home" className={style.mostaza}  >
          <br />
          <Home
          />
        </Tab>
        <Tab eventKey="frontEnd" title="Front" className={style.negro}>
          <br />
          <FrontEnd
          />
        </Tab>
        
        


      </Tabs>






    


        </>
    )
}
export default Main;