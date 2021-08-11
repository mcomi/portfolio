import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'

export async function markdownToHtml(markdown) {

    const result = await remark()
        .use(remarkSlug)
        // Note that this module must be included after `remark-slug`.
        .use(remarkAutolinkHeadings)
        .use(remarkToc)
        .use(html)
        .use(prism, {
            plugins: [
                'line-numbers',
            ],
    }).process(markdown);

    return result.toString()
}
