// src/app/service/meta.service.ts
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class MetaService {
    constructor(
        private meta: Meta,
        private title: Title
    ) { }

    setMetaTags(config: {
        title: string;
        description: string;
        keywords?: string;
        image?: string;
        url?: string;
        type?: string;
    }) {
        // Set page title
        this.title.setTitle(config.title);

        // Remove existing meta tags to avoid duplicates
        this.meta.removeTag("name='description'");
        this.meta.removeTag("name='keywords'");
        this.meta.removeTag("property='og:title'");
        this.meta.removeTag("property='og:description'");
        this.meta.removeTag("property='og:image'");
        this.meta.removeTag("property='og:url'");
        this.meta.removeTag("property='og:type'");
        this.meta.removeTag("name='twitter:title'");
        this.meta.removeTag("name='twitter:description'");
        this.meta.removeTag("name='twitter:image'");

        // Add meta tags
        this.meta.addTag({ name: 'description', content: config.description });

        if (config.keywords) {
            this.meta.addTag({ name: 'keywords', content: config.keywords });
        }

        // Open Graph tags (for social media sharing)
        this.meta.addTag({ property: 'og:title', content: config.title });
        this.meta.addTag({ property: 'og:description', content: config.description });

        if (config.image) {
            this.meta.addTag({ property: 'og:image', content: config.image });
        }

        if (config.url) {
            this.meta.addTag({ property: 'og:url', content: config.url });
        }

        this.meta.addTag({ property: 'og:type', content: config.type || 'website' });

        // Twitter Card tags
        this.meta.addTag({ name: 'twitter:title', content: config.title });
        this.meta.addTag({ name: 'twitter:description', content: config.description });

        if (config.image) {
            this.meta.addTag({ name: 'twitter:image', content: config.image });
        }

        // Canonical URL
        if (config.url) {
            this.meta.removeTag("rel='canonical'");
            const link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            link.setAttribute('href', config.url);
            document.head.appendChild(link);
        }
    }

    setDefaultMetaTags() {
        this.setMetaTags({
            title: 'TesQuirel - AI-Powered Testing Platform',
            description: 'TesQuirel provides intelligent, no-code testing solutions for modern applications.',
            keywords: 'testing, QA, automation, AI, no-code',
            image: 'https://tesquirel.com/assets/images/logo.png',
            url: 'https://tesquirel.com',
            type: 'website'
        });
    }
}