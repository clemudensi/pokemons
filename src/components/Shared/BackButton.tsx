import { useRouter } from 'next/router'
import { ChevronBack } from '@/components';

export const BackButton = () => {
  const router = useRouter();

  return (
    <ChevronBack
      width={50}
      height={50}
      hoverColor={'#2b85e2'}
      padding={'1rem 0'}
      onClick={() => router.back()}
      data-testid="backButton"
    />
  )
}
