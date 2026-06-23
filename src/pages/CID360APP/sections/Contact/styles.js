import styled, { keyframes } from 'styled-components'
import { Form } from '@unform/web'

const colors = {
  text: '#25313A',
  textMuted: '#66737D',
  primary: '#3D9CB3',
  primaryDark: '#2F8FA7',
  border: '#DFE6EC',
  bg: '#ffffff',
  error: '#c53030',
  success: '#2F8FA7',
}

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 32rem;
  margin-top: 1.5rem;
  text-align: left;
`

const fieldBase = `
  width: 100%;
  border-radius: 10px;
  background: ${colors.bg};
  padding: 0.75rem 1rem;
  border: 1px solid ${colors.border};
  color: ${colors.text};
  font-size: 0.9375rem;
  font-weight: 400;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${colors.textMuted};
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(61, 156, 179, 0.15);
  }
`

export const FormInputField = styled.input`
  ${fieldBase}
  height: 2.75rem;
`

export const FormTextAreaField = styled.textarea`
  ${fieldBase}
  min-height: 9rem;
  resize: vertical;
  line-height: 1.5;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  .error {
    color: ${colors.error};
    font-size: 0.8125rem;
    font-weight: 600;
  }
`

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 700;
  border: 2px solid transparent;
  background: ${colors.primary};
  color: ${colors.bg};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: ${colors.primaryDark};
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.125rem;
  }

  .spin {
    animation: ${spin} 1s linear infinite;
  }
`

export const SentMessage = styled.p`
  && {
    margin-top: 0.5rem;
    color: ${colors.success};
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
  }
`
