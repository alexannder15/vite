import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { ILogin } from '../../domain/Interfaces';
import { validateEmail } from '../../validation/validators/validateEmail';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<ILogin>({ password: '', username: '' });
  const [error, setError] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [event.target.name]: event.target.value });

    if (event.target.name == 'username')
      setError(event.target.value !== '' && !validateEmail(event.target.value));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('loginnnnnnn---------', login);
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Grid
          container
          spacing={2}
          direction='column'
          justifyContent='center'
          style={{ minHeight: '100vh' }}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            <Grid
              item
              mb={2}
              container
              justifyContent='center'
              direction='column'
              alignItems='center'
              sx={{ width: '100%', maxWidth: 500 }}
            >
              <Typography variant='h5' gutterBottom>
                Log into your account
              </Typography>
            </Grid>
            <Grid item container direction='column' spacing={2}>
              <Grid item>
                <TextField
                  required
                  error={error}
                  fullWidth
                  name='username'
                  label={error ? 'Enter a valid email' : 'Enter your email'}
                  type='email'
                  placeholder='Email address'
                  variant='outlined'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeLogin(e)}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Enter your password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  variant='outlined'
                  autoComplete='off'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeLogin(e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleClickShowPassword} edge='end'>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox defaultChecked={check} />}
                  label='Trust this device'
                />
              </Grid>
              <Grid item>
                <Button onClick={(e) => handleSubmit(e)} fullWidth variant='contained'>
                  Sign In
                </Button>
              </Grid>
            </Grid>

            <Grid
              item
              mt={4}
              container
              justifyContent='center'
              direction='column'
              alignItems='center'
              sx={{ width: '100%', maxWidth: 500 }}
            >
              <Typography mt={1} variant='caption' gutterBottom>
                Need an account? <Link href='/register'>Sign up here</Link>
              </Typography>
              <Typography mt={1} variant='caption' gutterBottom>
                Forgot your <Link href='/forgot-password'>password?</Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}
