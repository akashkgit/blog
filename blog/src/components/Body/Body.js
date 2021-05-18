import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';

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
const Body = () => (
  <div className={styles.body} >
   
  <Box src={java} txt="Java notes" txt2="I dicuss about various important concepts in java that I have felt is quite baffling and significant to get a command over this"/>
  <Box src={c} txt="C & C++ Notes" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={python} txt="Python Bites" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={ds} txt="My Data Structure Dictionary" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={os} txt="Operating System Overview" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={project} txt="Project Arena" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={music} txt="Music Hall" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={book} txt="The enlightment of Books" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <Box src={random} txt="Sticky notes" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/>
  <br />
  <br />
  <div className={styles.auth} >
  <Author />
  </div>


  </div>





);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;


