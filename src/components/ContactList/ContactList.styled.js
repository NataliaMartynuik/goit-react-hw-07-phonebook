import styled from 'styled-components';

export const Wraper = styled.ul`
   display: flex;
   gap: 10px;
   text-align: center;
   flex-direction: column;
   padding: 0;
   list-style: none;

   
`

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-top: 4px;
    width: 400px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    padding-left: 15px;
`

export const ContactText = styled.p`
    font-size: 16px;
    font-weight: 600;

`

export const DelButton = styled.button`
    border: none;
    margin-right: 10px;
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
`

export const Text = styled.p`
    font-size: 20px;

`