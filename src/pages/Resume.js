import React from 'react';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const Resume = () => (
  <Main
    title="CV"
    description="Lyle Christine's Resume."
  >
    <article className="post" id="resume">
      <Experience data={positions} />
      <Education data={degrees} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
