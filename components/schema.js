import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string().min(4).required('Nome é obrigatório'),
  username: Yup.string().min(2).required('Username é obrigatório'),
  email: Yup.string().email('Invalid email address').required('Email é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
})