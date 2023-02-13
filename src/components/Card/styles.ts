import tw from 'twin.macro';

export const CardGroup = tw.div`
    rounded-lg shadow-lg bg-white
`;

export const CardImageContainer = tw.div`
    min-h-fit aspect-w-1 aspect-h-1 
    w-full overflow-hidden
    bg-gray-200 group-hover:opacity-75 
    lg:aspect-none
`;

export const CardImage = tw.img`
    object-cover 
    object-center lg:h-full lg:w-full
    mix-blend-luminosity
    hover:mix-blend-normal
`;

export const GroupItemsBlock = tw.div`
    inline-block
`;

export const CardGroupTitle = tw.div`
    mt-4 flex justify-between p-8
`;

export const Title = tw.div`
    w-1/2
`;

export const PokemonCardDetails = tw.div`w-3/5 px-48 py-12`
