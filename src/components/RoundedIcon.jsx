import React from 'react'

export default function RoundedIcon({icon, text=''}) {
  return (
    <div className='rounded-icon rounded-circle d-flex align-items-center justify-content-center'>
        {icon}
    </div>
  )
}
