import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Snackbar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // ✅ added

const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(15px)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  [theme.breakpoints.up('sm')]: {
    width: '420px',
  },
}));

export default function Authentication() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);
  const navigate = useNavigate(); // ✅ added

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
        navigate('/home'); // ✅ redirect to /home after login
      }
      if (formState === 1) {
        const result = await handleRegister(name, username, password);
        console.log("Registration message:", result);
        setUsername('');
        setPassword('');
        setName('');
        setMessage(result);
        setOpen(true);
        setError('');
        setFormState(0); // ✅ switch to login form after signup
      }
    } catch (err) {
      console.log(err);
      const msg = err.response?.data?.message || 'Something went wrong';
      setError(msg);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(/NewBg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card>
        <Avatar sx={{ m: '0 auto', bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            variant={formState === 0 ? 'contained' : 'outlined'}
            onClick={() => setFormState(0)}
          >
            Sign In
          </Button>
          <Button
            variant={formState === 1 ? 'contained' : 'outlined'}
            onClick={() => setFormState(1)}
          >
            Sign Up
          </Button>
        </Box>

        <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {formState === 1 && (
            <FormControl>
              <FormLabel sx={{ color: '#fff' }}>Full Name</FormLabel>
              <TextField
                id="name"
                value={name}
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
                InputProps={{ style: { color: '#fff' } }}
              />
            </FormControl>
          )}

          <FormControl>
            <FormLabel sx={{ color: '#fff' }}>Username</FormLabel>
            <TextField
              id="username"
              value={username}
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              required
              InputProps={{ style: { color: '#fff' } }}
            />
          </FormControl>

          <FormControl>
            <FormLabel sx={{ color: '#fff' }}>Password</FormLabel>
            <TextField
              id="password"
              value={password}
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              InputProps={{ style: { color: '#fff' } }}
            />
          </FormControl>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<Typography sx={{ color: '#fff' }}>Remember me</Typography>}
          />

          <Typography sx={{ color: 'red', textAlign: 'center' }}>{error}</Typography>

          <Button type="button" variant="contained" onClick={handleAuth}>
            {formState === 0 ? 'Login' : 'Register'}
          </Button>
        </Box>

        <Typography sx={{ textAlign: 'center', color: '#fff', mt: 2 }}>
          {formState === 0 ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Button
            variant="text"
            onClick={() => setFormState((prev) => (prev === 0 ? 1 : 0))}
            sx={{ color: '#90caf9' }}
          >
            {formState === 0 ? 'Sign Up' : 'Sign In'}
          </Button>
        </Typography>
      </Card>

      <Snackbar open={open} autoHideDuration={4000} message={message} onClose={() => setOpen(false)} />
    </Box>
  );
}
