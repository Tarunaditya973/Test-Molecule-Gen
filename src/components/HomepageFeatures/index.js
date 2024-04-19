import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Genie-Diffmol',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       DiffMol is a target-aware diffusion-based de novo ligand generation module that generates small molecules that are best suited to bind to specific binding sites in a particular protein. It is based on TargeDiff[1], and leverages SE(3)-equivariant networks for generating molecules with realistic structures and improved binding affinities.
      </>
    ),
  },
  {
    title: 'ADMET',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       The ADME and Tox app harnesses the power of Graph Neural Networks (GNNs) to predict the Absorption, Distribution, Metabolism, Excretion, and Toxicity (ADMET) properties of molecules. It uses the state-of-the-art GNN architectures, with over 200 computationally derived molecular features as inputs to the network that provides unparalleled accuracy.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
