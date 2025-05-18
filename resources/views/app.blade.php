<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">


        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        
        <!-- Box Icons -->
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

        {{-- SEO --}}
        <title inertia>Home | Kreavoks Official </title>
        <meta name="description" content="Kreavoks menyediakan layanan pembuatan Software(Website & Mobile App), E-Course & Workshop pelatihan skill digital, dan desain branding. Kami mendukung bisnis Anda dengan solusi digital yang kreatif dan efektif." />
        <link rel="canonical" href="https://kreavoks.my.id/" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Kreavoks Official" />
        <meta property="og:description" content="Kreavoks menyediakan layanan pembuatan Software(Website & Mobile App), E-Course & Workshop pelatihan skill digital, dan desain branding. Kami mendukung bisnis Anda dengan solusi digital yang kreatif dan efektif." />
        <meta property="og:url" content="https://kreavoks.my.id/" />
        <meta property="og:site_name" content="Kreavoks Official" />
        <meta property="article:modified_time" content="2024-09-23T14:57:04+00:00" />
        <meta property="og:image" content="https://kreavoks.my.id/wp-content/uploads/2024/09/circle-yellow.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://kreavoks.my.id/","url":"https://kreavoks.my.id/","name":"Home | kreavoks official","isPartOf":{"@id":"https://kreavoks.my.id/#website"},"about":{"@id":"https://kreavoks.my.id/#organization"},"primaryImageOfPage":{"@id":"https://kreavoks.my.id/#primaryimage"},"image":{"@id":"https://kreavoks.my.id/#primaryimage"},"thumbnailUrl":"https://kreavoks.my.id/wp-content/uploads/2024/09/circle-yellow.png","datePublished":"2024-09-13T13:05:08+00:00","dateModified":"2024-09-23T14:57:04+00:00","description":"Kreavoks menyediakan layanan pembuatan Software(Website & Mobile App), E-Course & Workshop pelatihan skill digital, dan desain branding. Kami mendukung bisnis Anda dengan solusi digital yang kreatif dan efektif.","breadcrumb":{"@id":"https://kreavoks.my.id/#breadcrumb"},"inLanguage":"id","potentialAction":[{"@type":"ReadAction","target":["https://kreavoks.my.id/"]}]},{"@type":"ImageObject","inLanguage":"id","@id":"https://kreavoks.my.id/#primaryimage","url":"https://kreavoks.my.id/wp-content/uploads/2024/09/circle-yellow.png","contentUrl":"https://kreavoks.my.id/wp-content/uploads/2024/09/circle-yellow.png","width":252,"height":163},{"@type":"BreadcrumbList","@id":"https://kreavoks.my.id/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://kreavoks.my.id/#website","url":"https://kreavoks.my.id/","name":"kreavoks","description":"","publisher":{"@id":"https://kreavoks.my.id/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://kreavoks.my.id/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"id"},{"@type":"Organization","@id":"https://kreavoks.my.id/#organization","name":"kreavoks official","url":"https://kreavoks.my.id/","logo":{"@type":"ImageObject","inLanguage":"id","@id":"https://kreavoks.my.id/#/schema/logo/image/","url":"https://kreavoks.my.id/wp-content/uploads/2024/10/lOGO-IG.png","contentUrl":"https://kreavoks.my.id/wp-content/uploads/2024/10/lOGO-IG.png","width":1000,"height":1000,"caption":"kreavoks official"},"image":{"@id":"https://kreavoks.my.id/#/schema/logo/image/"},"sameAs":["https://www.linkedin.com/in/kreavoks/","https://www.instagram.com/kreavoks/?hl=id"]}]}</script>
        <meta name="msvalidate.01" content="A8444A4FC65905CCAFC1E76F4DCD81B5" />
        <meta name="yandex-verification" content="0e472f01007bf672" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>