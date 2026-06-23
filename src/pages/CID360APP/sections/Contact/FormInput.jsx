import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { FormField, FormInputField } from './styles'

export function FormInput({ name, ...rest }) {
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
    <FormField>
      <FormInputField
        ref={inputRef}
        name={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </FormField>
  )
}
