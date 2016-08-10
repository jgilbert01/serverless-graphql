import { GET_GROUPS, GET_GROUP, UPDATE_GROUP} from '../actions/constants';

const INITIAL_STATE = { all: [], group: null, currentGroup: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_GROUPS:
      return { ...state, all: action.payload.data.groups };
    case GET_GROUP:
      return { ...state, group: action.payload.data.group };
    case UPDATE_GROUP:
      return { ...state, currentGroup: action.payload.data.group };
    default:
      return state;
  }
}
