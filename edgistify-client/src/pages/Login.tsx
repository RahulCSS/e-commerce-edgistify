import type { FormProps, FormInstance } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { NavLink } from 'react-router-dom';
import { LoginUser } from '../apicalls/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<FormInstance>['onFinish'] = async (values) => {
        try{
          messageApi.open({
            type: 'loading',
            content: 'Action in progress...',
            duration: 0.5,
          });
          const response = await LoginUser(values); 
          if(response.success){
                messageApi.success('Login Successful!');
                localStorage.setItem('token', response.userData.token);
                setTimeout(() => {
                  navigate('/');
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
  const onFinishFailed: FormProps<FormInstance>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {contextHolder}
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold mb-4">Edgistify</h1>
    <p className="text-gray-500 mb-4">Enter your email and password to login</p>
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

    <Form.Item name="remember" valuePropName="checked" label={null}
      rules={[{ required: true, message: 'Please Check' }]}>
      <Checkbox>I'm not a bot</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Log in
      </Button>
    </Form.Item>
  </Form>
  <p className="text-gray-500 mb-4">Not a Member, 
    <NavLink to="/register" 
            className="text-blue-500 hover:text-blue-700 hover:underline 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Signup 
            </NavLink> 
            to experience us
            </p>
  </div>
  </div>
  );
};


export default Login