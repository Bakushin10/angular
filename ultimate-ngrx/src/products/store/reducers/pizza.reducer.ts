import * as fromPizza from '../actions/pizza.action';
import { Pizza } from '../../models/pizza.model'
import { ActionsSubject } from '@ngrx/store';

export interface PizzaState{
    data: Pizza[];
    loaded: boolean;
    loading: boolean
}

export const initialState: PizzaState = {
    data : [],
    loaded: false,
    loading: false
}

export function reducer(state = initialState, action: fromPizza.PizzasAction): PizzaState{
    switch(action.type){
        case fromPizza.LOAD_PIZZAS:{
            return{ ...state, loading:true }
        }
        case fromPizza.LOAD_PIZZAS_FAIL:{
            return{ ...state, loading:false, loaded: true }
        }
        case fromPizza.LOAD_PIZZAS_SUCCESS:{
            return{ ...state, loading:false, loaded: false}
        }
    }
    return state;
}