export const UI = '[UI]';

export const SET_MODAL = `${UI} SET MODAL`;

export const setModal = ({ modal }) => ({
  type: SET_MODAL,
  payload: modal,
});
