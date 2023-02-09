import tw from 'twin.macro';

export const List = tw.ul`
  list-none w-1/6 text-gray-900 
  bg-white border border-gray-200 
  rounded-lg dark:bg-gray-700 
  dark:border-gray-600 dark:text-white
`;

export const ListItem = tw.li`
  flex items-center 
  p-4 hover:scale-110 
  transition duration-200 
  px-4 ease-in-out
  justify-center border-b
  border-gray-200 
  dark:border-gray-600
  hover:bg-gray-100
  dark:hover:text-gray-800
`;