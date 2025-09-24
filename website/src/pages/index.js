// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageContent from '../components/HomepageContent/HomepageContent';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/PURL_SPECIFICATION">
                        View PURL Specification 📘
                    </Link>
                </div>
            </div>
        </header>
    );
}

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}!`}
//       description="">
//       <HomepageHeader />
//       <main>
//         <HomepageContent />
//       </main>
//     </Layout>
//   );
// }

export default function Home() {
    return (
        <Layout title="Home" description="Landing page for schema project">
            {/* Hero Section */}
            <div className={styles.fullHero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.heroTitle}>Welcome to PackageURL.org</h1>
                    <p className={styles.heroSubtitle}>
                        {/* Explore documentation, JSON Schemas, and tools for working with software packages. */}
                        A simple, consistent, and flexible approach for identifying software packages with precision and clarity.
                    </p>

                    <div className={styles.heroButtons}>
                        {/* <Link className="button button--primary button--lg" to="/docs/intro"> */}
                        {/* <Link className="button button--primary button--lg" to="/docs/index"> */}
                        {/* <Link className="button button--primary button--lg" to="/docs/"> */}
                        {/* 2025-09-04 Thursday 13:24:07.  Did this ^ throw a broken-links error?  Try this: */}
                        {/* <Link className="button button--primary button--lg" to="/docs/PURL_SPECIFICATION"> */}
                        {/* <Link className="button button--primary button--lg custom-get-started" to="/docs/PURL_SPECIFICATION"> */}
                        <Link className="button button--primary button--lg custom-get-started" to="/docs/package-url/package-url-overview">
                            Get Started
                        </Link>
                    </div>
                    {/* <p className={styles.heroSubtitle} style={{marginTop: '1em', fontStyle: 'italic'}}>
            * Not really -- this is just a mockup I'm using to learn a bit about Docusaurus and GH Pages.
          </p> */}
                </div>
            </div>



            {/* <div className={styles.packageGrid}>
                {[
                    { name: 'npm', logo: '/img/npm.png', link: 'https://github.com/npm/cli' },
                    { name: 'npm', logo: '/img/npm.png', link: 'https://github.com/npm.png' },
                    { name: 'npm', logo: '/img/npm.png', link: 'https://avatars.githubusercontent.com/u/6078720?v=4' },
                    { name: 'PyPI', logo: '/img/pypi.png', link: 'https://github.com/pypa/pypi-support' },
                    { name: 'Maven', logo: '/img/maven.png', link: 'https://github.com/apache/maven' },
                    { name: 'RubyGems', logo: '/img/rubygems.png', link: 'https://github.com/rubygems/rubygems' },

                ].map(pkg => (
                    <a
                        key={pkg.name}
                        href={pkg.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src={pkg.logo} alt={pkg.name} className={styles.packageLogo} />
                        <span>{pkg.name}</span>
                    </a>
                ))}
            </div> */}

            {/* <div style={{ display: 'grid', padding: '2rem', paddingBottom: '0', textAlign: 'center', fontSize: '30px' }}>
                Package-URL (PURL) implementations include:
            </div> */}

            {/* <div style={{ display: 'flex', padding: '2rem', paddingBottom: '0', textAlign: 'center', borderBottom: 'solid 1px #000000', maxWidth: '1200px', width: '100%', justifyContent: 'center' }}>
                <h1>Package-URL (PURL) implementations</h1>
            </div> */}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        display: 'flex',
                        padding: '2rem',
                        paddingBottom: '0',
                        textAlign: 'center',
                        // borderBottom: 'solid 1px #000000',
                        maxWidth: '1200px',
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <h1>Package-URL (PURL) implementations</h1>
                </div>
            </div>

            <div className={styles.packageGridWrapper}>
                <div className={styles.packageGrid}>

                    <a
                        href="https://github.com/npm/cli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://github.com/npm.png" alt="npm" className={styles.packageLogo} />
                        <span>npm</span>
                    </a>

                    <a
                        href="https://github.com/pypi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://github.com/pypi.png" alt="PyPI" className={styles.packageLogo} />
                        <span>PyPI</span>
                    </a>

                    <a
                        href="https://rubygems.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://github.com/rubygems.png" alt="gem" className={styles.packageLogo} />
                        <span>gem</span>
                    </a>

                    <a
                        href="https://github.com/golang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://github.com/golang.png" alt="golang" className={styles.packageLogo} />
                        <span>golang</span>
                    </a>

                    <a
                        href="https://github.com/conan-io/conan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://avatars.githubusercontent.com/u/15212165?s=48&v=4" alt="conan" className={styles.packageLogo} />
                        <span>conan</span>
                    </a>

                    <a
                        href="https://www.nuget.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://github.com/nuget.png" alt="nuget" className={styles.packageLogo} />
                        <span>nuget</span>
                    </a>

                    <a
                        href="https://bitbucket.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        {/* <img src="/img/logo-light_Bitbucket_logo_brand_RGB_ 2x.png" alt="bitbucket" className={styles.packageLogo} /> */}
                        {/* <img src="/img/logo-light_Bitbucket_logo_brand_RGB_ 2x.png" alt="bitbucket" /> */}
                        <img src="/img/Bitbucket_mark_brand_RGB_2x.png" alt="bitbucket" className={styles.packageLogo} />
                        <span>bitbucket</span>
                    </a>

                    <a
                        href="https://github.com/CocoaPods/CocoaPods"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img src="https://github.com/cocoapods.png" alt="cocoapods" className={styles.packageLogo} />
                        <span>cocoapods</span>
                    </a>

                </div>
            </div>

            {/* <div style={{ display: 'grid', padding: '2rem', paddingBottom: '0', textAlign: 'center', borderBottom: 'solid 1px #000000' }}>
                <h1>The basics</h1>
            </div> */}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        display: 'flex',
                        padding: '2rem',
                        paddingBottom: '0',
                        textAlign: 'center',
                        maxWidth: '1200px',
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <h1>Schemas, standard and more</h1>
                </div>
            </div>


            {/* Two-Column Section */}
            <div className={styles.twoColumn}>
                {/* Left column: schema list */}
                <div className={styles.column}>
                    <h2>Available JSON Schemas</h2>
                    {/* <ul>
            <li><Link to="/schemas/purl-test.schema.json">purl-test.schema.json</Link></li>
            <li><Link to="/schemas/purl-type-definition.schema.json">purl-type-definition.schema.json</Link></li>
            <li><Link to="/schemas/purl-types-index.schema.json">purl-types-index.schema.json</Link></li>
          </ul>
          <h2>JMH link to the GH repo</h2> */}
                    <div className={styles.card} >
                        <ul>
                            <li><a class="a_page" href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-test.schema.json" target="_blank">purl-test.schema.json</a></li>
                            <li><a class="a_page" href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-type-definition.schema.json" target="_blank">purl-type-definition.schema.json</a></li>
                            <li><a class="a_page" href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-types-index.schema.json" target="_blank">purl-types-index.schema.json</a></li>
                        </ul>
                    </div>

                    <h2>Standard and Specification</h2>
                    <div className={styles.card} >
                        <ul>
                            <li>
                                <Link to="https://github.com/package-url/purl-spec/blob/main/purl-standard.md" className="a_page">purl-standard.md</Link>
                            </li>
                            <li>
                                <Link to="https://github.com/package-url/purl-spec/blob/main/purl-specification.md" className="a_page">purl-specification.md</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right column: example announcements */}
                {/* <div className={styles.column}>
                    <h2>Project News</h2>
                    <div className={styles.card} >
                        <h3>Release 1.0.0</h3>
                        <p>Coming soon . . .</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Community Call</h3>
                        <p>Join our next PURL community call on 2025-09-03 to discuss the status of the PURL standard submission to Ecma.</p>
                        <p>The schedules for PURL community and TC54-TG2 calls are available at <a class="a_page" href="https://calendar.google.com/calendar/u/0/embed?src=c_884decde5a152902bb51a62f89550d0f3748484534f08c63792f2e654f2a7ebc@group.calendar.google.com" target="_blank">OWASP Software Supply Chain Community Calendar</a>.</p>
                    </div>
                </div> */}

                <div className={styles.column}>
                    <h2>Releases</h2>
                    {/* <ul>
            <li><Link to="/schemas/purl-test.schema.json">purl-test.schema.json</Link></li>
            <li><Link to="/schemas/purl-type-definition.schema.json">purl-type-definition.schema.json</Link></li>
            <li><Link to="/schemas/purl-types-index.schema.json">purl-types-index.schema.json</Link></li>
          </ul>
          <h2>JMH link to the GH repo</h2> */}
                    <div className={styles.card} >
                        <h3>Release 1.0.0</h3>
                        <p>Coming soon . . .</p>
                    </div>

                    <h2>Community Call</h2>
                    <div className={styles.card}>
                        <p>Join our next PURL community call on 2025-09-03 to discuss the status of the PURL standard submission to Ecma.</p>
                        <p>The schedules for PURL community and TC54-TG2 calls are available at <a class="a_page" href="https://calendar.google.com/calendar/u/0/embed?src=c_884decde5a152902bb51a62f89550d0f3748484534f08c63792f2e654f2a7ebc@group.calendar.google.com" target="_blank">OWASP Software Supply Chain Community Calendar</a>.</p>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
