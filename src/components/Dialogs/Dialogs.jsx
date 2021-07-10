import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form"
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';

const Dialogs = (props) => {

  const state = props.dialogsPage

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));
  // const newMessageBody = state.newMessageBody

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody" 
          placeholder="Enter your message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
