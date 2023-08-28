'use client'

import React, { useState } from 'react'

import Demo_input from '@/components/antd/Demo_input'
import Demo_radio from '@/components/antd/Demo_radio'
import Demo_button from '@/components/antd/Demo_button'
import Demo_switch from '@/components/antd/Demo_switch'
import Demo_select from '@/components/antd/Demo_select'
import Demo_spin from '@/components/antd/Demo_spin'
import Demo_alert from '@/components/antd/Demo_alert'
/* // import { Input } from 'antd'; */


function AntDDemo() {





  return (
    <div>
      <h5>antd demo</h5>

      <Demo_input />
      <Demo_radio />
      <Demo_button />
      <Demo_switch />
      <Demo_select />
      <Demo_spin />
      <Demo_alert />

    </div>
  )
}

export default AntDDemo
