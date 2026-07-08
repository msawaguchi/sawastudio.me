import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import axios from 'axios'
import { RiLoader3Line, RiMailSendLine } from 'react-icons/ri'

import logotipo from '../../../../assets/images/cid360app/logotipo.png'
import getValidationErrors from '../../../../utils/getValidationErrors'
import { CONTACT, LINKS } from '../../content'
import {
  ButtonGroup,
  CenteredSectionContent,
  Container,
  LogotypeImage,
  LogotypeWrap,
  SecondaryButton,
  Section,
  SectionHeader,
  TextLink,
} from '../../styles'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'
import { ContactForm, SentMessage, SubmitButton } from './styles'

const API_PATH = 'https://sawastudio.me/fi44/services/sendMail.php'

export function Contact() {
  const formRef = useRef(null)
  const { t } = useTranslation()

  const [senderName, setSenderName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [buttonSent, setButtonSent] = useState(false)
  const [mailSent, setMailSent] = useState(false)

  const schema = Yup.object().shape({
    senderName: Yup.string()
      .required(t('contact.contact_required_name'))
      .min(3, t('contact.contact_invalid_name')),
    subject: Yup.string()
      .required(t('contact.contact_required_subject'))
      .min(5, t('contact.contact_invalid_subject')),
    email: Yup.string()
      .email(t('contact.contact_invalid_email'))
      .required(t('contact.contact_required_email')),
    message: Yup.string()
      .required(t('contact.contact_required_message'))
      .min(10, t('contact.contact_invalid_message')),
  })

  async function handleFormSubmit() {
    const formData = { senderName, subject, email, message }
    setButtonSent(true)

    try {
      await schema.validate(formData, {
        abortEarly: false,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setButtonSent(false)
        const errors = getValidationErrors(err)
        formRef.current.setErrors(errors)
        return
      }
    }

    try {
      const result = await axios.post(API_PATH, formData, {
        headers: { 'content-type': 'application/json' },
      })

      if (!result.data?.sent) {
        throw new Error(result.data?.message || 'Unknown error')
      }

      setSenderName('')
      setSubject('')
      setEmail('')
      setMessage('')
      setMailSent(true)
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || 'Unknown error'
      alert(
        t('contact.contact_failed') +
          message +
          t('contact.contact_failed_try_again'),
      )
    } finally {
      setButtonSent(false)
    }
  }

  return (
    <Section id="contato" $alt>
      <Container>
        <CenteredSectionContent>
          <SectionHeader>
            <h2>{CONTACT.title}</h2>
            <p>{CONTACT.text}</p>
          </SectionHeader>

          <p>
            <TextLink href={`mailto:${LINKS.contactEmail}`}>
              {LINKS.contactEmail}
            </TextLink>
          </p>

          <ContactForm ref={formRef} onSubmit={handleFormSubmit}>
            <FormInput
              id="name"
              name="senderName"
              type="text"
              placeholder={t('contact.contact_name')}
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <FormInput
              id="email"
              name="email"
              type="text"
              placeholder={t('contact.contact_email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="subject"
              name="subject"
              type="text"
              placeholder={t('contact.contact_subject')}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <FormTextArea
              id="message"
              name="message"
              placeholder={t('contact.contact_message')}
              onChange={(e) => setMessage(e.target.value)}
            />

            {mailSent ? (
              <SentMessage>{t('contact.contact_sended')}</SentMessage>
            ) : (
              <SubmitButton disabled={buttonSent} type="submit">
                {buttonSent ? (
                  <RiLoader3Line className="spin" aria-hidden="true" />
                ) : (
                  <RiMailSendLine aria-hidden="true" />
                )}
                {t('contact.contact_send')}
              </SubmitButton>
            )}
          </ContactForm>

          <ButtonGroup>
            <SecondaryButton href={LINKS.privacy}>
              {CONTACT.privacyLabel}
            </SecondaryButton>
            <SecondaryButton href={LINKS.terms}>
              {CONTACT.termsLabel}
            </SecondaryButton>
          </ButtonGroup>

          <LogotypeWrap $maxWidth="8rem">
            <LogotypeImage src={logotipo} alt="CID 360" />
          </LogotypeWrap>
        </CenteredSectionContent>
      </Container>
    </Section>
  )
}
