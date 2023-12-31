// `app/page.tsx` is the UI for the `/` URL
'use client'

import { Button, DatePicker } from 'antd'
import AntDsiSpin, { useAntDsiSpin } from '@/app/components/antDesign/spin'
import AntDsiButton, { useAntDsiButton } from '@/app/components/antDesign/button'
import AntDsiInput, { useAntDsiInput } from '@/app/components/antDesign/input'
import Link from 'next/link'


export default function AntDesign() {
  const [spin_tem, setTem_spin] = useAntDsiSpin()
  const [btn_tem, setTem_btn] = useAntDsiButton()
  const [input_tem, setInput_tem] = useAntDsiInput()

  return (
    <section className="ant-design">
      <Link href="/">Home</Link>
      <div className="spin">
        <AntDsiSpin {...spin_tem}>
          <div className="content" />
          <div className="content" />
          <div className="content" />
          <div className="content" />
          <div className="content" />
          <div className="content" />
        </AntDsiSpin>
        <br />
        <br />

        <Button
          type="primary"
          onClick={() => {
            setTem_spin({
              ...spin_tem,
              spinning: !spin_tem!.spinning,
            })
          }}
        >
          change spin status
        </Button>
      </div>
      <div className="btn">
        <AntDsiButton {...btn_tem} />
        <br />
        <AntDsiButton {...btn_tem} />
        <br />
        <AntDsiButton {...btn_tem}>adsfasdf</AntDsiButton>
      </div>
      <div className="input">
        <AntDsiInput {...input_tem} />
        <AntDsiInput {...input_tem} type="textarea" />
        <AntDsiInput {...input_tem} type="number" />
      </div>

      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </section>
  )
}

export const index = () => {
  return <div>index</div>
}
