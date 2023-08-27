import React, { useState } from 'react'
import AntDButton from '@/components/antd/button/index.tsx'

function Demo_button() {

  const [button_tem, setButton_tem] = useState({
    // type: 'primary', /** FIXME: 若為 default 可以刪除 */
  })

  return (
    <div>
      <AntDButton {...button_tem}>儲存</AntDButton>
    </div>
  )
}

export default Demo_button
