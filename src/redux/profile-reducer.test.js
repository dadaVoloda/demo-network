// import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

// const state = {
//   posts: [
//     { id: 1, message: 'Hi, how are you?', likesCount: 11 },
//     { id: 2, message: "It's my first post", likesCount: 22 },
//     { id: 3, message: 'Bla bla bla', likesCount: 1 },
//     { id: 4, message: 'Dadada', likesCount: -3 },
//   ]
// }
// it('length of posts should be incremented', () => {
//   // 1. test data
//   const action = addPostActionCreator('it-kamasutra.com')
//   // 2. action
//   const newState = profileReducer({state},{action})
//   // 3. expectation
//   expect(newState.posts.length).toBe(5)
// })
// it('message of new post should be correct', () => {
//   // 1. test data
//   const action = addPostActionCreator('it-kamasutra.com')
//   // 2. action
//   const newState = profileReducer({state},{action})
//   // 3. expectation
//   expect(newState.posts[4].message).toBe('it-kamasutra.com')
// })
// it('after deleting length of messages should be decrement', () => {
//   // 1. test data
//   const action = deletePost(1)
//   // 2. action
//   const newState = profileReducer({state},{action})
//   // 3. expectation
//   expect(newState.posts.length).toBe(3)
// })
// it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
//   // 1. test data
//   const action = deletePost(1000)
//   // 2. action
//   const newState = profileReducer({state},{action})
//   // 3. expectation
//   expect(newState.posts.length).toBe(4)
// })