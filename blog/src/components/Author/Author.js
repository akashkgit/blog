import React from 'react';
import PropTypes from 'prop-types';
import styles from './Author.module.css';
import author from '../../img/author11.png';
const Author = () => (

  <div className={styles.author} id="auth" >
   
  <img className={styles.authorimg}src= {author} alt="error"/>
  <p className={styles.authorwords} >" My Vision is to get 
  delighhted by learning multitude of technologies and leverage it to solve Business and social cause by my soft skills.
  My Vision is to get   delighhted by learning multitude of technologies and leverage it to solve Business and social cause by my soft skills
  My Vision is to get   delighhted by learning multitude of technologies and leverage it to solve Business and social cause by my soft skills
  My Vision is to get   delighhted by learning multitude of technologies and leverage it to solve Business and social cause by my soft skills"
  <br />
  <p >  -Akash kumar</p>
  </p>
  </div>
);


export default Author;
