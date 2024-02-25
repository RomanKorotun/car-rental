import FadeLoader from 'react-spinners/FadeLoader';
import { LoaderCard } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderCard>
      <FadeLoader color="#36d7b7" />
    </LoaderCard>
  );
};
