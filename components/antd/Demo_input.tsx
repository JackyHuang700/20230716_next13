import React, { useState } from 'react'
import AntDInput from "@/components/antd/input"



function Demo_input() {

  const [inputVal_tem, setInputVal_tem] = useState('111')
  const [input_tem, setInput_tem] = useState({
    /**  allowClear: false, */
    /** showCount: false, */
    /* type: 'inputNumber', // FIXME:　若為 input 可以刪除 */
    onChange: (val) => {
      setInputVal_tem(val)
    }
  })



  return (
    <div className="input">
      <h5>input demo</h5>
      <button onClick={() => {
        console.table('input_tem', input_tem.showCount)
        setInput_tem(() => {
          return {
            ...input_tem,
            showCount: !input_tem.showCount
          }
        }
        )
      }}>chagne showCount</button>
      <br />
      <button onClick={() => {
        setInputVal_tem(inputVal_tem + '1')
      }}>dfasdf</button>

      <div>input value: {inputVal_tem}</div>

      <AntDInput
        {...input_tem}
        value={inputVal_tem}
      />
      <AntDInput
        {...input_tem}
        type='textArea'
        value={inputVal_tem}
      />
      <AntDInput
        {...input_tem}
        type='inputNumber'
        value={inputVal_tem}
      />
    </div>
  )
}

export default Demo_input
