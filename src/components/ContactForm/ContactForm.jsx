import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import ErrorMessage from "./ErrorMessage";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Це поле обов'язкове"),
    number: Yup.string()
      .min(7, "Мінімум 7 символів")
      .max(15, "Максимум 15 символів")
      .required("Це поле обов'язкове"),
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
            <Field className={s.formImput} id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="number">Number</label>
            <Field
              className={s.formImput}
              id="number"
              name="number"
              type="text"
            />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
