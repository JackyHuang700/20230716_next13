'use client'

import React, { useState, useEffect } from 'react'
import { Spin } from 'antd';
import type { SpinProps } from 'antd'


function AntDSpin(props: TAntDSpin) {

  const [attrs, setAttrs] = useState<TAntDSpin | null>(null)

  useEffect(() => {
    const _props = { ...props }
    delete _props.onChange
    delete _props.value

    setAttrs({ ..._props })

  }, [props])


  return (
    <Spin
      {...attrs}
    >
      {props.children}
    </Spin>
  )
}


type TAntDSpin = SpinProps

export default AntDSpin