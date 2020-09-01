import React from 'react';
import data from './data.js';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Select, RadioGroup, } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import EditIcon from '@material-ui/icons/Edit';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 600,
        padding: theme.spacing(3),
        margin: theme.spacing(5)
    },
    buttonWrap: {
        textAlign: 'end'
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    radioGroup: {
        display: 'flex',
    },
    genderLabel: {
        alignSelf: 'center',
        marginRight: theme.spacing(1.5),
        fontSize: '18px'
    },
    menuItem: {
        textAlign: 'left',
    }
}))

const validationSchema = Yup.object().shape({
    OtherInfoDirectDepositAccountNumber: Yup.number().typeError('Please enter valid number'),
    OtherInfoDirectDepositRoutingNumber: Yup.number().typeError('Please enter valid number'),
    Phone1: Yup.number().typeError('Please enter valid phone number'),
    Phone2: Yup.number().typeError('Please enter valid phone number')
})

const EmployeeForm = () => {
    const [isView, setIsView] = useState(true);
    const [result, setResult] = useState()
    const classes = useStyles();
    const parsedData = JSON.parse(data, (_, value) => {
        return (value === null) ? '' : value
    })

    return (
        <Container className={classes.container}>
            <Paper
                elevation={3}
                className={classes.paper}
            >
                <Formik
                    initialValues={parsedData}
                    onSubmit={(values) => {
                        setResult(JSON.stringify(values, (_, value) => {
                            return (value === '') ? null : value
                        }))
                        setIsView(true)
                    }}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid className={classes.buttonWrap} item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    endIcon={<EditIcon />}
                                    onClick={() => setIsView(!isView)}
                                >
                                    {isView ? 'Edit' : 'Stop Editing'}
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    align="left"
                                >
                                    Personal Information:
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Field

                                    component={TextField}
                                    name="EmployeeNumber"
                                    label="Employee Number"
                                    variant="outlined"
                                    margin="dense"
                                    disabled
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    required
                                    component={TextField}
                                    name="FirstName"
                                    label="First Name"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="MiddleName"
                                    label="Middle Name"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    required
                                    component={TextField}
                                    name="LastName"
                                    label="Last Name"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    required
                                    component={TextField}
                                    name="EmailAddress"
                                    label="Email Address"
                                    type="email"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid
                                item xs={6}
                                className={classes.radioGroup}
                            >
                                <FormControl>
                                    <Field
                                        component={RadioGroup}
                                        name="GenderId"
                                        disabled
                                        row
                                    >
                                        <FormLabel
                                            className={classes.genderLabel}
                                            component="legend">
                                            Gender
                                            </FormLabel>
                                        <FormControlLabel
                                            value="Male"
                                            label="Male"
                                            control={<Radio color="primary" />}
                                            disabled
                                        />
                                        <FormControlLabel
                                            value="Female"
                                            label="Female"
                                            control={<Radio color="primary" />}
                                            disabled
                                        />
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Phone1"
                                    label="Phone #1"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <FormControl
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                >
                                    <InputLabel>Phone #1 Description</InputLabel>
                                    <Field
                                        className={classes.menuItem}
                                        disabled={isView}
                                        component={Select}
                                        type='number'
                                        name="Phone1Description"
                                        label="Phone #2 Description"
                                    >
                                        {[...Array(20).keys()].map((item, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={item + 1}
                                                >
                                                    {item + 1}
                                                </MenuItem>
                                            )
                                        })}
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Phone2"
                                    label="Phone #2"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <FormControl
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                >
                                    <InputLabel>Phone #2 Description</InputLabel>
                                    <Field
                                        disabled={isView}
                                        component={Select}
                                        type='number'
                                        name="Phone2Description"
                                        label="Phone #2 Description"
                                        className={classes.menuItem}
                                    >
                                        {[...Array(20).keys()].map((item, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    value={item + 1}
                                                >
                                                    {item + 1}
                                                </MenuItem>
                                            )
                                        })}
                                    </Field>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="HireDate"
                                    label="Hire Date"
                                    type="date"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="BirthDate"
                                    label="Birth Date"
                                    type="date"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="SecurityLevel"
                                    label="Sequrity Level"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="OtherInfoDirectDepositAccountNumber"
                                    label="Deposit Account Number"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="OtherInfoDirectDepositRoutingNumber"
                                    label="Deposit Routing Number"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="OtherInfoDirectDepositFinancialName"
                                    label="Deposit Financial Name"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    type="datetime-local"
                                    name="VacationDateFirstEligible"
                                    label="Vacation Date Eligible"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    align="left"
                                >
                                    Address:
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Address.Address1"
                                    label="Address #1"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Address.Address2"
                                    label="Address #2"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Address.City"
                                    label="City"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Address.State"
                                    label="State"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="Address.Zip"
                                    label="Zip"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    align="left"
                                >
                                    Physical Address:
                            </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="PhysicalAddress.Address1"
                                    label="Address #1"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="PhysicalAddress.Address2"
                                    label="Address #2"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="PhysicalAddress.City"
                                    label="City"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="PhysicalAddress.State"
                                    label="State"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={TextField}
                                    name="PhysicalAddress.Zip"
                                    label="Zip"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    disabled={isView}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isView}
                                >
                                    Save
                            </Button>
                            </Grid>
                        </Grid>
                        <p style={{ wordWrap: 'break-word' }}>{JSON.stringify(result)}</p>
                    </Form>
                </Formik >
            </Paper >
        </Container>
    )

}
export default EmployeeForm;