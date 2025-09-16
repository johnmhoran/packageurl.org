// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// 2025-09-13 Saturday 13:25:26.  JMH timestamp test
const getDeploymentTimestamp = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0]; // 2025-09-13
    const time = now.toISOString().split('T')[1].split('.')[0]; // 23:45:32
    const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
    //   return `${date} ${time} UTC (${weekday})`;
    return `${date} ${time} UTC`;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'packageurl.org',
    tagline: 'Standardizing software package identification for enhanced security and streamlined vulnerability management',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://package-url.github.io/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    //   baseUrl: '/packageurl.org/',
    // 2025-09-08 Monday 23:49:20.  This did not loaded via FileZilla on my new DreamHost account for packageurl.jmh2025.xyz subdomain.  DreamHost suggests changing baseURL to /
    // baseUrl: '/',
    // 2025-09-15 Monday 22:46:40.  Experiment to try to make GH Pages deployment succeed.
      baseUrl: '/packageurl.org/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Package-URL', // Usually your GitHub org/user name.
    projectName: 'packageurl.org', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/package-url',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/package-url',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                // title: 'PURL',
                logo: {
                    alt: 'PURL Logo',
                    src: 'img/logo.png',
                },
                style: 'dark',
                items: [
                    { to: '/', label: 'PURL', position: 'left', exact: true },
                    //   {
                    //     type: 'docSidebar',
                    //     sidebarId: 'mySidebar',
                    //     position: 'left',
                    //     label: 'Docs',
                    //   },
                    //   {to: '/docs/PURL_SPECIFICATION', label: 'PURL Specs', position: 'left'},
                    //   {to: '/docs/PURL_TYPES', label: 'PURL Types', position: 'left'},
                    //   {to: '/docs/purl-standard', label: 'PURL Standard', position: 'left'},

                    {
                        type: 'docSidebar',
                        sidebarId: 'package_url',
                        position: 'left',
                        label: 'Package-URL',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'purl_spec',
                        position: 'left',
                        label: 'PURL Specification',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'vers_spec',
                        position: 'left',
                        label: 'VERS Specification',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'participate',
                        position: 'left',
                        label: 'Participate',
                    },
                    {
                        type: 'docSidebar',
                        // sidebarId: 'group5Sidebar',
                        sidebarId: 'about',
                        position: 'left',
                        label: 'About',
                    },

                    {
                        href: 'https://github.com/package-url',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://cyclonedx.slack.com/archives/C06KTE3BWEB',
                        label: 'Slack',
                        position: 'right',
                    },
                ],
            },
            // 👇 Add docs sidebar settings
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },

            // 👇 Add right-hand TOC settings
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            footer: {
                style: 'dark',
                links: [
                    // {
                    //     title: 'News and Events',
                    //     items: [
                    //         {
                    //             label: 'Newsletter',
                    //             to: 'docs/PURL_SPECIFICATION',
                    //         },
                    //         {
                    //             label: 'Meetings',
                    //             to: 'docs/PURL_SPECIFICATION',
                    //         },
                    //         {
                    //             label: 'Blog',
                    //             to: '/blog',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'Social',
                    //     items: [
                    //         {
                    //             label: 'Gitter',
                    //             href: 'https://app.gitter.im/#/room/#package-url_Lobby:gitter.im',
                    //         },
                    //         {
                    //             label: 'Slack',
                    //             href: 'https://cyclonedx.slack.com/archives/C06KTE3BWEB',
                    //         },
                    //         {
                    //             label: 'Github',
                    //             href: 'https://github.com/package-url',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'Standardisation',
                    //     items: [
                    //         {
                    //             label: 'ECMA',
                    //             href: 'https://ecma-international.org',
                    //         },
                    //         {
                    //             label: 'TC-54 PURL',
                    //             href: 'https://tc54.org/purl/',
                    //         },
                    //         {
                    //             label: 'TC-54 CycloneDX',
                    //             href: 'https://tc54.org/cyclonedx/',
                    //         },
                    //         {
                    //             label: 'TC-54 Transparency Exchange API',
                    //             href: 'https://tc54.org/tea/',
                    //         },
                    //         {
                    //             label: 'ISO',
                    //             href: 'https://www.iso.org/home.html',
                    //         },
                    //     ],
                    // },
                    // {
                    //     title: 'Related Specs',
                    //     items: [
                    //         {
                    //             label: 'CycloneDX',
                    //             href: 'https://cyclonedx.org/',
                    //         },
                    //         {
                    //             label: 'SPDX',
                    //             href: 'https://spdx.dev/',
                    //         },
                    //         {
                    //             label: 'CSAF',
                    //             href: 'https://www.csaf.io/',
                    //         },
                    //         {
                    //             label: 'OpenVEX',
                    //             href: 'https://github.com/openvex/',
                    //         },
                    //         {
                    //             label: 'OSV Schema',
                    //             href: 'https://github.com/ossf/osv-schema',
                    //         },
                    //     ],
                    // },
                    {
                        title: '\u00A0', // non-breaking space: avoids empty-string error, renders blank
                        items: [
                            {
                                html: '<img src="/img/logo1.png" alt="Logo 1" style="max-height:40px; margin-bottom:8px;" />',
                            },
                            {
                                html: '<img src="/img/logo2.png" alt="Logo 2" style="max-height:40px;" />',
                            },
                        ],
                    },
                    {
                        title: 'Social',
                        items: [
                            { label: 'Twitter', href: '#' },
                            { label: 'Facebook', href: '#' },
                        ],
                    },
                    {
                        title: 'GitHub',
                        items: [
                            { label: 'Repo 1', href: '#' },
                            { label: 'Repo 2', href: '#' },
                        ],
                    },
                    {
                        title: 'Gitter',
                        items: [{ label: 'Room 1', href: '#' }],
                    },
                    {
                        title: 'LinkedIn',
                        items: [{ label: 'Company Page', href: '#' }],
                    },
                    {
                        title: 'Slack',
                        items: [{ label: 'Community Slack', href: '#' }],
                    },
                ],
                // copyright: `Copyright © ${new Date().getFullYear()} PURL, Inc. Built with Docusaurus.`,
                // copyright: `Copyright © ${new Date().getFullYear()} Your Project Name. Last deployed: ${getDeploymentTimestamp()}`,
                // copyright: `Copyright © ??  License: ??<br />Built with Docusaurus &nbsp; | &nbsp; Last deployed: ${getDeploymentTimestamp()}`,
                copyright: `Copyright © _____ &nbsp; | &nbsp; License: _____ &nbsp; | &nbsp; Built with Docusaurus <br />Last deployed: ${getDeploymentTimestamp()}`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
