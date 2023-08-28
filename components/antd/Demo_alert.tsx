import React, { useState } from 'react'
import AntDAlert from '@/components/antd/alert/index'


function Demo_alert() {
  const [alert_tem, setAlert_tem] = useState({
    // type: 'success', // FIXME: 若為 Info 可以刪除
    message: 'Success Text',
    // description: 'asdfasdf', // FIXME:
    // closeIcon: true, // FIXME: 若為 false 可以刪除
  })

  return (


    <>
      <div>

        <div>
          <button onClick={() => {
            setAlert_tem({
              ...alert_tem,
              message: 'change message alert_____11',
            })
          }}>change message alert_____11</button>
        </div>
        <div>
          <button
            onClick={() => {
              setAlert_tem({
                ...alert_tem,
                message: 'change message alert_____22',
              })
            }}>change message alert_____22</button>
        </div>
      </div>
      <AntDAlert {...alert_tem} /></>

  )
}

export default Demo_alert
