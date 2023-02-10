import tw, { styled } from 'twin.macro';
import { keyframes } from '@emotion/react'

type divWidth = {
  width?: string;
  px?: string;
  py?: string;
}

export const Container = styled.div(({ width }: divWidth) => [
  tw`${width ? width : 'w-full'}`,
  tw`px-48 py-12`
]);

export const ContainerFlex = tw.div`flex`;

export const H2Typography = tw.h2`text-3xl font-bold mb-8`;

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const CenterItems = styled.span<{
  padding?: string;
}>`
  ${tw`
    flex justify-center
    w-full
  `}
  padding: ${props => (props.padding ? `${props.padding}` : 0 )};
`;


export const Spinner = styled.div`
	${tw`
		border-l-2
		border-r-2
		border-t-0
		border-b-0
		border-indigo-700
		border-solid
		h-12
		w-12
		m-6
		p-4
		rounded-full
		bg-transparent
	`}
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
`;


export const SvgContainer = styled.div<{
  color?: string,
  height?: number,
  width?: number,
  hoverColor?: string,
  transform?: number,
}>`
  padding: 0 1rem;
  height: auto;
  width: auto;
  align-items: center;
  justify-content: center;
  color: ${props => (props.color ? `${props.color}` : 'inherit')};
  cursor: pointer;
  & svg {
    height: ${props => (props.height ? `calc(${props.height}px + 0.5rem)` : null)};
    width: ${props => (props.width ? `calc(.2vw + ${props.width}px)` : `.5rem`)};
  }
  &:hover {
    color: ${props => (props.hoverColor ? `${props.hoverColor}` : 'gold')};
    transform: scale(${props => (props.transform ? props.transform : 1)});
  }
`;

export const H1Typography = tw.h1`
    text-4xl md:text-5xl xl:text-6xl 
    font-bold tracking-tight mb-12
`;

export const H3Typography = tw.h3`
    text-2xl text-gray-700
`;

export const ParagraphLargeTypography = tw.p`
    text-lg font-medium text-gray-900
`;