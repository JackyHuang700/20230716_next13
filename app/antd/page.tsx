'use client'

import React, { useState } from 'react'
import AntdInput from "@/components/antd/input"
import AntdRadio from "@/components/antd/radio"
import { Radio } from 'antd'
/* // import { Input } from 'antd'; */


function AntdDemo() {


  const [inputVal_tem, setInputVal_tem] = useState('111')
  const [input_tem, setInput_tem] = useState({
    /**  allowClear: false, */
    /** showCount: false, */
    /* type: 'inputNumber', // FIXME:　若為 input 可以刪除 */
  })


  const [radioVal_tem, setRadioVal_tem] = useState('')
  const [radio_tem, setRadio_tem] = useState({
  })



  return (
    <div>
      <h5>antd demo</h5>

      <div className="radio">
        <h5>radio</h5>
        <div>
          <button onClick={() => setRadioVal_tem('')}>chagne default</button>
          <button onClick={() => setRadioVal_tem(1)}>chagne 1</button>
          <button onClick={() => setRadioVal_tem(2)}>chagne 2</button>
        </div>

        <div>radio value: {radioVal_tem}</div>


        <AntdRadio
          {...radio_tem}
          value={radioVal_tem}
          onChange={setRadioVal_tem}
        >
          <Radio value={''}>未選擇</Radio>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
        </AntdRadio>
      </div>

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

        <AntdInput
          {...input_tem}
          value={inputVal_tem}
          onChange={setInputVal_tem}
        />
        <AntdInput
          {...input_tem}
          type='textArea'
          value={inputVal_tem}
          onChange={setInputVal_tem}
        />
        <AntdInput
          {...input_tem}
          type='inputNumber'
          value={inputVal_tem}
          onChange={setInputVal_tem}
        />


        {/*         <Input
          value={input_value}
          onChange={setInput_value}
        />


        <input type="text" value={input_value} onChange={(e) => {
          setInput_value(e.target.value)
        }} /> */}
      </div>



    </div>
  )
}

export default AntdDemo
