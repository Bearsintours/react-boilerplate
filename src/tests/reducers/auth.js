import authReducer from '../../reducers/auth'

test('should set up default value', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
  });

test('should set uid for login', () => {
    const action = { type: 'LOGIN', uid: 'uid' }
    const state = authReducer(undefined, action)
    expect(state).toEqual({uid: 'uid'})
})

test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT' }
    const state = authReducer({ uid:'uid', action })
    expect(state).toEqual({})
})