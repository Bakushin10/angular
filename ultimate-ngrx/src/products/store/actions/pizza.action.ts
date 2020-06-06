import { Action } from '@ngrx/store'

import { Pizza } from "../../models/pizza.model"

// load pizzas 
export const LOAD_PIZZAS = '[Products] Load Pizzas'
export const LOAD_PIZZAS_FAIL = '[Products] Load Fail'
export const LOAD_PIZZAS_SUCCESS = '[Products] Load success'

export class LoadPizzas implements Action{
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action{
    readonly type = LOAD_PIZZAS_FAIL;
    //constructor return response 
    constructor(public payload:any){}
}

export class LoadPizzasSuccess implements Action{
    readonly type = LOAD_PIZZAS_SUCCESS;
    //constructor return response
    constructor(public payload: Pizza[]){}
}

// actions types
// set this in reducer action 
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess