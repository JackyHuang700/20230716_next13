// 'use client'

import { useEffect, useState } from 'react'
import { merge } from 'lodash-es'
import type { ButtonProps } from 'antd'
import { Button } from 'antd'

type AntDsiSpin  =  ButtonProps & {
  text?: string
}

export default function AntDsiSpin(props: AntDsiSpin) {
  const [comProps, setComProps] = useState<AntDsiSpin>(props)

  useEffect(() => {
    setComProps(props)
  }, [props])


  return <Button {...comProps}>
    {
      props.children? (props.children) : (
        props.text
      )
    }
  </Button>
}

export const useAntDsiButton = (initData?: AntDsiSpin) => {
  const _defaultData: AntDsiSpin = {
    loading: false,
    text: '送出',
    type: 'primary',
  }

  const [tem_btn, setTem_btn] = useState<AntDsiSpin>(merge(_defaultData, initData))

  return [tem_btn, setTem_btn]
}
