import { Grid, Card, CardHeader, CardContent } from '@mui/material/';
import { Button,btnColor } from '../components/Button';

const LoginPage = () => {
  return (
    <div className="bg-defaultBg flex justify-center items-center min-h-[100vh]">
        <Grid container spacing={2} className='h-[80vh] max-w-[80vw]'>
            <Grid item xs={8}>
                Logo here
            </Grid>
            <Grid item xs={4} className='flex justify-center items-center'>
                <Card sx={{ minWidth: 450, minHeight: 400, padding: '14px', borderRadius: '10px' }}>
                    <CardHeader title="TrustCare Clinic Management System"/>
                    <CardContent sx={{ display: 'flex', flexFlow: 'column' }}>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='username'>Username</label>
                            <input type="text" id='username' className='border-1 rounded-md' placeholder='Enter Username' />
                        </div>
                        <div className='flex flex-col gap-1 mt-3'>
                            <label htmlFor='username'>Password</label>
                            <input type="text" id='username' className='border-1 rounded-md' placeholder='Enter Username' />
                        </div>
                        <div className='flex justify-end items-end mt-3'>
                            <Button text='Login' color={btnColor.success} />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default LoginPage;
