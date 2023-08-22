import React, { FC } from 'react';
import cls from './{{pascalCase}}'
interface {{pascalCase}}Props {
	className?: string
}
const {{pascalCase}}: FC<{{pascalCase}}Props> = ({}) => {
	return (<div className={classNames(cls.{{pascalCase}}, {}, [className])}>

	</div>);
}

export default {{pascalCase}};