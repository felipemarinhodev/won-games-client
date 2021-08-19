import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import React from 'react'
import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        disabled
        name="email"
        type="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue="johndoe@gmail.com"
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        placeholder="Type your password"
      />
      <TextField
        name="new_password"
        type="password"
        label="New password"
        placeholder="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
