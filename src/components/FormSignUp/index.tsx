import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
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
      <S.FormLink>
        {`Already have an account? `}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
