import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'

function App() {
  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField required label="メールアドレス" type="email" />
        <TextField required label="お名前" />
        <TextField required label="パスワード" type="password" />
        <Button color="primary" variant="contained" size="large">
          作成
        </Button>
      </Stack>
    </Container>
  )
}

export default App