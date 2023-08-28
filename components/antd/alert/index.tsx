'use client'

import React, { useState, useEffect } from 'react'
import { Alert } from 'antd';
import type { AlertProps } from 'antd'


function AntDAlert(props: TAntDAlert) {

  const [attrs, setAttrs] = useState<TAntDAlert | null>(null)

  useEffect(() => {
    const _props = { ...props }

    setAttrs({ ..._props })

  }, [props])


  return (
    <Alert
      {...attrs}
    />
  )
}


type TAntDAlert = AlertProps

export default AntDAlert