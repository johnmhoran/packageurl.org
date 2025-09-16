/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    //   mySidebar: [
    //     {
    //       type: 'doc',
    //       id: 'PURL_SPECIFICATION', // must match the file's frontmatter `id` or filename (see note below)
    //       label: 'PURL Specification',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'PURL_TYPES', // must match the file's frontmatter `id` or filename (see note below)
    //       label: 'PURL Types',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'purl-standard', // must match the file's frontmatter `id` or filename (see note below)
    //       label: 'PURL Standard',
    //     },
    //   ],
    // New group 1
    package_url: [
        'package-url/package-url-overview',
        'package-url/package-url-purl-and-vers',
        'package-url/package-url-projects',
    ],

    // New group 2
    purl_spec: [
        'purl-spec/purl-spec-overview',
        'purl-spec/purl-spec-purl-types',
        'purl-spec/purl-spec-documentation',
        'purl-spec/purl-spec-schemas',
        'purl-spec/purl-spec-adopters',
    ],

    // Group 3
    vers_spec: [
        'vers-spec/vers-spec-overview',
        'vers-spec/vers-spec-documentation',
        'vers-spec/vers-spec-schemas',
        'vers-spec/vers-spec-adopters',
    ],

    // Group 4
    participate: [
        'participate/participate-contribute',
        'participate/participate-meetings',
        'participate/participate-events',
    ],

    // Group 5
    about: [
        'about/about-guiding-principles',
        'about/about-supporters',
        'about/about-related-specs',
        'about/about-history',
    ],
};

export default sidebars;
