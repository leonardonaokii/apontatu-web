import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  date?: boolean;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, date, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isfocused, setIsFocused] = useState(false);
  const [isfilled, setIsFilled] = useState(false);
  const [dateInputType, setDateInputType] = useState('text');

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);

    if (date) {
      setDateInputType('date');
    }
  }, [date]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (date) {
      setDateInputType('text');
    }

    setIsFilled(!!inputRef.current?.value);
  }, [date]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container iserrored={!!error} isfilled={isfilled} isfocused={isfocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        type={date ? dateInputType : rest.type}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
