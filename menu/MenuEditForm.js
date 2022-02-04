import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, Card, Grid, TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import wait from '../../../utils/wait';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MenuEditForm = (props) => {
  const { customer, ...other } = props;
  console.log('Customer Data in Edit from', customer);
  const [statusData] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          name: customer.name || '',
          state: statusData || '',
        }}
        validationSchema={Yup
          .object()
          .shape({
            name: Yup
              .string()
              .max(255)
              .required('Name is required'),
            state: Yup.string().max(255)
          })}
        onSubmit={async (values, { resetForm, setErrors, setStatus, setSubmitting, }) => {
          try {
            // NOTE: Make API request
            await wait(500);
            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
            axios.put(`https://mi.duceapps.com/api/v1/menu/${customer.id}`, values);
            console.log('FormValues', values);
            toast.success('Menu updated!');
            navigate('/dashboard/menu');
          } catch (err) {
            console.error(err);
            toast.error('Something went wrong!');
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (

          <form
            onSubmit={handleSubmit}
            {...other}
          >
            <Card>
              <Box sx={{ p: 3 }}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      defaultValue={values.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <FormControl component="fieldset" name="state">
                      <FormLabel component="legend">Status</FormLabel>
                      <RadioGroup
                        row aria-label="Status"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                      >
                        <FormControlLabel name="state" value="Active" control={<Radio />} label="Active" />
                        <FormControlLabel
                          name="state"
                          value="InActive"
                          control={<Radio />}
                          label="InActive"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item />
                </Grid>
                <Box sx={{ mt: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                  >
                    Update Menu
                  </Button>
                </Box>
              </Box>
            </Card>
          </form>
        )}
      </Formik>
    </>
  );
};

MenuEditForm.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default MenuEditForm;
