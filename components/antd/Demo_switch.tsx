import React, { useState } from 'react'
import AntDSwitch from '@/components/antd/switch/index.tsx'


function Demo_switch() {
  const [switchVal_tem, setSwitchVal_tem] = useState(false)
  const [switch_tem, setSwitch_tem] = useState({
    onChange: (val) => {
      setSwitchVal_tem(val)
    }
  })

  return (
    <AntDSwitch {...switch_tem}
      checked={switchVal_tem}
    />

  )
}

export default Demo_switch
