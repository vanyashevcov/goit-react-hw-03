import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import ErrorMessage from "./ErrorMessage";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("This field is required"),
    number: Yup.string()
      .min(7, "Minimum 7 characters")
      .max(15, "Maximum 15 characters")
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };

        addContact(newContact);
        resetForm(); 
      }}
    >
      <Form>
        <div className={s.container}>
          <div className={s.labelContainer}>
            <label htmlFor="name">Name</label>
            <Field className={s.formInput} id="name" name="name" type="text" />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />

            <label htmlFor="number">Number</label>
            <Field
              className={s.formInput}
              id="number"
              name="number"
              type="text"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={s.errorMessage}
            />
          </div>
          <button type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
