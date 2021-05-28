import Head from 'next/head'

function Meta({title, keywords, description}) {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Webdev News',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev'
}

export default Meta
