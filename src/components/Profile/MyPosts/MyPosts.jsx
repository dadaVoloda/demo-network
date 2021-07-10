import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form"
import {maxLengthCreator, required} from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props) =>  {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state
  // }

  let postsElements = [...props.posts]
    .reverse()
    .map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  // const newPostElement = React.createRef()

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
