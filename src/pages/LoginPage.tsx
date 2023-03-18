import {
  BorderColor,
  Opacity,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
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
import { ILogin } from '../interfaces/Interfaces';
import { validateEmail } from '../validation/validators/validateEmail';
import LoginBackgoundImage from '../assets/LoginBackgroundImage.jpg';
import LogoBazarDeLaConfianza from '../assets/LogoBazarDeLaConfianza.png';

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

  const styles: React.CSSProperties = {
    backgroundColor: '#FFD4059B',
    backgroundImage: `url(${LoginBackgoundImage})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <Container maxWidth={false} style={styles}>
        <Container maxWidth='sm'>
          <Grid
            container
            direction='column'
            justifyContent='center'
            style={{ minHeight: '100vh' }}
          >
            <Paper elevation={2} sx={{ padding: 5, borderRadius: '33px' }}>
              <Grid justifyContent='center' container>
                <img src={`${LogoBazarDeLaConfianza}`} height='71px' />
              </Grid>
              <Grid
                item
                mb={2}
                container
                justifyContent='center'
                direction='column'
                alignItems='center'
                sx={{ width: '100%', maxWidth: 500 }}
              >
                <Typography
                  mt={4}
                  mb={2}
                  variant='h5'
                  style={{
                    color: '#724B97',
                    font: 'normal normal bold 35px Roboto',
                  }}
                >
                  Sistema de Convocatorias
                </Typography>
                {/* <Typography variant='caption' >
                    Bienvenido, por favor ingrese correo electrónico
                  </Typography> */}
              </Grid>
              <Grid item container direction='column' spacing={2}>
                <Grid item>
                  <TextField
                    required
                    error={error}
                    fullWidth
                    name='username'
                    label={
                      error
                        ? 'Ingresa un correo electrónico válido'
                        : 'Ingresa tu correo electrónico'
                    }
                    type='email'
                    placeholder='Correo electrónico'
                    variant='outlined'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChangeLogin(e)
                    }
                  />
                </Grid>
                {/* <Grid item>
                    <TextField
                      required
                      fullWidth
                      name='password'
                      label='Enter your password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      variant='outlined'
                      autoComplete='off'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeLogin(e)
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge='end'
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid> */}
                {/* <Grid item>
                    <FormControlLabel
                      control={<Checkbox defaultChecked={check} />}
                      label='Recordar este dispositovo'
                    />
                  </Grid> */}
                <Grid item>
                  <Button
                    onClick={(e) => handleSubmit(e)}
                    fullWidth
                    variant='contained'
                    style={{ backgroundColor: '#CB418F' }}
                  >
                    Iniciar sesión
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
                {/* <Typography mt={1} variant='caption' gutterBottom>
                    No tienes una cuenta? <Link href='/register'>Crear</Link>
                  </Typography>
                  <Typography mt={1} variant='caption' gutterBottom>
                    Olvidates tu <Link href='/forgot-password'>contraseña?</Link>
                  </Typography> */}
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </Container>
    </>
  );
}
