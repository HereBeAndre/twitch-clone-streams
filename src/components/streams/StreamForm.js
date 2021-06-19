import { Field, reduxForm } from "redux-form";

const renderError = ({ touched, error }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const validateForm = (formValues) => {
  const errors = {};
  // errors work due to same 'title' and 'description' of the Fields above
  if (!formValues.title) {
    errors.title = "Please input a valid title";
  }
  if (!formValues.description) {
    errors.description = "Please input a valid description";
  }
  return errors;
};

const renderInput = (formProps) => {
  const className = `field ${
    formProps.meta.touched && formProps.meta.touched && "error"
  }`;
  return (
    <div className={className}>
      {/* Gets passed from lines below (Field) */}
      <label>{formProps.label}</label>
      <input
        {...formProps.input} // TAKES ALL PROPERTIES OF input OBJECT AND ASSIGNS THEM TO <input /> AS props
        // EQUIVALENT TO THIS:
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
        autoComplete="off"
      />
      {renderError(formProps.meta)}
    </div>
  );
};

// props come from redux-form
const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    // redux-form takes care of e.preventDefault()
    props.onSubmit(formValues);
  };

  return (
    <div>
      <form className="ui form error" onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="title" component={renderInput} label="Enter title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "StreamForm",
  validate: validateForm,
})(StreamForm);
