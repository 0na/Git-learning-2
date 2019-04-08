import uuid from 'uuid';
//Action types
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


//Add comment
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
//Edit comment
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

//Remove comment
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
//Thumb up
function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}
//Thumb down
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

export {
    addComment,
    removeComment,
    editComment,
    thumbUpComment,
    thumbDownComment
}