import React, { Component } from 'react'
import { Select, Card, Form } from 'antd'
import store from '../store'
import { observer } from 'mobx-react'
import formItemLayout from './formItemLayout'
import PanelMenu from './PanelMenu'

const Option = Select.Option
const FormItem = Form.Item

@observer
export default class EditPanel extends Component {
  handleFlexWrapChange(value) {
    store.app.container.updateStyle({
      flexWrap: value
    })
  }
  handleChange(value) {
    store.app.container.updateStyle({
      flexDirection: value
    })
  }
  handleJustifyContentChange(value) {
    store.app.container.updateStyle({
      justifyContent: value
    })
  }
  handleAlignItemsChange(value) {
    store.app.container.updateStyle({
      alignItems: value
    })
  }
  render() {
    return (
      <Card extra={<PanelMenu object={store.app.container} />}
        title="Container">
        <Form>
          <FormItem {...formItemLayout} label="flex-direction">
            <Select defaultValue="row" onChange={this.handleChange}>
              <Option value="row">row</Option>
              <Option value="row-reverse">row-reverse</Option>
              <Option value="column">column</Option>
              <Option value="column-reverse">column-reverse</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="flex-wrap">
            <Select defaultValue="nowrap" onChange={this.handleFlexWrapChange}>
              <Option value="nowrap">nowrap</Option>
              <Option value="wrap">wrap</Option>
              <Option value="wrap-reverse">wrap-reverse</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="justify-content">
            <Select defaultValue="flex-start" onChange={this.handleJustifyContentChange}>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>
              <Option value="space-between">space-between</Option>
              <Option value="space-around">space-around</Option>
              <Option value="space-evenly">space-evenly</Option>
            </Select>
          </FormItem>
          <FormItem {...formItemLayout} label="align-items">
            <Select defaultValue="flex-start" onChange={this.handleAlignItemsChange}>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>
              <Option value="baseline">baseline</Option>
              <Option value="stretch">stretch</Option>
            </Select>
          </FormItem>
        </Form>
      </Card>
    )
  }
}
