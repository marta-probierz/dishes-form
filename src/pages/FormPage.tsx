import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Field, reduxForm } from "redux-form";
import { TextField, FormControl, Select, InputLabel, FormHelperText, Box, Grid } from "@material-ui/core/";
import Container from "@mui/material/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import sendDataToApi from "../service/sendDataToApi";
import normalizePreparationTime from "../utils/normalizePreparationTime";
import { Footer } from "../components/Footer";
import "../style/FormPage.style.scss";

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    "name",
    "preparation_time",
    "type",
    "no_of_slices",
    "diameter",
    "spiciness_scale",
    "slices_of_bread",
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "This field is required";
    }
  });
  return errors;
};

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    style={{ minWidth: 197 }}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl error={touched && error} style={{ minWidth: 197 }}>
    <InputLabel htmlFor="type-native-simple">Dish Type</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: "type",
        id: "type-native-simple",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const FormPage = (props) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState({ type: "" });
  const { handleSubmit, pristine, submitting, classes } = props;

  const HandleType = (e) => {
    setSelected({
      type: e.target.value,
    });
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", height: "98vh" }}>
        <Grid container justifyContent="center" alignItems="center" style={{ height: "90vh" }}>
          <form className="dishes-form" onSubmit={handleSubmit(sendDataToApi)}>
            <div className="container-main">
              <Box mb={1}>
                <Field name="name" component={renderTextField} label={t`form.name`} />
              </Box>
              <Box mb={1}>
                <Field
                  name="preparation_time"
                  component={renderTextField}
                  label={t`form.preparation_time`}
                  normalize={normalizePreparationTime}
                />
              </Box>
              <Box mb={1}>
                <Field
                  classes={classes}
                  name="type"
                  component={renderSelectField}
                  label={t`form.type`}
                  value={selected.type}
                  onChange={HandleType}
                >
                  <option value="" />
                  <option value={"pizza"}>{t`form.pizza`} 🍕</option>
                  <option value={"soup"}>{t`form.soup`} 🍜</option>
                  <option value={"sandwich"}>{t`form.sandwich`} 🥪</option>
                </Field>
              </Box>
              <Box borderRadius={5} component="div">
                {selected.type === "pizza" ? (
                  <>
                    <Box mb={1}>
                      <Field
                        name="no_of_slices"
                        component={renderTextField}
                        label={t`form.no_of_slices`}
                        type="number"
                      />
                    </Box>
                    <Box mb={1}>
                      <Field name="diameter" component={renderTextField} label={t`form.diameter`} type="number" />
                    </Box>
                  </>
                ) : (
                  ""
                )}
                {selected.type === "soup" ? (
                  <>
                    <Box mb={1}>
                      <Field
                        name="spiciness_scale"
                        component={renderTextField}
                        label={t`form.spiciness_scale`}
                        type="number"
                      />
                    </Box>
                  </>
                ) : (
                  ""
                )}
                {selected.type === "sandwich" ? (
                  <>
                    <Box mb={1}>
                      <Field
                        name="slices_of_bread"
                        component={renderTextField}
                        label={t`form.slices_of_bread`}
                        type="number"
                      />
                    </Box>
                  </>
                ) : (
                  ""
                )}
                {selected.type === "" ? (
                  <Box mb={1}>
                    <h4 className="empty-state">{t`form.select_empty`}</h4>
                  </Box>
                ) : (
                  ""
                )}
              </Box>

              <button type="submit" disabled={pristine || submitting} className="submit-button">
                {t`form.button`}
              </button>
            </div>
          </form>
          <ToastContainer autoClose={2000} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default reduxForm({
  form: "dishes-form",
  validate,
})(FormPage);
