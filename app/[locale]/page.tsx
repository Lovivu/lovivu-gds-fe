import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
  }>
}

export default async function Home(props: Props) {
  const { params } = props;
  const { locale } = await params;
  const translations = await getTranslations({
    locale,
    namespace: 'home_page'
  });
  return (
    <div >
      <h2>{translations('title')}</h2>
      <h5>{translations('description')}</h5>
    </div>
  );
}
