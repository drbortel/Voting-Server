export function setEntries(state, entries) {
    return state.set('entries', entries);
}

import {List} from 'immutable';

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}