import { Meta, StoryFn } from "@storybook/react"
import { InputTag, InputTagProps } from "../src"
import { PeopleIcon, Space } from "@illa-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputTag",
  component: InputTag,
} as Meta

export const Basic: StoryFn<InputTagProps> = (props) => {
  return (
    <Space direction="vertical" align="start">
      <InputTag w="320px" {...props} />
      <InputTag w="320px" suffix={<PeopleIcon />} {...props} />
      <InputTag w="320px" addBefore="Before" addAfter="After" {...props} />
      <InputTag w="320px" prefix="Before" {...props} />
    </Space>
  )
}
