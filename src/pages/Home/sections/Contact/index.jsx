import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import axios from 'axios'
import { RiMailSendLine, RiLoader3Line } from 'react-icons/ri'
import GlitchClip from 'react-glitch-effect/core/Clip'

import getValidationErrors from '../../../../utils/getValidationErrors'
import { Divider } from '../../../../components/Divider'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { TextArea } from '../../../../components/TextArea'
import Translator from '../../../../components/Translator'
import { NeonContentContainer } from '../../../../components/NeonContentContainer'
import { ConstactContent, ContactContainer, Footer } from './styles'

const API_PATH = 'https://sawastudio.me/fi44/services/sendMail.php'

export function Contact() {
  const formRef = useRef(null)
  const { t } = useTranslation()

  const [senderName, setSenderName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [buttonsent, setButtonsent] = useState(false)
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

  const handleFormSubmit = async () => {
    const formData = { senderName, subject, email, message }
    setButtonsent(true)

    try {
      await schema.validate(formData, {
        abortEarly: false,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setButtonsent(false)
        const errors = getValidationErrors(err)
        formRef.current.setErrors(errors)
        return
      }
    }

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: formData,
    }).then((result) => {
      if (result.data.error) {
        alert(
          t('contact.contact_failed') +
            result.data.error +
            t('contact.contact_failed_try_again'),
        )
      }
    })

    setSenderName('')
    setSubject('')
    setEmail('')
    setMessage('')
    setMailSent(true)
    setButtonsent(false)
  }

  return (
    <>
      <ContactContainer id="contact">
        <Divider />
        <div className="hero-mask">
          <ConstactContent>
            <h1 className="h1-title">
              <Translator path="contact.contact" />
            </h1>
            <NeonContentContainer>
              <div>
                <p>
                  <Translator path="contact.contact_intro" />
                </p>

                <Form ref={formRef} onSubmit={handleFormSubmit}>
                  <Input
                    id="name"
                    name="senderName"
                    type="text"
                    placeholder={t('contact.contact_name')}
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    placeholder={t('contact.contact_email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t('contact.contact_subject')}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <TextArea
                    id="message"
                    name="message"
                    type="text"
                    placeholder={t('contact.contact_message')}
                    rows="8"
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  {mailSent ? (
                    <GlitchClip>
                      <h2 className="sentmessage">
                        <Translator path="contact.contact_sended" />
                      </h2>
                    </GlitchClip>
                  ) : (
                    <Button disabled={buttonsent} type="submit">
                      {buttonsent ? (
                        <RiLoader3Line className="iconbutton spin" />
                      ) : (
                        <RiMailSendLine className="iconbutton" />
                      )}
                      <Translator path="contact.contact_send" />
                    </Button>
                  )}
                </Form>
              </div>
            </NeonContentContainer>
          </ConstactContent>
        </div>
        <Footer />
      </ContactContainer>
    </>
  )
}
