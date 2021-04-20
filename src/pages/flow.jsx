import React, { Component } from 'react';
import { Table, Button, Input, InputNumber, Modal } from 'antd';

const { TextArea } = Input;
class Flow extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    // this.fetchData();
  }

  async fetchData() {
    const { dispatch } = this.props;
    const list = await dispatch({
      type: 'flow/fetch',
    });
    this.setState({
      list: list.map(el => {
        return { ...el, valueText: el.values.join('\n') };
      }),
    });
  }

  handleChange(index, name, value) {
    const { list } = this.state;
    const item = list[index];
    switch (name) {
      case 'valueText':
      case 'percent':
        item[name] = value;
        break;
      case 'submit':
        this.handleSubmit(item, '提交数据');
        break;
      default:
        break;
    }
    const valueStatus = value === 1;
    if (name === 'status') {
      this.handleSubmit(
        { ...item, status: valueStatus ? 2 : 1 },
        valueStatus ? '停用流量控制' : '启用流量控制'
      );
    } else if (name === 'dyeing') {
      this.handleSubmit(
        { ...item, dyeing: valueStatus ? 2 : 1 },
        valueStatus ? '停用流量染色' : '启用流量染色'
      );
    }
  }

  handleSubmit = (item, tip) => {
    Modal.confirm({
      title: `${tip}`,
      content: `确定${tip}吗？`,
      okText: '确认',
      cancelText: '取消',
      onOk: () => this.submitAgree(item),
    });
  };

  async submitAgree({ id, name, valueText, percent, status, dyeing }) {
    const values = valueText ? valueText.split('\n') : [];
    const { dispatch } = this.props;
    await dispatch({
      type: 'flow/update',
      payload: { id, name, values, percent, status, dyeing },
    });
    this.fetchData();
  }

  render() {
    const { list } = this.state;
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'version或uid数组',
        key: 'values',
        render: (text, item, index) => (
          <TextArea
            rows={4}
            disabled={item.id === 3 || item.id === 4}
            defaultValue={item.valueText}
            onChange={event =>
              this.handleChange(index, 'valueText', event.target.value)
            }
          />
        ),
      },
      {
        title: '百分比',
        key: 'percent',
        render: (text, item, index) => (
          <InputNumber
            defaultValue={item.percent}
            min={0}
            max={50}
            disabled={item.id === 1 || item.id === 2}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            onChange={value => this.handleChange(index, 'percent', value)}
          />
        ),
      },
      {
        title: '是否启用',
        key: 'status',
        render: (text, item, index) => (
          <Button
            type="primary"
            onClick={() => this.handleChange(index, 'status', item.status)}
          >
            {item.status === 1 ? '停用' : '启用'}
          </Button>
        ),
      },
      {
        title: '流量染色',
        key: 'dyeing',
        render: (text, item, index) => (
          <Button
            type="primary"
            onClick={() => this.handleChange(index, 'dyeing', item.dyeing)}
          >
            {item.dyeing === 1 ? '停用' : '启用'}
          </Button>
        ),
      },
      {
        title: '提交',
        key: 'action',
        render: (text, item, index) => (
          <Button
            type="primary"
            onClick={() => this.handleChange(index, 'submit')}
          >
            提交
          </Button>
        ),
      },
    ];

    return (
      <>
        <div style={{ backgroundColor: '#fff' }}>
          <Table dataSource={list} columns={columns} bordered />
        </div>
      </>
    );
  }
}

export default Flow;
