import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4587ec"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  );
};