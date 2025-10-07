import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// function HomepageHeader() {
//     const { siteConfig } = useDocusaurusContext();
//     return (
//         <header className={clsx("hero hero--primary", styles.heroBanner)}>
//             <div className="container">
//                 <Heading as="h1" className="hero__title">
//                     {siteConfig.title}
//                 </Heading>
//                 <p className="hero__subtitle">{siteConfig.tagline}</p>
//                 <div className={styles.buttons}>
//                     <Link
//                         className="button button--secondary button--lg"
//                         to="/docs/PURL_SPECIFICATION"
//                     >
//                         View PURL Specification 📘
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     );
// }

export default function Home() {
    const packages = [
        {
            name: 'alpm',
            // url: '#',
            url: 'https://archlinux.org/',
            // logo: 'https://via.placeholder.com/48?text=ALPM',
            // Logo: 'https://archlinux.org/static/logos/archlinux-logo-dark-scalable.svg',
            // logo: "/img/archlinux-logo-dark-scalable.svg",
            // logo: "/img/archlinux-logo-dark-1200dpi.png",
            // logo: "https://archlinux.org/static/logos/archlinux-logo-dark-scalable.svg",
            logo: "/img/archlinux-logo-dark-90dpi.png",
            // 2025-10-07 Tuesday 15:01:01.  See icons at https://archlinux.org/art/
        },
        {
            name: 'apk',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=APK',
        },
        // {
        //     name: 'bitbucket',
        //     url: 'https://bitbucket.org',
        //     logo: 'https://avatars.githubusercontent.com/u/143723?s=48&v=4',
        // },
        {
            name: 'bitbucket',
            url: 'https://bitbucket.org',
            logo: '/img/Bitbucket_mark_brand_RGB_2x.png',
        },
        {
            name: 'bitnami',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=Bitnami',
        },
        // {
        //     name: 'cargo',
        //     url: 'https://github.com/rust-lang/cargo',
        //     logo: 'https://avatars.githubusercontent.com/u/5430905?s=48&v=4',
        // },
        {
            name: 'cargo',
            url: 'https://github.com/rust-lang/cargo',
            logo: '/img/Cargo-Logo-Small.png',
        },
        // {
        //     name: 'cocoapods',
        //     url: 'https://github.com/CocoaPods/CocoaPods',
        //     logo: 'https://via.placeholder.com/48?text=CocoaPods',
        // },
        {
            name: 'cocoapods',
            url: 'https://github.com/CocoaPods/CocoaPods',
            logo: 'https://github.com/cocoapods.png',
        },
        {
            name: 'composer',
            url: 'https://getcomposer.org',
            logo: 'https://avatars.githubusercontent.com/u/3097571?s=48&v=4',
        },
        {
            name: 'conan',
            url: 'https://github.com/conan-io/conan',
            logo: 'https://avatars.githubusercontent.com/u/15212165?s=48&v=4',
        },
        {
            name: 'conda',
            url: 'https://github.com/conda/conda',
            logo: 'https://avatars.githubusercontent.com/u/1249001?s=48&v=4',
        },
        {
            name: 'cpan',
            url: 'https://www.cpan.org',
            logo: 'https://via.placeholder.com/48?text=CPAN',
        },
        {
            name: 'cran',
            url: 'https://cran.r-project.org',
            logo: 'https://cran.r-project.org/Rlogo.png',
        },
        {
            name: 'deb',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=DEB',
        },
        {
            name: 'docker',
            url: 'https://www.docker.com',
            logo: 'https://avatars.githubusercontent.com/u/5429470?s=48&v=4',
        },
        // {
        //     name: 'gem',
        //     url: 'https://rubygems.org',
        //     logo: 'https://avatars.githubusercontent.com/u/10021?s=48&v=4',
        // },
        {
            name: 'gem',
            url: 'https://rubygems.org',
            logo: 'https://github.com/rubygems.png',
        },
        {
            name: 'generic',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=Generic',
        },
        {
            name: 'github',
            url: 'https://github.com',
            logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        },
        {
            name: 'golang',
            url: 'https://golang.org',
            logo: 'https://avatars.githubusercontent.com/u/4314092?s=48&v=4',
        },
        {
            name: 'hackage',
            url: 'https://hackage.haskell.org',
            logo: 'https://avatars.githubusercontent.com/u/31460?s=48&v=4',
        },
        {
            name: 'hex',
            url: 'https://hex.pm',
            logo: 'https://avatars.githubusercontent.com/u/17772?s=48&v=4',
        },
        {
            name: 'huggingface',
            url: 'https://huggingface.co',
            logo: 'https://avatars.githubusercontent.com/u/25725506?s=48&v=4',
        },
        {
            name: 'luarocks',
            url: 'https://luarocks.org',
            logo: 'https://avatars.githubusercontent.com/u/16526?s=48&v=4',
        },
        {
            name: 'maven',
            url: 'https://github.com/apache/maven',
            logo: 'https://avatars.githubusercontent.com/u/47359?s=48&v=4',
        },
        {
            name: 'mlflow',
            url: 'https://mlflow.org',
            logo: 'https://avatars.githubusercontent.com/u/30467620?s=48&v=4',
        },
        {
            name: 'npm',
            url: 'https://github.com/npm/cli',
            logo: 'https://avatars.githubusercontent.com/u/6078720?s=48&v=4',
        },
        // {
        //     name: 'nuget',
        //     url: 'https://www.nuget.org',
        //     logo: 'https://avatars.githubusercontent.com/u/16136117?s=48&v=4',
        // },
        {
            name: 'nuget',
            url: 'https://www.nuget.org',
            logo: 'https://github.com/nuget.png',
        },
        {
            name: 'oci',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=OCI',
        },
        {
            name: 'pub',
            url: 'https://pub.dev',
            logo: 'https://avatars.githubusercontent.com/u/4341016?s=48&v=4',
        },
        // {
        //     name: 'pypi',
        //     url: 'https://pypi.org',
        //     logo: 'https://avatars.githubusercontent.com/u/1525981?s=48&v=4',
        // },
        {
            name: 'pypi',
            url: 'https://pypi.org',
            logo: 'https://github.com/pypi.png',
        },
        {
            name: 'qpkg',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=QPKG',
        },
        {
            name: 'rpm',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=RPM',
        },
        {
            name: 'swid',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=SWID',
        },
        // {
        //     name: 'swift',
        //     url: 'https://swift.org',
        //     logo: 'https://avatars.githubusercontent.com/u/14082009?s=48&v=4',
        // },
        {
            name: 'swift',
            url: 'https://swift.org',
            logo: '/img/Swift_logo_color.svg',
        },
    ];

    return (
        <Layout title="Home" description="Landing page for schema project">
            <div className={styles.fullHero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.heroTitle}>Welcome to PackageURL.org</h1>
                    <p className={styles.heroSubtitle}>
                        A simple, consistent, and flexible approach for identifying software
                        packages with precision and clarity.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: 0, marginTop: 30 }}>
                <h1 style={{ marginBottom: 0 }}>Package-URL (PURL) implementations</h1>
            </div>

            <div className={styles.purlGridWrapper}>
                <div className={styles.purlGridContainer}>
                    <div className={styles.purlGrid}>
                        {packages.map((pkg, idx) => (
                            <a
                                key={idx}
                                href={pkg.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.packageCell}
                            >
                                {/* <img src={pkg.logo} alt={pkg.name} className={styles.packageLogo} /> */}
                                <img src={pkg.logo} alt={pkg.name} className={`${styles.packageLogo} ${styles[pkg.name]}`} />
                                <span>{pkg.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                    style={{
                        display: 'flex',
                        padding: '2rem',
                        paddingBottom: '0',
                        textAlign: 'center',
                        maxWidth: '1200px',
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <h1>Package-URL (PURL) implementations</h1>
                </div>
            </div>

            <div className={styles.packageGridWrapper}>
                <div className={styles.packageGrid}>
                    <a
                        href="https://bitbucket.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="/img/Bitbucket_mark_brand_RGB_2x.png"
                            alt="bitbucket"
                            className={styles.packageLogo}
                        />
                        <span>bitbucket</span>
                    </a>

                    <a
                        href="https://github.com/CocoaPods/CocoaPods"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://github.com/cocoapods.png"
                            alt="cocoapods"
                            className={styles.packageLogo}
                        />
                        <span>cocoapods</span>
                    </a>

                    <a
                        href="https://github.com/conan-io/conan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/15212165?s=48&v=4"
                            alt="conan"
                            className={styles.packageLogo}
                        />
                        <span>conan</span>
                    </a>

                    <a
                        href="https://rubygems.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://github.com/rubygems.png"
                            alt="gem"
                            className={styles.packageLogo}
                        />
                        <span>gem</span>
                    </a>

                    <a
                        href="https://github.com/golang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://github.com/golang.png"
                            alt="golang"
                            className={styles.packageLogo}
                        />
                        <span>golang</span>
                    </a>

                    <a
                        href="https://github.com/npm/cli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://github.com/npm.png"
                            alt="npm"
                            className={styles.packageLogo}
                        />
                        <span>npm</span>
                    </a>

                    <a
                        href="https://www.nuget.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://github.com/nuget.png"
                            alt="nuget"
                            className={styles.packageLogo}
                        />
                        <span>nuget</span>
                    </a>

                    <a
                        href="https://github.com/pypi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.packageCell}
                    >
                        <img
                            src="https://github.com/pypi.png"
                            alt="PyPI"
                            className={styles.packageLogo}
                        />
                        <span>PyPI</span>
                    </a>
                </div>
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
                        justifyContent: 'center',
                    }}
                >
                    {/* <h1>Schemas, standard and more</h1> */}
                    <h1>General Information</h1>
                </div>
            </div>

            {/* Two-Column Section */}
            <div className={styles.twoColumn}>
                <div className={styles.column}>
                    <h2>Community call</h2>
                    <div className={styles.card}>
                        <p>
                            Join our next PURL community call on 2025-09-03 to
                            discuss the status of the PURL standard submission
                            to Ecma.
                        </p>
                        <p>
                            The schedules for PURL community and TC54-TG2 calls
                            are available at{" "}
                            <a
                                class="a_page"
                                href="https://calendar.google.com/calendar/u/0/embed?src=c_884decde5a152902bb51a62f89550d0f3748484534f08c63792f2e654f2a7ebc@group.calendar.google.com"
                                target="_blank"
                            >
                                OWASP Software Supply Chain Community Calendar
                            </a>
                            .
                        </p>
                    </div>
                </div>

                <div className={styles.column}>
                    <h2>Releases</h2>
                    <div className={styles.card}>
                        <h3>Release 1.0.0</h3>
                        <p>Coming soon . . .</p>
                    </div>
                </div>
            </div>

            {/* Two-Column Section */}
            {/* <div className={styles.twoColumn}>
                <div className={styles.column}>
                    <h2>Available JSON Schemas</h2>
                    <div className={styles.card}>
                        <ul>
                            <li>
                                <a
                                    class="a_page"
                                    href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-test.schema.json"
                                    target="_blank"
                                >
                                    purl-test.schema.json
                                </a>
                            </li>
                            <li>
                                <a
                                    class="a_page"
                                    href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-type-definition.schema.json"
                                    target="_blank"
                                >
                                    purl-type-definition.schema.json
                                </a>
                            </li>
                            <li>
                                <a
                                    class="a_page"
                                    href="https://github.com/package-url/purl-spec/blob/main/schemas/purl-types-index.schema.json"
                                    target="_blank"
                                >
                                    purl-types-index.schema.json
                                </a>
                            </li>
                        </ul>
                    </div>

                    <h2>Standard and Specification</h2>
                    <div className={styles.card}>
                        <ul>
                            <li>
                                <Link
                                    to="https://github.com/package-url/purl-spec/blob/main/purl-standard.md"
                                    className="a_page"
                                >
                                    purl-standard.md
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://github.com/package-url/purl-spec/blob/main/purl-specification.md"
                                    className="a_page"
                                >
                                    purl-specification.md
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.column}>
                    <h2>Releases</h2>

                    <div className={styles.card}>
                        <h3>Release 1.0.0</h3>
                        <p>Coming soon . . .</p>
                    </div>

                    <h2>Community Call</h2>
                    <div className={styles.card}>
                        <p>
                            Join our next PURL community call on 2025-10-15 to discuss the status of
                            the PURL standard submission to Ecma.
                        </p>
                        <p>
                            The schedules for PURL community and TC54-TG2 calls are available at{' '}
                            <a
                                class="a_page"
                                href="https://calendar.google.com/calendar/u/0/embed?src=c_884decde5a152902bb51a62f89550d0f3748484534f08c63792f2e654f2a7ebc@group.calendar.google.com"
                                target="_blank"
                            >
                                OWASP Software Supply Chain Community Calendar
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div> */}
        </Layout>
    );
}
