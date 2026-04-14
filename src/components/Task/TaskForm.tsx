import React, { useState } from 'react'
import { Select, Modal, Form, DatePicker } from 'antd'
import { Task } from '../../types/task'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

// 设置 dayjs 为中文
dayjs.locale('zh-cn')

interface TaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'status' | 'createdAt'>) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onSubmit({
          title: values.title,
          description: values.description || undefined,
          category: values.category,
          priority: values.priority,
          deadline: values.deadline ? values.deadline.toISOString() : undefined,
        })
        form.resetFields()
        setIsModalVisible(false)
      })
      .catch(info => {
        console.log('表单验证失败:', info)
      })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }


  return (
    <>
      <button
        onClick={showModal}
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-black"
      >
        添加任务
      </button>
      <Modal
        title="添加新任务"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确定"
        cancelText="取消"
        okButtonProps={{ style: { backgroundColor: 'black', color: 'white', border: 'none' } }}
        cancelButtonProps={{ style: { backgroundColor: 'white', color: 'black', border: '1px solid black' } }}
        width={600}
      >
        <Form form={form} layout="vertical" initialValues={{ category: '工作', priority: '中' }}>
          <Form.Item
            name="title"
            label="任务标题"
            rules={[{ required: true, message: '请输入任务标题' }]}
          >
            <input
              type="text"
              placeholder="输入任务标题..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="任务描述"
          >
            <textarea
              placeholder="输入任务描述（可选）..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 bg-gray-50"
              rows={3}
            />
          </Form.Item>
          <div className="flex space-x-4">
            <Form.Item
              name="category"
              label="任务分类"
              rules={[{ required: true, message: '请选择任务分类' }]}
              className="flex-1"
            >
              <Select
                options={[
                  { value: '工作', label: '工作' },
                  { value: '学习', label: '学习' },
                  { value: '生活', label: '生活' },
                  { value: '项目', label: '项目' },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="priority"
              label="任务优先级"
              rules={[{ required: true, message: '请选择任务优先级' }]}
              className="flex-1"
            >
              <Select
                options={[
                  { value: '高', label: '高' },
                  { value: '中', label: '中' },
                  { value: '低', label: '低' },
                ]}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="deadline"
            label="截止日期"
          >
            <DatePicker
              placeholder="选择截止日期"
              className="w-full"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default TaskForm