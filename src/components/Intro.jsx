import React from 'react'
import githubIcon from '../assets/img/github_icon.svg'
import mailIcon from '../assets/img/mail_icon.svg'

function Intro() {
  return (
    <section class="section-intro">
        <section class="section-intro-content">
            <h1>hello</h1>
            <div class="line"></div>
            <p>I'm Candice, Web Developer and Artist</p>
            <div class="intro-icons">
                <a href="https://github.com/CanRaffs89">
                    <img src={githubIcon} alt="" />
                </a>
                <a href="mailto:candice.raffel.work@gmail.com"><img src={mailIcon} /></a>
            </div>
        </section>
    </section>
  )
}

export default Intro