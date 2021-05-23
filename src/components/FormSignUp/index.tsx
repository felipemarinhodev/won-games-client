import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'

import { FormWrapper, FormLink } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        type="text"
        placeholder="Name"
        icon={<AccountCircle />}
      />
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        icon={<Email />}
      />
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        icon={<Lock />}
      />
      <TextField
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>
      <FormLink>
        {`Already have an account? `}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
