import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import UserForm from './UserForm';

describe('<UserForm />', () => {
    it ('should render a form for user to input username and password', () => {
        const userform = render(<UserForm />)
        const form = userform.getByTestId('userform');
        const children = form.children.length
        expect(children).toBe(3)
    })

    it('should reset form', () => {
        const userform = render(<UserForm />);
        const btn = userform.getByTestId('button');
        const name = userform.getByTestId('name');
        const password = userform.getByTestId('password')
        password.value = 'jimmy';
        name.value = 'jimmy';
        expect(name.value).toBe('jimmy')
        expect(password.value).toBe('jimmy')
        fireEvent.click(btn);
        expect(name.value).toBe('')
        expect(password.value).toBe('')
       
    
        console.log(password.value)
    })


})