import tw, { styled } from 'twin.macro';

type divWidth = {
  width?: string;
}

export const Container = styled.div(({ width }: divWidth) => [
  tw`${width ? width : 'w-full'}`,
  tw`px-48 py-12`
]);

export const ContainerFlex = tw.div`my-6`;

export const H2Typography = tw.h2`text-3xl font-bold mb-8`;