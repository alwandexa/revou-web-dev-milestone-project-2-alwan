import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from 'antd';

import PersonalInformation from './PersonalInformation';

describe('PersonalInformation', () => {
    const [form] = Form.useForm();

    it('renders with default props', () => {
        render(<PersonalInformation form={form} />);

        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('renders form fields with correct names, labels and rules', () => {
        render(<PersonalInformation form={form} />);

        const nameField = screen.getByLabelText('Name');
        expect(nameField).toHaveFormValues({ Name: '' });
        expect(nameField).toHaveAttribute('rules', [{ type: 'string', required: true }]);

        const emailField = screen.getByLabelText('Email');
        expect(emailField).toHaveFormValues({ Email: '' });
        expect(emailField).toHaveAttribute('rules', [{ type: 'email', required: true }]);
    });

    it('renders gender radio options', () => {
        render(<PersonalInformation form={form} />);

        const maleRadio = screen.getByLabelText('Male');
        expect(maleRadio).toBeInTheDocument();
        expect(maleRadio).toHaveValue('Male');

        const femaleRadio = screen.getByLabelText('Female');
        expect(femaleRadio).toBeInTheDocument();
        expect(femaleRadio).toHaveValue('Female');
    });

    it('simulates name field input change', () => {
        render(<PersonalInformation form={form} />);

        const nameField = screen.getByLabelText('Name');
        fireEvent.change(nameField, { target: { value: 'John Doe' } });
        expect(nameField).toHaveValue('John Doe');
    });

    it('simulates email field input change', () => {
        render(<PersonalInformation form={form} />);

        const emailField = screen.getByLabelText('Email');
        fireEvent.change(emailField, { target: { value: 'john@doe.com' } });
        expect(emailField).toHaveValue('john@doe.com');
    });

    it('validates required name and email errors on submit', () => {
        render(<PersonalInformation form={form} />);

        const form2 = screen.getByRole('form');
        fireEvent.submit(form2);

        expect(screen.getByLabelText('Name')).toHaveErrorMessage('Name is required');
        expect(screen.getByLabelText('Email')).toHaveErrorMessage('Email is required');
    });
});
