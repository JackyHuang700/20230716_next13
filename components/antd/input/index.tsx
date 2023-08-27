'use client'

import React, { useState, useEffect } from 'react'
import { Input } from 'antd';
import type { InputProps, InputNumberProps,  } from 'antd'
import { cloneDeep } from 'lodash-es'
import { InputNumber } from 'antd';

function AntDInput(props: TAntDInput) {

  const { TextArea } = Input
  const {
    type = 'input',
    allowClear = true,
    showCount = true,
    controls = false,
    className = 'min-w-[180px]',
  } = props

  const [attrs, setAttrs] = useState<Omit<TAntDInput, 'value' | 'onChange'> | null>(null)

  useEffect(() => {
    const _props = cloneDeep({
      allowClear,
      showCount,
      controls,
      className,
      ...props
    })

    delete _props.onChange
    delete _props.value
    switch (type) {
      case 'input':
      case 'textArea': {
      }
        break;
      case 'inputNumber': {
        delete _props.allowClear
        delete _props.showCount

      }
        break;
      default: {

      }
        break;
    }

    setAttrs({ ..._props })

  }, [props])

  const onChange = (e) => {
    props && props!.onChange(e.target.value)
  }

  const onChangeByNumber = (val: number | null) => {
    props && props.onChange(val)
  }

  const onGetComponent = (): any => {
    let _component = null

    switch (type) {
      case 'input': {
        _component = (
          <Input
            {...attrs}
            value={props.value}
            onChange={onChange}
            suffix={
              attrs?.suffix ? attrs.suffix : <span />
            }
          />
        )
      }
        break;
      case 'textArea': {
        _component = (
          <TextArea
            {...attrs}
            value={props.value}
            onChange={onChange}
          />
        )
      }
        break;
      case 'inputNumber': {
        _component = (

          <InputNumber
            {...attrs}
            value={props.value}
            onChange={onChangeByNumber}
          />
        )
      }
        break;
      default: {

      }
        break;
    }

    return _component
  }

  return (
    <>
      {onGetComponent()}
    </>
  )
}

type TAntDInput = InputProps & InputNumberProps & {
  type?: 'input' | 'textArea' | 'inputNumber'
}

export default AntDInput
