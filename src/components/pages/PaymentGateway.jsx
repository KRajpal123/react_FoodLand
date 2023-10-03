import Tab from '@mui/material/Tab';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControlLabel, Checkbox, Button, TextField } from '@mui/material';

// search field imports 
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// Dialog Box imports from mui
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';



// vertically tab panel functions
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// ================= search icon field 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function VerticalTabs() {

  // Tab panel value
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // cash on delivery
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // used for dialog box
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  // placeOrder()
  // .then(() => {
  //   handleDialogOpen();
  // })
  // .catch((error) => {
  //   console.error(error);
  // });


  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#f8ab98', display: 'flex', height: 'auto', maxWidth: '800px', margin: 'auto', mt: 5 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'green', background: '#fae4b2' }}
      >
        <Tab label="Pay on Delivery" {...a11yProps(0)} sx={{ borderBottom: '1px solid green' }} />
        <Tab label="UPI" {...a11yProps(1)} sx={{ borderBottom: '1px solid green' }} />
        <Tab label="Wallets" {...a11yProps(2)} sx={{ borderBottom: '1px solid green' }} />
        <Tab label="Credit/Debit Card" {...a11yProps(3)} sx={{ borderBottom: '1px solid green' }} />
        <Tab label="Pay Later" {...a11yProps(4)} sx={{ borderBottom: '1px solid green' }} />
        <Tab label="Net Banking" {...a11yProps(5)} sx={{ borderBottom: '1px solid green' }} />
      </Tabs>

      {/*============= cash on delivery ======= */}
      <TabPanel value={value} index={0}>
        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="Cash on Delivery"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Scan and pay via upi on delivery, Ask delivery parter for details
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'onClick={handleDialogOpen} > Proceed to Pay</Button>
            )
          }
        </div>

        {/* dialog box text show while user place the order  */}

        <Dialog open={dialogOpen} onClose={() =>setDialogOpen(false)}>
          <DialogTitle>order successfully placed</DialogTitle>
          <DialogContent>
          <DialogContentText>
           Bawarchi restaurant Preparing your order.
          </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={() =>setDialogOpen(false)}>OK</Button>
            {/* ==========redirecting the user to tracking page when he clicks ========== */}
            <Link to='/Track'>
            <Button>Track your Order</Button>
            </Link>
          </DialogActions>
        </Dialog>

      </TabPanel>

      {/* ==========Uinified Payment Interface ===== */}
      <TabPanel value={value} index={1}>

        <Box sx={{ width: '500px', maxWidth: '100%' }}>
          <Typography variant='h6' mb={2}>UPI ID</Typography>
          <TextField fullWidth label={'e.g.rajpal@upi'} size={'small'} />
          <Typography variant='subtitle3'>A collect request will be sent to this UPI</Typography>
        </Box>
      </TabPanel>

      {/* ========== Wallet ======== */}
      <TabPanel value={value} index={2}>

        {/* =========paytm ======== */}
        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="Paytm"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 10% cashback upto 100rs order above 999.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>

        {/*=============== Amazon Pay =========== */}
        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="Amazon Pay"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 1% cashback upto 10rs order above 99.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>

        {/* ==============Phone Pay ============== */}

        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="Phone Pay"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 5% cashback on order above 299.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>

        {/* ======================== Mobikwick ================== */}
        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="MobiKwik"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 15% discount on order above 1000.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>

        {/*=========== Free Charge ========== */}

        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="FreeCharge"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 10% discount on order above 599.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>
      </TabPanel>

      {/*============ credit / Debit Card details ========= */}
      <TabPanel value={value} index={3}>
        <Box sx={{ width: '500px', maxWidth: '100%' }}>
          <Typography variant='h6' mb={2}>Credit / Debit Card details</Typography>
          <TextField fullWidth label={'Card Number'} size={'small'} />
        </Box>
        <Box mt={3} display={'flex'} justifyContent={'space-between'}>
          <TextField label={'Expiry Date'} size={'small'} mt={3} />
          <TextField label={'CVV'} size={'small'} mt={3} />
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Checkbox />
          <Typography>Securely save this card for future payments</Typography>
        </Box>
        <Button variant='contained'>Proceed to Pay</Button>
      </TabPanel>

      {/* =========== pay later option ========= */}
      <TabPanel value={value} index={4}>
        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="LazyPay"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 10% cashback upto 100rs order above 999.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>

        <div className='POD'>
          <div className='COD'>
            <FormControlLabel
              control={<Checkbox checked={isChecked}
                onChange={handleCheckboxChange}
                size={'small'}
              />}
              label="Simpl"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse',
                padding: '5px 20px',
              }}
            />
            <Typography variant='subtitle2'
              sx={{ fontWeight: '200px', margin: 'auto', width: '550px' }}
            >
              Get 10% cashback upto 100rs order above 999.
            </Typography>
          </div>
          {
            isChecked && (
              <Button variant='contained'> Proceed to Pay</Button>
            )
          }
        </div>
      </TabPanel>

      {/* ============Net Banking Options =========== */}
      <TabPanel value={value} index={5}>
        <Box display={'flex'} justifyContent={'space-between'} mb={2}>
          <Typography>SBI</Typography>
          <Typography>Axis</Typography>
          <Typography>PNB</Typography>
          <Typography>ICICI</Typography>
        </Box>

        <Typography>More Banks</Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </TabPanel>
    </Box>
  );
}