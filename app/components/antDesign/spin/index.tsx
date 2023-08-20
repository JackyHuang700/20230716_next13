// 'use client'
import { useEffect, useState } from 'react'
import { merge } from 'lodash-es'
import type { SpinProps } from 'antd'
import { Spin } from 'antd'

interface IAntDsiSpin extends SpinProps {}

export default function AntDsiSpin(props: IAntDsiSpin) {
  const [comProps, setComProps] = useState<IAntDsiSpin>(props)

  useEffect(() => {
    setComProps(props)
  }, [props])


  return <Spin {...comProps} >{props.children}</Spin>
}

export const useAntDsiSpin = (initData?: IAntDsiSpin) => {
  const _defaultData: IAntDsiSpin = {
    tip: '等待中...',
    size: 'default',
    spinning: true,
  }

  const [tem_spin, setTem_spin] = useState<IAntDsiSpin>(merge(_defaultData, initData))

  return [tem_spin, setTem_spin]
}
