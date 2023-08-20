import React from 'react';
import { Button } from '@tookie/core'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button'
}

export default meta

type Story = StoryObj<typeof Button>;

/** This is the primary variant for the button component */
export const Primary: Story = {
  render: () => <Button>Button</Button>,
  name: 'Primary Button',

}