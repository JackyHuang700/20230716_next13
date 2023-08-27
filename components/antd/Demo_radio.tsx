import React, { useState } from 'react'
import AntDRadio from "@/components/antd/radio"
import { Radio } from 'antd'


function Demo_radio() {


  const [radioVal_tem, setRadioVal_tem] = useState('')
  const [radio_tem, setRadio_tem] = useState({
    onChange: (val) => {
      setRadioVal_tem(val)
    }
  })


  return (
    <div className="radio">
      <h5>radio</h5>
      <div>
        <button onClick={() => setRadioVal_tem('')}>chagne default</button>
        <button onClick={() => setRadioVal_tem(1)}>chagne 1</button>
        <button onClick={() => setRadioVal_tem(2)}>chagne 2</button>
      </div>

      <div>radio value: {radioVal_tem}</div>


      <AntDRadio
        {...radio_tem}
        value={radioVal_tem}
      >
        <Radio value={''}>未選擇</Radio>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
      </AntDRadio>
    </div>

  )
}

export default Demo_radio
