import type { FormProps, FormInstance } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const Register = () => {
  
  const onFinish: FormProps<FormInstance>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed: FormProps<FormInstance>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
          name="username"
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
        name="password2"
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

    <Form.Item name="remember" valuePropName="unchecked" label={null}
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