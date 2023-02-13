import tw from 'twin.macro';

export const List = tw.ul`
  flex grid grid-cols-6 gap-x-2
  list-none text-gray-900 
  bg-white border border-gray-200 
  rounded-lg dark:bg-gray-700 
  dark:border-gray-600 dark:text-white
`;

export const ListItem = tw.li`
  items-center 
  hover:scale-110 
  transition duration-200 
  ease-in-out
  justify-center border-b
  border-gray-300 
  dark:border-gray-600
  hover:bg-gray-100
  dark:hover:text-gray-800
  border
`;
