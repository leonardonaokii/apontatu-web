import {
  FiMail,
  FiLock,
  FiUser,
  FiUnlock,
  FiLogIn,
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { useToast } from '../../hooks/toast';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.png';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface SignUpFormData {
  fullName: string;
  login: string;
  password: string;
  password_confirmation: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const navigate = useNavigate();


  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          fullName: Yup.string().required('Nome completo obrigatório'),
          login: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatória.')
            .min(5, 'No mínimo 6 dígitos.'),
          password_confirmation: Yup.string()
            .required('Confirmação obrigatória')
            .oneOf([Yup.ref('password')], 'Confirmação Incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          login,
          password,
          fullName,
        } = data;

        const userData = {
          login,
          password,
          fullName,
        };

        const user = await api.post('/user', userData);

        navigate('/');

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
          description: 'Você já pode fazer seu logon no Apontatu!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(errors);

          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Apontatu" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="fullName"
            icon={FiUser}
            placeholder="Nome Completo"
            type="text"
          />
          <Input name="login" icon={FiMail} placeholder="E-mail" type="text" />
          <Input
            name="password"
            icon={FiUnlock}
            placeholder="Senha"
            type="password"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            placeholder="Confirmar Senha"
            type="password"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiLogIn />
          Fazer Login
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
