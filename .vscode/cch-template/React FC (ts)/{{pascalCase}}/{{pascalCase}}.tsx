import React from 'react';
import cls from './{{pascalCase}}.module.scss'
interface {{pascalCase}}Props {
	className?: string
}
const {{pascalCase}} = (props:{{pascalCase}}Props) => {
	const {className} = props
	return (<div className={classNames(cls.{{pascalCase}}, {}, [className])}>

	</div>);
}

export default {{pascalCase}};