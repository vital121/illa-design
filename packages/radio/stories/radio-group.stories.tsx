import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Radio, RadioGroup, RadioGroupProps } from "../src"
import results from "../../../coverage/coverage-final.json"
import { withTests } from "@storybook/addon-jest"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/RadioGroup",
  component: RadioGroup,
  decorators: [withTests({ results })],
} as Meta

const Template: Story<RadioGroupProps> = (args) => {
  return <div>
    <RadioGroup {...args}>
      <Radio value="a">AAAAAA</Radio>
      <Radio value="b">B</Radio>
      <Radio value="c" />
      <Radio value="d" disabled />
    </RadioGroup>
    <br />
    <RadioGroup {...args} options={["A", "B", "C"]}>
    </RadioGroup>
  </div>
}

export const Basic = Template.bind({})


