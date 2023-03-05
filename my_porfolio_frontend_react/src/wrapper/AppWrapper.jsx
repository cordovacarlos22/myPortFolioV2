import React from 'react'
import {NavigationDots,SocialMedia} from '../components'

const AppWrapper = (Components,idname,classNames) => function HOC() {
  return (
    <div id={idname} className={`app__container ${classNames}`}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
        <Components/>
      </div>
      <NavigationDots active={idname}/>
    </div>
  )
}

export default AppWrapper
