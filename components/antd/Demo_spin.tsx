import React, { useState } from 'react'
import AntDSpin from '@/components/antd/spin/index'


function Demo_switch() {
  const [spin_tem, setSpin_tem] = useState({
    spinning: false,
  })

  return (
    <>

      <div>
        <button onClick={() => {
          setSpin_tem({
            ...spin_tem,
            spinning: !spin_tem.spinning,
          })
        }}>change spin status</button>
      </div>

      <AntDSpin {...spin_tem}
      >
        <span>demo spin</span>
      </AntDSpin>
    </>
  )
}

export default Demo_switch
