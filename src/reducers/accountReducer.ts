import {ActionTypes} from '../helper/Constants';

export interface AccountState {
  cardInformation: {
    name: string;
    cardNumber: string;
    expired: string;
    cvv: string;
    isFreeze: boolean;
  };
  limitPayment: undefined | number;
  balance: number;
}

const initialState: AccountState = {
  cardInformation: {
    name: '',
    cardNumber: 'XXXXXXXXXXXXXXXX',
    expired: '00/00',
    cvv: 'XXX',
    isFreeze: false,
  },
  limitPayment: 5000,
  balance: 0,
};

const accountReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CARD_INFORMATION: {
      return {
        ...state,
        cardInformation: action.value,
      };
    }
    case ActionTypes.UPDATE_BALANCE: {
      return {
        ...state,
        balance: action.value,
      };
    }
    case ActionTypes.UPDATE_LIMIT_PAYMENT: {
      return {
        ...state,
        limitPayment: action.value,
      };
    }
    case ActionTypes.TOGGLE_FREEZE_STATUS: {
      const cardInformation = {
        ...state.cardInformation,
        isFreeze: action.value,
      };
      return {
        ...state,
        cardInformation,
      };
    }
    default:
      return state;
  }
};

export default accountReducer;
