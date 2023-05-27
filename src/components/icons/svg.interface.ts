import { FC } from 'react';

interface IProps {
	width?: number;
	height?: number;
	className?: string;
	color?: string;
	strokeWidth?: number;
	onClick?: () => void;
}

export type SvgIconType = FC<IProps>;
export default SvgIconType;
