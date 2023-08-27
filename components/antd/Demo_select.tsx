import React, { useEffect, useState } from 'react'
import AntDSelect from '@/components/antd/select/index.tsx'

function Demo_select() {
  const [selectVal_tem, setSelectVal_tem] = useState('')
  const [select_tem, setSelect_tem] = useState({
    options: [
      // { label: '未選擇', value: '' },
    ],
    onChange: (val, options) => {
      setSelectVal_tem(val)
    }
  })



  useEffect(() => {

    setTimeout(() => {
      setSelect_tem({
        ...select_tem,
        options: [
          { label: 'apple', value: 'apple' },
          { label: 'apple2', value: 'apple2' },
        ]
      })
    }, 1.5 * 1000)

  }, [])

  return (
    <>
      <div>select value: {selectVal_tem}</div>
      <AntDSelect
        {...select_tem}
        value={selectVal_tem}
      />
    </>
  )
}

export default Demo_select
