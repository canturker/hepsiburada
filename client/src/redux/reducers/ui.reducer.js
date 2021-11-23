import { SET_MODAL } from '../actions/ui.action';

const initialState = {
  isShown: false,
  title: '',
  description: '',
  actions: [],
};

export const uiReducer = (ui = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { ...ui, ...action.payload };

    default:
      return ui;
  }
};
