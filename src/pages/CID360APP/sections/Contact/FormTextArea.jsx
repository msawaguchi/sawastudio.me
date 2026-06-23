import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { FormField, FormTextAreaField } from './styles'

export function FormTextArea({ name, ...rest }) {
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
      <FormTextAreaField
        ref={inputRef}
        name={fieldName}
        defaultValue={defaultValue}
        rows="8"
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </FormField>
  )
}
