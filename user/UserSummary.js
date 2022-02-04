import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import PasswordIcon from '@material-ui/icons/Password';
import Label from '../../Label';

const CustomerInvoicesSummary = (props) => (
  <Card {...props}>
    <CardHeader title="Details" />
    <Divider />
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Username
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              mironvitold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              First Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Miron
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Last Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Vitold
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Type
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Manager
            </Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Email Address
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              mironvitold@gmail.com <Label color="success">Verified</Label>
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Phone Number
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              +91 98765 43210
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Company
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Technoduce
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Created Date
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              24/11/2021 10:15 PM
            </Typography>
          </TableCell>
        </TableRow>        
      </TableBody>
    </Table>
    <Box
      sx={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        p: 1
      }}
    >
      <Button
        color="inherit"
        startIcon={<PasswordIcon fontSize="small" />}
        variant="text"
      >
        Reset Password
      </Button>
    </Box>
  </Card>
);

export default CustomerInvoicesSummary;
