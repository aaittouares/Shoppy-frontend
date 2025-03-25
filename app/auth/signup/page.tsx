'use client'

import { Button, Link, Stack, TextField } from '@mui/material'
import NextLink from 'next/link'
import { useActionState, useState } from 'react'
import createUser from './create-user'

export default function Signup() {
  const [state, formAction] = useActionState(createUser, { error: '' })
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
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          helperText={state.error}
          error={!!state.error}
          value={textFieldsData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Signup
        </Button>
        <Link component={NextLink} href="/auth/login" className="self-center">
          Login
        </Link>
      </Stack>
    </form>
  )
}
