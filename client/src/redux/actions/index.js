import axiosInstance from "../../core/api";


const FETCH_DOCS_SUCCESS = "FETCH_DOCS_SUCCESS";
const FETCH_DOCS_ERROR = "FETCH_DOCS_ERROR";
const FETCH_DOCS_LOADING = "FETCH_DOCS_LOADING";

export function docsErrored(bool) {
    return {
        type: 'FETCH_DOCS_ERROR',
        hasErrored: bool
    };
}

export function docsLoading(bool) {
    return {
        type: 'FETCH_DOCS_LOADING',
        isLoading: bool
    };
}

/* export function fetchDocs(items) {
    return {
        type: 'ITEMS_FETCH_DOCS_SUCCESS',
        payload: items
    };
} */

export function docsFetchData() {
    return (dispatch) => {
        //dispatch(itemsIsLoading(true));

        axiosInstance.get('/getdocument')
            .then((response) => {
                console.log("thunk fetching data");
                console.log(response);
                dispatch({
                    type: FETCH_DOCS_SUCCESS,
                    payload: response.data
                });
               /*  if (!response.ok) {
                    throw Error(response.statusText);
                }
                 
                dispatch(itemsIsLoading(false));

                return response; */
            })
            //.then((response) => response.json())   /// required for fetch
            //.then((items) => dispatch(fetchDocs(items.data)))
            //.catch(() => dispatch(itemsHasErrored(true)));
    };
}