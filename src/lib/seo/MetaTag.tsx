import { Helmet } from "react-helmet-async";

interface MetaProps {
  description: string;
  title: string;
  imgsrc: string;
}

export const MetaTag = ({ title, description, imgsrc }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgsrc} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgsrc} />
    </Helmet>
  );
};
