import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {editMode 
      ?
      <div>
        <input 
          className={s.statusInput} 
          onChange={onStatusChange} 
          onBlur={deactivateEditMode} 
          value={status}
          autoFocus/>
      </div>
      :
      <div>
        <span className={s.statusText} onClick={activateEditMode}>{props.status || '[status is empty]'}</span>
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks