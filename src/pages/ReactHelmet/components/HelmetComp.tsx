import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
}

const HelmetComp = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default HelmetComp;
