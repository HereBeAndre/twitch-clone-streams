import { Field, reduxForm } from "redux-form";

// props come from redux-form
const StreamCreate = (props) => {
  const renderInput = (formProps) => {
    // console.log(formProps);
    return (
      <div className="field">
        {/* Gets passed from lines below (Field) */}
        <label>{formProps.label}</label>
        <input
          {...formProps.input} // TAKES ALL PROPERTIES OF input OBJECT AND ASSIGNS THEM TO <input /> AS props
          // EQUIVALENT TO THIS:
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
        />
      </div>
    );
  };

  console.log("PROPS", props);

  const onSubmit = (formValues) => {
    // redux-form takes care of e.preventDefault()
    console.log("ONSUBMIT", formValues);
  };

  return (
    <div>
      <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
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
  form: "streamCreate",
})(StreamCreate);
