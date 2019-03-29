import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./style";

class SignUpForm extends React.Component {
  render() {
    const {
      classes,
      handleChangeField,
      email,
      password,
      formErrors,
      formValid,
      handleSubmit
    } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
            <FormControl
              margin="normal"
              required
              fullWidth
              error={!!formErrors.email}
            >
              <InputLabel htmlFor="emailSignUp">Email Address</InputLabel>
              <Input
                id="emailSignUp"
                name="email"
                autoComplete="email"
                onChange={handleChangeField}
                value={email}
              />
              <FormHelperText id="component-error-text">
                {formErrors.email}
              </FormHelperText>
            </FormControl>
            <FormControl
              margin="normal"
              required
              fullWidth
              error={!!formErrors.password}
            >
              <InputLabel htmlFor="passwordSignUp">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="passwordSignUp"
                autoComplete="current-password"
                onChange={handleChangeField}
                value={password}
              />
              <FormHelperText id="component-error-text">
                {formErrors.password}
              </FormHelperText>
            </FormControl>
            {/* <div className={classes.formErrors}>
              {Object.keys(formErrors).map((fieldName, i) => {
                if (formErrors[fieldName].length > 0) {
                  return (
                    <p key={i}>
                      {fieldName} {formErrors[fieldName]}
                    </p>
                  );
                } else {
                  return "";
                }
              })}
            </div> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!formValid}
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(SignUpForm);
