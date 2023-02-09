import tw, { styled } from 'twin.macro';
import { keyframes } from '@emotion/react'

type divWidth = {
  width?: string;
}

export const Container = styled.div(({ width }: divWidth) => [
  tw`${width ? width : 'w-full'}`,
  tw`px-48 py-12`
]);

export const ContainerFlex = tw.div`my-6`;

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
