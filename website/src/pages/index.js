import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
    const packages = [
        {
            name: 'alpm',
            url: 'https://archlinux.org/',
            logo: "/img/archlinux-logo-dark-90dpi.png",
        },
        {
            name: 'apk',
            url: 'https://www.alpinelinux.org/',
            logo: "/img/alpine.png",
        },
        {
            name: 'bitbucket',
            url: 'https://bitbucket.org',
            logo: '/img/Bitbucket_mark_brand_RGB_2x.png',
        },
        {
            name: 'bitnami',
            // url: '#',
            // logo: 'https://via.placeholder.com/48?text=Bitnami',
            url: "https://downloads.bitnami.com/files/stacksmith",
            logo: "/img/bitnami-from-github.com_bitnami.png",
        },
        {
            name: 'cargo',
            url: 'https://github.com/rust-lang/cargo',
            logo: '/img/Cargo-Logo-Small.png',
        },
        {
            name: 'cocoapods',
            url: 'https://github.com/CocoaPods/CocoaPods',
            logo: 'https://github.com/cocoapods.png',
        },
        {
            name: 'composer',
            url: 'https://getcomposer.org',
            // logo: 'https://avatars.githubusercontent.com/u/3097571?s=48&v=4',
            logo: "/img/composer.jpg",
        },
        {
            name: 'conan',
            url: 'https://github.com/conan-io/conan',
            logo: 'https://avatars.githubusercontent.com/u/15212165?s=48&v=4',
        },
        {
            name: 'conda',
            url: 'https://github.com/conda/conda',
            // logo: 'https://avatars.githubusercontent.com/u/1249001?s=48&v=4',
            logo: "/img/conda.png",
        },
        {
            name: 'cpan',
            url: 'https://www.cpan.org',
            // logo: 'https://via.placeholder.com/48?text=CPAN',
            logo: "/img/cpan.png",
        },
        {
            name: 'cran',
            url: 'https://cran.r-project.org',
            // logo: 'https://cran.r-project.org/Rlogo.png',
            logo: "/img/cran.png",
        },
        {
            name: 'deb',
            // url: '#',
            url: "https://wiki.debian.org/PackageManagement",
            // logo: 'https://via.placeholder.com/48?text=DEB',
            logo: "/img/debian-openlogo-nd-75.png",
        },
        {
            name: 'docker',
            url: 'https://www.docker.com',
            logo: 'https://avatars.githubusercontent.com/u/5429470?s=48&v=4',
        },
        {
            name: 'gem',
            url: 'https://rubygems.org',
            logo: 'https://github.com/rubygems.png',
        },
        {
            name: 'generic',
            // url: '#',
            // logo: 'https://via.placeholder.com/48?text=Generic',
            url: "https://github.com/package-url/purl-spec/blob/main/types/generic-definition.json",
            logo: "/img/no_logo_placeholder.svg",

        },
        {
            name: 'github',
            // url: 'https://github.com',
            url: 'https://github.com/package-url/purl-spec/blob/main/types/github-definition.json',
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
            // logo: 'https://avatars.githubusercontent.com/u/31460?s=48&v=4',
            logo: "/img/HaskellLogoStyPreview-1.png",
        },
        {
            name: 'hex',
            url: 'https://hex.pm',
            // logo: 'https://avatars.githubusercontent.com/u/17772?s=48&v=4',
            logo: "/img/hex.png",
        },
        {
            name: 'huggingface',
            url: 'https://huggingface.co',
            // logo: 'https://avatars.githubusercontent.com/u/25725506?s=48&v=4',
            logo: "/img/huggingface-logo.svg",
        },
        {
            name: 'luarocks',
            url: 'https://luarocks.org',
            // logo: 'https://avatars.githubusercontent.com/u/16526?s=48&v=4',
            logo: "/img/LuaRockslogo.svg",
        },
        {
            name: 'maven',
            url: 'https://github.com/apache/maven',
            logo: 'https://avatars.githubusercontent.com/u/47359?s=48&v=4',
        },
        {
            name: 'mlflow',
            url: 'https://mlflow.org',
            // logo: 'https://avatars.githubusercontent.com/u/30467620?s=48&v=4',
            logo: "/img/mlflow.png",
        },
        {
            name: 'npm',
            url: 'https://github.com/npm/cli',
            logo: 'https://avatars.githubusercontent.com/u/6078720?s=48&v=4',
        },
        {
            name: 'nuget',
            url: 'https://www.nuget.org',
            logo: 'https://github.com/nuget.png',
        },
        {
            name: 'oci',
            // url: '#',
            // logo: 'https://via.placeholder.com/48?text=OCI',
            url: "https://github.com/opencontainers/distribution-spec",
            logo: "/img/oci.png",
        },
        {
            name: 'pub',
            url: 'https://pub.dev',
            // logo: 'https://avatars.githubusercontent.com/u/4341016?s=48&v=4',
            logo: "/img/pub-gh-logo.png",
        },
        {
            name: 'pypi',
            url: 'https://pypi.org',
            logo: 'https://github.com/pypi.png',
        },
        {
            name: 'qpkg',
            // url: '#',
            // logo: 'https://via.placeholder.com/48?text=QPKG',
            url: "https://blackberry.qnx.com/en",
            logo: "/img/BlackBerry-QNX-logo-white-new.png",
        },
        {
            name: 'rpm',
            // url: '#',
            // logo: 'https://via.placeholder.com/48?text=RPM',
            url: "https://github.com/rpm-software-management/rpm",
            logo: "/img/rpm-gh-logo.png",
        },
        {
            name: 'swid',
            // url: '#',
            // logo: 'https://via.placeholder.com/48?text=SWID',
            url: "https://nvd.nist.gov/products/swid",
            logo: "/img/no_logo_placeholder.svg",
        },
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
                    <h1>General Information</h1>
                </div>
            </div>

            {/* Two-Column Section */}
            <div className={styles.twoColumn}>
                <div className={styles.column}>
                    <h2>Community call</h2>
                    <div className={styles.card}>
                        <p>
                            Join our next PURL community call on 2025-10-15 to
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
        </Layout>
    );
}
