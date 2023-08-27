'use client'

import React, { useState, useEffect } from 'react'
import { Radio } from 'antd';
import type { RadioProps } from 'antd'


function AntDRadio(props: TAntDRadio) {

  const [attrs, setAttrs] = useState<Omit<TAntDRadio, 'value' | 'onChange'> | null>(null)

  useEffect(() => {
    const _props = { ...props }
    delete _props.onChange
    delete _props.value

    setAttrs({ ..._props })

  }, [props])

  return (
    <Radio.Group
      {...attrs}
      value={props.value}
      onChange={(e) => {
        props.onChange(e.target.value)
      }}
    >
      {props.children}
    </Radio.Group>
  )
}


type TAntDRadio = RadioProps

export default AntDRadio
