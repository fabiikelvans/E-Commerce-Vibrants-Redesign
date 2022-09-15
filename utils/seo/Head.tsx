import NextHead from 'next/head';
import React from 'react';

import { GoogleAnalytics } from './GoogleAnalytics';

export interface HeadProps {
    title: string;
    keywords: string,
    description: string;
    ogTitle: string;
    ogType: string;
    ogUrl: string
    ogImage: string;
}

export const Head = React.memo<HeadProps>(props => {
    const {title, keywords, description, ogTitle, ogType, ogUrl, ogImage} = props;

    return (
        <NextHead>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="keywords" content={keywords}></meta>
            <meta name="description" content={description}></meta>
            <meta property="og:title" content={ogTitle} />
            <meta property="og:type" content={ogType} />
           <meta property="og:url" content={ogUrl} />
           <meta property="og:image" content={ogImage} />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="/favicon.webp"></link>
           <title>{title}</title>

            <GoogleAnalytics />
        </NextHead>
    );
});

Head.displayName = 'Head';
