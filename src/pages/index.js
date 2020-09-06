import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Premium Kent Rehberi',
    imageUrl: 'img/prem_kent_rehberi.svg',
    description: (
      <>
        İşletmeler ve kullanıcılar için site ve uygulama kullanımında yardımcı
        olabilecek ipuçları.
      </>
    ),
  },
  {
    title: 'Yardımcı Araçlar',
    imageUrl: 'img/yardimci_araclar.svg',
    description: (
      <>
        İşletmeler için grafik ve diğer çeşitli materyaller.
      </>
    ),
  },
  {
    title: 'Profesyonel Destek',
    imageUrl: 'img/pro_destek.svg',
    description: (
      <>
        Destek ekibimiz sorularınıza yardımcı olabilmek için bir tık uzağınızda.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout  
      title={`Premium Kent Rehberi ${siteConfig.title}`}
      description="BeykozMekan Yardım merkezi">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--primary button--warning button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Yardım Merkezi
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
