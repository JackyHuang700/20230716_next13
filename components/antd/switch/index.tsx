'use client'

import React, { useState, useEffect } from 'react'
import { Switch } from 'antd';
import type { SwitchProps } from 'antd'


function AntDSwitch(props: TAntDSwitch) {

  const [attrs, setAttrs] = useState<Omit<TAntDSwitch, 'checked' | 'onChange'> | null>(null)

  useEffect(() => {
    const _props = { ...props }
    delete _props.onChange
    delete _props.checked

    setAttrs({ ..._props })

  }, [props])

  const onChange: SwitchProps['onChange'] = (e) => {
    props.onChange(e)
  }

  return (
    <Switch
      {...attrs}
      checked={props.checked}
      onChange={onChange}
    />
  )
}


type TAntDSwitch = SwitchProps

export default AntDSwitch