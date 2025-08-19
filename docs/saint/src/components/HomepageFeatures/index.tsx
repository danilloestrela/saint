import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Smart Project Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Add, remove, and manage projects with intelligent templates. 
        Saint keeps your development workflow organized and efficient.
      </>
    ),
  },
  {
    title: 'Auto-Update System',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Automatically checks for updates and notifies you when new versions are available. 
        Stay up-to-date with the latest features and improvements.
      </>
    ),
  },
  {
    title: 'Command Aliases',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Project-specific shortcuts and commands that make your development faster. 
        Customize your workflow with powerful aliases.
      </>
    ),
  },
  {
    title: 'Helper Functions',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Docker, Git, and CD helpers built-in. Everything you need for modern 
        development workflows in one powerful CLI tool.
      </>
    ),
  },
  {
    title: 'Dynamic Help System',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Auto-generated help from code comments. Never get lost with Saint's 
        intelligent command suggestions and documentation.
      </>
    ),
  },
  {
    title: 'Beautiful UI',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Color-coded status messages and notifications that make your terminal 
        experience both functional and visually appealing.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg 
          className={styles.featureSvg} 
          role="img"
          data-feature={title.toLowerCase().replace(/\s+/g, '-')}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
