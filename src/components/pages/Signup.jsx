import Form from "../Form";
import classes from "../../styles/Signup.module.css";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />

        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />

          <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
        </Form>
      </div>
    </>
  );
}
