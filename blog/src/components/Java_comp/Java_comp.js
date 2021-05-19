import React from 'react';
import PropTypes from 'prop-types';
import styles from './Java_comp.module.css';
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Link,

} from "react-router-dom";

const page1=()=>(
	<div id="page1" >

	<Oops />
	<NoButYes />
	





</div>

	);


	const Oops=()=>(
              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>Not 100%</h3>
              <p > Java is not 100% an object oriented programming language.This is because, it has support for primitive non 
              objectified data types like int,float,double et cetera. A 100% object oriented programming language should not 
              support primitive non objectified data types and everything should be objectified. Eventhough, Java supports wrapper 
              class,its still not !00% OOPs as it  has support for int,double et cetera
              </p>
              </div>
	)
	const NoButYes=()=>(
	<div className={styles.diveven}>
              <h3 className={styles.headingeven}>No But yes!</h3>
              <p > Java does not support multiple inheritance classes. So can we say java doesnt support Multiple inheritance? Not really.
              Java supports multiple inheritance of interfaces and also mixed inheritance of multiple interface and a single class. So, its a Yes!
              </p>
              </div>


	);


const page2=()=>(
	<div className={styles.contenteven}>
              <h3 class="headingeven">No But yes!</h3>
              <p class="contenteven"> Java does not support multiple inheritance classes. So can we say java doesnt support Multiple inheritance? Not really.
              Java supports multiple inheritance of interfaces and also mixed inheritance of multiple interface and a single class. So, its a Yes!
              </p>
              </div>


	);



const Java_comp = () => (
  <div className={styles.Java_comp}>
     
       <Router>
       <Route   path="/1" component={page1} />
       
       
       <Route exact  path="/java" component={page1} />
       <Route path="/2" component={page2} />
       <div id="pagenodiv" className={styles.pagenodiv}>
       <Link className={styles.pages} to="/1" >1</Link>
        
        
       <Link className={styles.pages} to="/2" >2</Link>
       <Link className={styles.pages} to="/3" >3</Link>
        
      </div>


       </Router>



  </div>
);

export default Java_comp;
