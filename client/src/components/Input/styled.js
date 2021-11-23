import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  margin: 0 100px 0 150px;

  &:after {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.5 0.418915C8.22391 0.418915 9.87721 1.10373 11.0962 2.32272C12.3152 3.54171 13 5.19501 13 6.91891C13 8.52891 12.41 10.0089 11.44 11.1489L11.71 11.4189H12.5L17.5 16.4189L16 17.9189L11 12.9189V12.1289L10.73 11.8589C9.59 12.8289 8.11 13.4189 6.5 13.4189C4.77609 13.4189 3.12279 12.7341 1.90381 11.5151C0.684819 10.2961 0 8.64282 0 6.91891C0 5.19501 0.684819 3.54171 1.90381 2.32272C3.12279 1.10373 4.77609 0.418915 6.5 0.418915V0.418915ZM6.5 2.41891C4 2.41891 2 4.41891 2 6.91891C2 9.41891 4 11.4189 6.5 11.4189C9 11.4189 11 9.41891 11 6.91891C11 4.41891 9 2.41891 6.5 2.41891Z' fill='%23333333'/%3E%3C/svg%3E%0A");
    width: 15px;
    height: 15px;
    top: 15px;
    left: 27px;
  }
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 15px 15px 15px 56px;

  background-color: #eeeeee;

  border: none;
  border-radius: 30px;

  &:active,
  &:focus {
    outline: none;
  }
`;
