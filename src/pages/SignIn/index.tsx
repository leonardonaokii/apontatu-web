import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content } from './styles';

import logoImg from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ login: data.email, password: data.password });

        navigate('/timeKeeping');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao fazer login, verifique as credenciais.',
          });
        }
      }
    },
    [signIn, addToast, navigate],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} placeholder={undefined} 
        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <img src={logoImg} alt="Apontatu" />
          <Input name="email" icon={FiMail} placeholder="E-mail" type="text" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/signup">
          <FiLogIn />
          Criar Conta
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
