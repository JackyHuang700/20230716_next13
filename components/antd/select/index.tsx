'use client'

import React, { useState, useEffect } from 'react'
import { Select } from 'antd';
import type { SelectProps } from 'antd'


function AntDSelect(props: TAntDSelect) {

  const [attrs, setAttrs] = useState<Omit<TAntDSelect, 'value' | 'onChange'> | null>(null)



  useEffect(() => {
    const _props = { ...props }
    delete _props.onChange
    delete _props.value

    setAttrs({ ..._props })

  }, [props])

	const onChange: SelectProps['onChange'] = (e) => {
    props.onChange(e)
  }


  const getDefaultOption = (): any => {
    return { label: '未選擇', value: '' }
  }

  return (
    <Select
      {...attrs}
      value={props.value}
      onChange={onChange}
      options={[getDefaultOption(), ...props.options || []]}
    >
      {props.children}
    </Select>
  )
}


type TAntDSelect = SelectProps

export default AntDSelect