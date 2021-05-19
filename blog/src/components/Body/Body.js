import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
import  Java_comp from "../Java_comp/Java_comp";

import open from "../../img/open2.png";
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
<img src={open}  onClick={show} className={styles.open} id="open" alt="error"    />
   <Router>
   <div id="router" onClick={hide}>
  <Link to="/java" ><Box  id="one" src={java} txt="Java notes" txt2="I dicuss about various important concepts in java that I have felt is quite baffling and significant to get a command over this"/></Link>
  <Link to="/c" ><Box id="two" src={c} txt="C & C++ Notes" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/python" ><Box src={python} txt="Python Bites" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/ds" ><Box src={ds} txt="My Data Structure Dictionary" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/os" ><Box src={os} txt="Operating System Overview" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/project" ><Box src={project} txt="Project Arena" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/music hall" ><Box src={music} txt="Music Hall" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/book" ><Box src={book} txt="The enlightment of Books" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <Link to="/sticky notes" ><Box src={random} txt="Sticky notes" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></Link>
  <br />
  <br />
   
 </div>
 <div id="router_comp" className={styles.router_comp} >
  <Route exact  to="/" />
  <Route exact to="/java" component={Java_comp} />
  <Route exact to="/c" component={C_comp} />
  <Route exact to="/python" component={Python_comp} />
  <Route exact to="/ds" component={Ds_comp} />
  <Route exact to="/os" component={Os_comp} />
  <Route exact to="/project" component={Project_comp} />
  <Route exact to="/music" component={Music_comp} />
  <Route exact to="/books" component={Books_comp} />
  <Route exact to="/sticky notes" component={StickyNotes_comp} />


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


