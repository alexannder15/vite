import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
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
import { IAccount } from '../interfaces/Interfaces';
import { validateEmail } from '../validation/validators/validateEmail';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [account, setAccount] = useState<IAccount>({
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const [error, setError] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({ ...account, [event.target.name]: event.target.value });

    if (event.target.name == 'email')
      setError(event.target.value !== '' && !validateEmail(event.target.value));

    console.log(event.target.name);
    if (event.target.name == 'confirmPassword' && account.password !== event.target.value)
      setErrorConfirmPassword(true);
    else setErrorConfirmPassword(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('loginnnnnnn---------', account);
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
                Create your new account
              </Typography>
            </Grid>
            <Grid item container direction='column' spacing={2}>
              <Grid item>
                <TextField
                  required
                  error={error}
                  fullWidth
                  name='firstName'
                  label='Enter your first name'
                  type='text'
                  placeholder='First name'
                  variant='outlined'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeLogin(e)}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  error={error}
                  fullWidth
                  name='lastName'
                  label='Enter your last name'
                  type='text'
                  placeholder='Last name'
                  variant='outlined'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeLogin(e)}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  error={error}
                  fullWidth
                  name='email'
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
                <TextField
                  required
                  fullWidth
                  onCutCapture={(e) => e.preventDefault()}
                  onCopyCapture={(e) => e.preventDefault()}
                  onPasteCapture={(e) => e.preventDefault()}
                  error={errorConfirmPassword}
                  name='confirmPassword'
                  label='Confirm your password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm password'
                  variant='outlined'
                  autoComplete='off'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeLogin(e)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleClickShowConfirmPassword} edge='end'>
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button onClick={(e) => handleSubmit(e)} fullWidth variant='contained'>
                  Sign up
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
                Already have an account? <Link href='/login'>Login</Link>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}
