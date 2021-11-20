import * as constrants from '../constants'

export interface IncrementEnthusiasm {
    type: constrants.INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm {
    type: constrants.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incrementEnthusuasm(): IncrementEnthusiasm {
    return {
        type: constrants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constrants.DECREMENT_ENTHUSIASM
    }
}