export function docsErrored(state = false, action) {
    switch (action.type) {
        case 'FETCH_DOCS_ERROR':
            return action.hasErrored;

        default:
            return state;
    }
}

export function docsLoading(state = false, action) {
    switch (action.type) {
        case 'FETCH_DOCS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function fetchDocuments(state = {}, action) {
    switch (action.type) {
        case 'FETCH_DOCS_SUCCESS':
            return {...state, data: action.payload}

        default:
            return state;
    }
}