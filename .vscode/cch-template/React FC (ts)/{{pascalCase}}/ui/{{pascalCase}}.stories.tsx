import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: '{{pascalCase}}',
    component: {{pascalCase}},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof{{pascalCase}}>;

const Template: ComponentStory<typeof{{pascalCase}}> = (args: any) => <{{pascalCase}} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    
};
