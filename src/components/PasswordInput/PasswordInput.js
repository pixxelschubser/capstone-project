import { useState } from 'react';
import styled from 'styled-components/macro';
import { InputNotice } from 'components';

export const PasswordInput = ({
    label,
    name,
    placeholder,
    focusOut,
    dataNotFound,
    error,
    errorText,
    helpText,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password');
        }
    };

    return (
        <>
            <Label>
                {label}
                <Input
                    type={inputType}
                    autoComplete="off"
                    name={name}
                    placeholder={placeholder}
                    onBlur={event => focusOut(event)}
                    error={error}
                    dataNotFound={dataNotFound}
                    required
                ></Input>
                <IconButton
                    icon={showPassword}
                    onClick={event => togglePasswordVisibility(event)}
                />
            </Label>
            <InputNotice
                error={error}
                errorText={errorText}
                helpText={helpText}
            />
        </>
    );
};

const Label = styled.label`
    display: block;
    width: 100%;

    position: relative;

    font-size: 14px;
    font-weight: 100;

    border-bottom: 1px solid var(--black);

    margin-bottom: 25px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 0;

    font-size: 16px;
    font-weight: 500;

    background: none;

    &::placeholder {
        font-weight: 200;
        opacity: 0.3;
    }

    border: none;

    color: ${({ error }) => (error ? 'var(--red)' : 'var(--black)')};
`;

const IconButton = styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;

    position: absolute;
    bottom: 8px;
    right: 0;

    cursor: pointer;

    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: ${({ icon }) =>
        icon
            ? 'url("/assets/icons/visibility_off.svg")'
            : 'url("/assets/icons/visibility.svg")'};
`;
