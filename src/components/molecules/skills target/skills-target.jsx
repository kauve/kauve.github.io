import React from 'react'
import './skills-target.scss'
import {BsFillCheckCircleFill} from 'react-icons/bs';

function SkillsTarget({text}) {
  return (
    <div className='container-target'>
        <BsFillCheckCircleFill className='icon' />
        <p className='text'> {text}</p>

    </div>
  )
}

export default SkillsTarget