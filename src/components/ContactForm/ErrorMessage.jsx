import { Field } from "formik";

const ErrorMessage = ({ name, className }) => (
  <Field name={name}>
    {({ form }) =>
      form.touched[name] && form.errors[name] ? (
        <div className={className}>{form.errors[name]}</div>
      ) : null
    }
  </Field>
);

export default ErrorMessage;
