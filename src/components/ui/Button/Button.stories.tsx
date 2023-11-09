import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "shadcn-ui-lib/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
    },
    children: {
      defaultValue: "Default Text",
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  variant: "default",
};

export const Secondary = Template.bind({});
{
  /* () => <Button>Iam</Button>; */
}
Secondary.args = {
  variant: "secondary",
  className: "text-orange-500",
  children: "secondary",
};
// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click me!",
// };
