import { JBNotificationTest } from "./pages/jb-notification/jb-notification-test";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<unknown> = {
  title: "Example/JBNotification",
  component: JBNotificationTest,
};
export default meta;
type Story = StoryObj<typeof JBNotificationTest>;

export const Normal: Story = {
  args: {}
};
