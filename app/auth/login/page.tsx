'use client'

import { Button, Link, Stack, TextField } from '@mui/material'
import NextLink from 'next/link'
import { useActionState, useState } from 'react'
import login from './login'

export default function Login() {
  const [state, formAction] = useActionState(login, { error: '' })
  //use controlled state for Textfields to keep inputs typed displayed when there is a submit error
  const [textFieldsData, setTextFieldsData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTextFieldsData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          helperText={state.error}
          error={!!state.error}
          value={textFieldsData.email}
          onChange={handleChange}
        ></TextField>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          helperText={state.error}
          error={!!state.error}
          value={textFieldsData.password}
          onChange={handleChange}
        ></TextField>
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">
          Signup
        </Link>
      </Stack>
    </form>
  )
}
