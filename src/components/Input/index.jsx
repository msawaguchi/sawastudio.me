import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { InputContainer } from './styles'

export function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputContainer ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span className="error">{error}</span>}
    </>
  )
}
