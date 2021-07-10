import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 11 },
        { id: 2, message: "It's my first post", likesCount: 22 },
        { id: 3, message: 'Bla bla bla', likesCount: 1 },
        { id: 4, message: 'Dadada', likesCount: -3 },
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo!!!' },
      ],
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
      ],
      newMessageBody: '',
    },
    sidebar: {
      friends: [
        {name: 'Alex', avatar: 'https://www.meme-arsenal.com/memes/62a900971fa27e84607390ba249efd0c.jpg'},
        {name: 'Olga', avatar: 'https://cdn140.picsart.com/330959057057201.jpg?type=webp&to=min&r=640'},
        {name: 'Ivan', avatar: 'http://hypeava.ru/uploads/posts/2018-03/1522402524_2.jpg'},
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }

}

export default store;
window.store = store;
