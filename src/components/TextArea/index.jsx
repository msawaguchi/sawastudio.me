import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { TextAreaContainer } from './styles'

export function TextArea({ name, ...rest }) {
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
      <TextAreaContainer
        ref={inputRef}
        defaultValue={defaultValue}
        rows="8"
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  )
}
