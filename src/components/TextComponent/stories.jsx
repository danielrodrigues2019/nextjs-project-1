import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatem quidem cupiditate repudiandae numquam, totam odio. Tempora suscipit, esse similique est fugiat provident delectus. Ipsa enim autem eveniet rerum debitis!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}
