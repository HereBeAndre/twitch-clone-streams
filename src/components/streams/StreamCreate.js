import { Field, reduxForm } from "redux-form";

const StreamCreate = () => {
  const renderInput = (formProps) => {
    console.log(formProps);
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

  return (
    <div>
      <form className="ui form">
        <Field name="title" component={renderInput} label="Enter title" />
        <Field
          name="description"
          component={renderInput}
          label="Enter description"
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
