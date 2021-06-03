import { Field, reduxForm } from "redux-form";

const StreamCreate = () => {
  const renderInput = (formProps) => {
    console.log(formProps);
    return (
      <input
        {...formProps.input} // TAKES ALL PROPERTIES OF input OBJECT AND ASSIGNS THEM TO <input /> AS props
        // EQUIVALENT TO THIS:
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
      />
    );
  };

  return (
    <div>
      <form>
        <Field name="title" component={renderInput} />
        <Field name="description" component={renderInput} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
