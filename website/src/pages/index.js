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
            url: '#',
            logo: 'https://via.placeholder.com/48?text=ALPM',
        },
        {
            name: 'apk',
            url: '#',
            logo: 'https://via.placeholder.com/48?text=APK',
        },
        {
            name: 'bitbucket',
            url: 'https://bitbucket.org',
            logo: 'https://avatars.githubusercontent.com/u/143723?s=48&v=4',
        },
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
        {
            name: 'cargo',
            url: 'https://github.com/rust-lang/cargo',
            logo: 'https://avatars.githubusercontent.com/u/5430905?s=48&v=4',
        },
        {
            name: 'cargo',
            url: 'https://github.com/rust-lang/cargo',
            logo: '/img/Cargo-Logo-Small.png',
        },
        {
            name: 'cocoapods',
            url: 'https://github.com/CocoaPods/CocoaPods',
            logo: 'https://via.placeholder.com/48?text=CocoaPods',
        },
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
        {
            name: 'gem',
            url: 'https://rubygems.org',
            logo: 'https://avatars.githubusercontent.com/u/10021?s=48&v=4',
        },
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
        {
            name: 'nuget',
            url: 'https://www.nuget.org',
            logo: 'https://avatars.githubusercontent.com/u/16136117?s=48&v=4',
        },
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
        {
            name: 'pypi',
            url: 'https://pypi.org',
            logo: 'https://avatars.githubusercontent.com/u/1525981?s=48&v=4',
        },
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
        {
            name: 'swift!',
            url: 'https://swift.org',
            logo: 'https://avatars.githubusercontent.com/u/14082009?s=48&v=4',
        },
        {
            name: 'swift?',
            url: 'https://swift.org',
            logo: '/img/Swift_logo_color.svg',
        },
    ];

    // 2025-10-03 Friday 17:59:06.  This is a Claude experiment:
    // const packageManagers = [
    //     {
    //         name: "alpm",
    //         logo: "https://www.svgrepo.com/show/305888/archlinux.svg",
    //         url: "https://archlinux.org/pacman/",
    //     },
    //     {
    //         name: "apk",
    //         logo: "https://www.svgrepo.com/show/305945/alpinelinux.svg",
    //         url: "https://wiki.alpinelinux.org/wiki/Alpine_Package_Keeper",
    //     },
    //     {
    //         name: "bitbucket",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bitbucket.svg",
    //         url: "https://bitbucket.org/",
    //     },
    //     {
    //         name: "bitnami",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bitnami.svg",
    //         url: "https://bitnami.com/",
    //     },
    //     {
    //         name: "cargo",
    //         logo: "https://www.svgrepo.com/show/374005/rust.svg",
    //         url: "https://doc.rust-lang.org/cargo/",
    //     },
    //     {
    //         name: "cocoapods",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cocoapods.svg",
    //         url: "https://cocoapods.org/",
    //     },
    //     {
    //         name: "composer",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/composer.svg",
    //         url: "https://getcomposer.org/",
    //     },
    //     {
    //         name: "conan",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/conan.svg",
    //         url: "https://conan.io/",
    //     },
    //     {
    //         name: "conda",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/anaconda.svg",
    //         url: "https://docs.conda.io/",
    //     },
    //     {
    //         name: "cpan",
    //         logo: "https://www.svgrepo.com/show/373592/perl.svg",
    //         url: "https://www.cpan.org/",
    //     },
    //     {
    //         name: "cran",
    //         logo: "https://www.svgrepo.com/show/373905/r.svg",
    //         url: "https://cran.r-project.org/",
    //     },
    //     {
    //         name: "deb",
    //         logo: "https://www.svgrepo.com/show/354004/debian.svg",
    //         url: "https://www.debian.org/distrib/packages",
    //     },
    //     {
    //         name: "docker",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
    //         url: "https://hub.docker.com/",
    //     },
    //     {
    //         name: "gem",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/rubygems.svg",
    //         url: "https://rubygems.org/",
    //     },
    //     {
    //         name: "generic",
    //         logo: "https://www.svgrepo.com/show/394468/package.svg",
    //         url: "#",
    //     },
    //     {
    //         name: "github",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    //         url: "https://github.com/",
    //     },
    //     {
    //         name: "golang",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg",
    //         url: "https://pkg.go.dev/",
    //     },
    //     {
    //         name: "hackage",
    //         logo: "https://www.svgrepo.com/show/373588/haskell.svg",
    //         url: "https://hackage.haskell.org/",
    //     },
    //     {
    //         name: "hex",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/elixir.svg",
    //         url: "https://hex.pm/",
    //     },
    //     {
    //         name: "huggingface",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/huggingface.svg",
    //         url: "https://huggingface.co/",
    //     },
    //     {
    //         name: "luarocks",
    //         logo: "https://www.svgrepo.com/show/373760/lua.svg",
    //         url: "https://luarocks.org/",
    //     },
    //     {
    //         name: "maven",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachemaven.svg",
    //         url: "https://maven.apache.org/",
    //     },
    //     {
    //         name: "mlflow",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mlflow.svg",
    //         url: "https://mlflow.org/",
    //     },
    //     {
    //         name: "npm",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/npm.svg",
    //         url: "https://www.npmjs.com/",
    //     },
    //     {
    //         name: "nuget",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nuget.svg",
    //         url: "https://www.nuget.org/",
    //     },
    //     {
    //         name: "oci",
    //         logo: "https://www.svgrepo.com/show/448245/oracle.svg",
    //         url: "https://opencontainers.org/",
    //     },
    //     {
    //         name: "pub",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dart.svg",
    //         url: "https://pub.dev/",
    //     },
    //     {
    //         name: "pypi",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pypi.svg",
    //         url: "https://pypi.org/",
    //     },
    //     {
    //         name: "qpkg",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/qnap.svg",
    //         url: "https://www.qnap.com/",
    //     },
    //     {
    //         name: "rpm",
    //         logo: "https://www.svgrepo.com/show/354167/redhat-icon.svg",
    //         url: "https://rpm.org/",
    //     },
    //     {
    //         name: "swid",
    //         logo: "https://www.svgrepo.com/show/394468/package.svg",
    //         url: "https://csrc.nist.gov/projects/Software-Identification-SWID",
    //     },
    //     {
    //         name: "swift",
    //         logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/swift.svg",
    //         url: "https://www.swift.org/package-manager/",
    //     },
    // ];

    return (
        <Layout title="Home" description="Landing page for schema project">
            <div className={styles.fullHero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.heroTitle}>Welcome to PackageURL.org</h1>
                    <p className={styles.heroSubtitle}>
                        A simple, consistent, and flexible approach for identifying software
                        packages with precision and clarity.
                    </p>

                    {/* <div className={styles.heroButtons}>
                        <Link
                            className="button button--primary button--lg custom-get-started"
                            to="/docs/package-url/package-url-overview"
                        >
                            Get Started
                        </Link>
                    </div> */}
                </div>
            </div>

            {/* 2025-10-03 Friday 18:00:17.  A Claude experiment. */}
            {/* <div className={styles.pmGridWrapper}>
                <div className={styles.pmGridContainer}>
                    <div className={styles.pmGrid}>
                        {packageManagers.map((pkg, idx) => (
                            <a
                                key={idx}
                                href={pkg.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.pmCell}
                            >
                                <img
                                    src={pkg.logo}
                                    alt={pkg.name}
                                    className={styles.pmLogo}
                                />
                                <span>{pkg.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* end Claude experiment. */}

            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Package-URL (PURL) implementations</h1>
            </div> */}

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
                                <img src={pkg.logo} alt={pkg.name} className={styles.packageLogo} />
                                <span>{pkg.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

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
            </div>

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
                    <h1>Schemas, standard and more</h1>
                </div>
            </div>

            {/* Two-Column Section */}
            <div className={styles.twoColumn}>
                {/* Left column: schema list */}
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
            </div>
        </Layout>
    );
}
