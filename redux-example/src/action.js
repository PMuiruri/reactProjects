export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function incrementCounter(amount = 1){
	return{
		type: INCREMENT,
		amount: amount
	}
}

export function decrementCounter( amount = 1){
	return{
		type: DECREMENT,
		amount: amount
	}
}
