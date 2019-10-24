import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import './App.css';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 }
};

class _FormComponent extends React.Component<any> {
  constructor(props: any) {
    super(props);

    this.showFormValue = this.showFormValue.bind(this);
  }

  showFormValue() {
    console.log(this.props.form.getFieldsValue());
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form layout='horizontal'>
          <Form.Item label='Field A' {...formItemLayout}>
            {getFieldDecorator('fieldA', {})(
              <Input placeholder='input placeholder' />
            )}
          </Form.Item>
          <Form.Item label='Field B' {...formItemLayout}>
            <Input placeholder='input placeholder' />
          </Form.Item>
          <Form.Item {...formItemLayout}>
            <Button onClick={this.showFormValue}>Get value</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const FormComponent = Form.create()(_FormComponent);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FormComponent />
      </div>
    );
  }
}

export default App;
