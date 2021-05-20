import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
import  Java_comp from "../Java_comp/Java_comp";
import  C_comp from "../C_comp/C_comp";
import  Python_comp from "../Python_comp/Python_comp";
import  Ds_comp from "../Ds_comp/Ds_comp";
import  Os_comp from "../Os_comp/Os_comp";
import  Project_comp from "../Project_comp/Project_comp";
import  Music_comp from "../Music_comp/Music_comp";
import  Books_comp from "../Books_comp/Books_comp";
import  StickyNotes_comp from "../StickyNotes_comp/StickyNotes_comp";

import open from "../../img/open3.png";
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Box from '../Box/Box';
import java from '../../img/java3.png';
import c from '../../img/c.png';
import python from '../../img/python3.png';
import ds from '../../img/ds1.png';
import os from '../../img/os2.png';
import project from '../../img/project2.png';
import music from '../../img/music2.png';
import book from '../../img/book.png';
import random from '../../img/random3.png';
import author from '../../img/author2.JPG';
import Author from '../Author/Author';
function hide()
{


document.getElementById("router").style.display="none";
document.getElementById("open").style.display='block';
document.getElementById("router_comp").style.display='block';

}
function show()
{
  document.getElementById("router").style.display="block";
document.getElementById("open").style.display='none';
document.getElementById("router_comp").style.display='none';
}
const Body = () => (
  <div className={styles.body}  id="body">
  <div className={styles.box}>
<img src={open}  onClick={show} className={styles.open} id="open" alt="error"    />
<p className={styles.expand}> Expand</p>
</div>
   <Router>
   <div id="router" onClick={hide} className={styles.router}>
  <Link to="/os" ><Box src={os} txt="Operating System Overview" txt2="A click on this will open a list of interesting quick snippets of OS concepts"/></Link>
  <Link to="/java" ><Box  id="one" src={java} txt="Java Scripts" txt2="I dicuss about various important concepts in java that I have felt is quite baffling and significant to get a command over this"/></Link>
  
  <Link to="/project" ><Box src={project} txt="Project Arena" txt2="Open this arena to find the playlist of some of my project works in my college days"/></Link>
  <Link to="/music" ><Box src={music} txt="Music Hall" txt2="Unlock this Hall to listen some of my musical plays that I do during my free time!"/></Link>
  <Link to="/c" ><Box id="two" src={c} txt="C & C++ Notes" txt2="This has some of the intruiging yet ambivalent C& C++concepts that I have gone through and felt its worth taking a note"/></Link>
  <Link to="/python" ><Box src={python} txt="Python Bites" txt2="This has some of the intruiging yet ambivalent python concepts that I have gone through and felt its worth taking a note"/></Link>
  <Link to="/ds" ><Box src={ds} txt="My Data Structure Dictionary" txt2="Here, I jot down some of the Data Structure concepts for a quick glance!"/></Link>


  
  <Link to="/book" ><Box src={book} txt="The enlightment of Books" txt2="Get Enlightened by reading some of my hand picked verses from good proficient Books that had piqued my interest "/></Link>
  <Link to="/sticky notes" ><Box src={random} txt="Sticky notes" txt2="Unpin this to see some of my miscellanious notes that I have taken on the go."/></Link>
  <br />
  <br />
   
 </div>
 <div id="router_comp" className={styles.router_comp} >
  <Route exact  path="/" />
  <Route exact path="/java" component={Java_comp} />
  <Route exact path="/c" component={C_comp} />
  <Route exact path="/python" component={Python_comp} />
  <Route exact path="/ds" component={Ds_comp} />
  <Route exact path="/os" component={Os_comp} />
  <Route exact path="/project" component={Project_comp} />
  <Route exact path="/music" component={Music_comp} />
  <Route exact path="/books" component={Books_comp} />
  <Route exact path="/sticky notes" component={StickyNotes_comp} />


  </div> 
 </Router>

  <div className={styles.auth} >
  <Author />
  </div>


  </div>





);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;


