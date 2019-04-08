import { ADD_COMMENT } from './actions'
import { REMOVE_COMMENT } from './actions'
import { EDIT_COMMENT } from './actions'
import { THUMB_DOWN_COMMENT } from './actions'
import { THUMB_UP_COMMENT } from './actions'


//Akcja opisująca dodawanie nowych komentarzy:
function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];
        case REMOVE_COMMENT:
            return [{
                comments: state.comments.filter(comment => comment.id !== action.id) //comments: (tabl comments przyjmuje od nowa)
            }];
        case EDIT_COMMENT:
            state.comments.map((comment) => {
                if (comment.id !== action.id) {
                    return comment;
                } else {
                    comment.text = action.text;
                    return comment;
                }
            })
            return [{
                comments
            }];
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes + 1
                    }
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes - 1
                    }
                }
                return comment;
            });
        default:
            return state;
    }
}

export default { comments }