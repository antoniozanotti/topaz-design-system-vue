import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['base', 'large', 'small'] },
  },
  args: { size: 'base' }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {



}
