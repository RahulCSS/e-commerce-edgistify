import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import  {RegisterUser}  from '../apicalls/user';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
    remember: boolean;
  }
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  
  const onFinish: FormProps<RegisterFormValues>['onFinish'] = async (values) => {
    const { confirmpassword ,remember, ...filtered } = values;
    const filteredValues = { ...filtered };
    try{
      messageApi.open({
        type: 'loading',
        content: 'Action in progress...',
        duration: 0.5,
      });
      const response = await RegisterUser(filteredValues); 
      if(response.success){
            messageApi.success('Registration Successful!, You can login now');
            setTimeout(() => {
              navigate('/login');
            },1000);
          }else{
            messageApi.error(response.message || 'An error occurred');
      }
    }catch(error){
      messageApi.error('An unexpected error occurred. Please try again.');
      console.log(error);
       
    }
      form.resetFields();
  };

  const onFinishFailed: FormProps<RegisterFormValues>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {contextHolder}
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold mb-4">Edgistify</h1>
    <p className="text-gray-500 mb-4">Register to experience us</p>
    <Form className='w-full max-w-sm'
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Full name" />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' },
        { type: 'email', message: 'The input is not a valid email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' },
        { min: 8, message: 'Password must be at least 8 characters long' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
        label="Confirm Password"
        name="confirmpassword"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}
      rules={[{ required: true, message: 'Accept terms & conditions' }]}>
      <Checkbox>Agree to Terms & Conditions </Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Sign up
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
  );
};


export default Register