export const logger = store => next => action => {
    if (typeof action == 'functon') {
        action(store.dispatch, store.getState)
    } else {
    console.log('dispatch', store.getState())
    next(action)
    console.log('after dispatch', store.getState())
    }
}

// Getting an Error that says invalid typeof comparison value. Checked the solution code and they seem to be identical so I'm not sure whats wrong. 