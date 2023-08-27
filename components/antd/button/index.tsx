'use client'

import React, { useState, useEffect } from 'react'
import { Button } from 'antd';
import type { ButtonProps } from 'antd'


function AntDButton(props: TAntDButton) {

  const [attrs, setAttrs] = useState<Omit<TAntDButton, 'value' | 'onChnage'> | null>(null)

  useEffect(() => {
    const _props = { ...props }
    delete _props.onChange
    delete _props.value

    setAttrs({ ..._props })

  }, [props])

  return (
    <Button {...attrs}>
      {props.children}
    </Button>
  )
}


type TAntDButton = ButtonProps

export default AntDButton