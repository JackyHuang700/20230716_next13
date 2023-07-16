// 'use client'

import { useEffect, useState } from 'react'
import { merge } from 'lodash-es'
import type { InputProps } from 'antd'
import { Input, InputNumber } from 'antd'
const { TextArea } = Input

type AntDsiInput = InputProps & {
  type: 'text' | 'password' | 'textarea' | 'number'
}

export default function AntDsiSpin(props: AntDsiInput) {
  const [comProps, setComProps] = useState<AntDsiInput>(props)

  useEffect(() => {
    setComProps({
      ...props,
      onChange: (e: any) => {
        setComProps(e.target.value)
      },
    })
  }, [props])

  const getComponent = () => {
    let component = null
    switch (props.type) {
      case 'number':
        {
          component = <InputNumber {...comProps} />
        }
        break
      case 'textarea':
        {
          component = <TextArea {...comProps} />
        }
        break
      case 'text':
      default:
        {
          component = <Input {...comProps} />
        }
        break
    }

    return component
  }

  return getComponent()
}

export const useAntDsiInput = (initData?: AntDsiInput) => {
  const _defaultData: AntDsiInput = {
    value: '',
    type: 'text',
    placeholder: '請輸入...',
  }

  const _mergeDefaultData = merge(_defaultData, initData)

  if (_mergeDefaultData?.type && _mergeDefaultData!.type === 'textarea') {
    switch (_mergeDefaultData!.type) {
      case 'number':
        {
        }
        break
      case 'textarea':
        {
          _mergeDefaultData.showCount = true
          _mergeDefaultData.allowClear = true
        }
        break
      case 'text':
      default:
        {
          _mergeDefaultData.allowClear = true
        }
        break
    }
  }

  const [input_tem, setInput_tem] = useState<AntDsiInput>(merge(_defaultData, _mergeDefaultData))


  return [input_tem, setInput_tem]
}
