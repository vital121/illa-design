import * as React from "react"
import { Meta, Story } from "@storybook/react"
import { Tag, TagProps } from "../src"
import { BsFacebook, BsTwitch, BsTwitter } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Tag",
  component: Tag,
  parameters: {
    zeplinLink: "zpl://screen?sid=617f92d08bb52d043a5dc189&pid=617f7cd2526c70be1a3bf3ff",
  },
  argTypes: {
    size: {
      options: ["large", "small", "medium"],
      defaultValue: "small",
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["light", "fill", "outline"],
      defaultValue: "light",
      control: {
        type: "select",
      },
    },
    colorScheme: {
      defaultValue: "gray",
      control: {
        type: "text",
      },
    },
    visible: {
      defaultValue: true,
      control: {
        type: "boolean",
      },
    },
    closable: {
      defaultValue: false,
      control: {
        type: "boolean",
      },
    },
    icon: {},
  },
} as Meta

const Template: Story<TagProps> = (args) => {
  return <div style={{ display: "flex", flexDirection: "row" }}>
    <Tag {...args}>Hello</Tag>
    <Tag style={{
      marginLeft: "10px",
    }} icon={<BsFacebook />} {...args}>Hello</Tag>
    <Tag style={{
      marginLeft: "10px",
    }} icon={<BsTwitch />} {...args}>Hello</Tag>
    <Tag style={{
      marginLeft: "10px",
    }} icon={<BsTwitter />} {...args}>Hello</Tag>
  </div>
}

export const Basic = Template.bind({})
