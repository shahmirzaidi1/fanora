'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import content from './content.json'
import './styles.css'
import CategoriesSection from '@/components/categoriesCircle'


export default function Page() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [year, setYear] = useState('')

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    }, [])

    return (
        <>
            {/* <Head>
        <title>{content.meta.title}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head> */}

            <nav className="bg-white shadow-xl sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href={content.nav.logo.href} className="text-3xl font-bold gradient-text">
                        {content.nav.logo.text}
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        {content.nav.links.map((link) => (
                            <Link
                                key={link.text}
                                href={link.href}
                                className={`transition duration-300 font-medium ${link.active ? 'text-brand' : 'text-gray-700 hover:text-brand'
                                    }`}
                            >
                                {link.text}
                            </Link>
                        ))}
                        <Link
                            href={content.nav.cta.href}
                            className="btn-primary font-semibold py-2 px-6 transition duration-300 transform hover:scale-105"
                        >
                            {content.nav.cta.text}
                        </Link>
                    </div>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-brand focus:outline-none"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`${mobileOpen ? '' : 'hidden'} md:hidden bg-white shadow-2xl`}>
                    {[...content.nav.links, content.nav.mobileCta].map((link) => (
                        <Link
                            key={link.text}
                            href={link.href}
                            className={`block py-3 px-5 text-sm ${'cta' in link && link.cta
                                ? 'text-white bg-blue-700 hover:bg-blue-800 text-center'
                                : 'active' in link && link.active
                                    ? 'text-brand bg-blue-50'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-brand'
                                }`}
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </nav>

            <header
                className="text-white py-24 md:py-40 relative"
            >
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, rgba(191, 0, 60, 0.85) 0%, rgba(8, 86, 255, 0.7) 100%), url('https://www.divaonline.com.pk/wp-content/uploads/2020/04/BeFunky-collage-2020-04-20T124622.568-1170x600.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -999,
                    }}
                />
                <div className="relative z-10"></div>
                <div className="container mx-auto px-6 text-center">
                    <h1 className=" md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg" style={{ "fontSize": "6rem" }}>
                        {content.hero.heading}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-blue-100 italic" style={{ "fontWeight":"500","fontSize": "2rem" }}>{content.hero.subheading}</p>
                    <form
                        className="max-w-xl mx-auto mb-10"
                        onSubmit={(e) => {
                            e.preventDefault()
                            // @ts-ignore
                            const q = e.target.heroSearchInput.value
                            window.location.href = `/browse?search=${encodeURIComponent(q)}`
                        }}
                    >
                        <div className="flex items-center bg-white rounded-full shadow-2xl overflow-hidden p-2">
                            <input
                                id="heroSearchInput"
                                name="heroSearchInput"
                                type="search"
                                placeholder={content.hero.searchPlaceholder}
                                className="w-full px-6 py-4 text-gray-700 focus:outline-none rounded-full"
                            />
                            <button
                                type="submit"
                                className="btn-primary hover:bg-navy-700 text-white px-8 py-3 transition duration-300 ml-2"
                            >
                                <i className="fas fa-star"></i> {content.hero.searchButtonText}
                            </button>
                        </div>
                    </form>
                    <Link
                        href={content.hero.explore.href}
                        className="btn-secondary font-bold py-3 px-10 text-lg shadow-xl transform hover:scale-105 transition duration-300 inline-block"
                    >
                        {content.hero.explore.text}
                    </Link>
                </div>
            </header>

            <section className="spotlight-bg">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-center text-white" style={{ "color": "#fff" }}>{content.spotlight.title}</h2>
                    <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden md:flex card-hover p-4">
                        <div className="md:w-2/5">
                            <img
                                src={content.spotlight.imageSrc}
                                alt={content.spotlight.name}
                                className="star-image rounded-2xl"
                                onError={(e) => {
                                    // @ts-ignore
                                    e.currentTarget.src = content.spotlight.imageFallback
                                }}
                            />
                        </div>
                        <div className="md:w-3/5 p-8 md:pl-10">
                            <h3 className="text-3xl font-bold mb-3 text-gray-800">{content.spotlight.name}</h3>
                            <p className="text-lg text-brand-secondary font-semibold mb-4">{content.spotlight.role}</p>
                            <p className="text-gray-700 text-md mb-6">{content.spotlight.description}</p>
                            <div className="mb-6">
                                <span className="text-gray-700 font-semibold text-md">{content.spotlight.eta.label}</span>{' '}
                                <span className="text-brand font-bold">{content.spotlight.eta.value}</span>
                            </div>
                            <Link
                                href={content.spotlight.requestLink}
                                className="btn-secondary font-semibold py-3 px-8 rounded-full transition duration-300 w-full text-center text-lg transform hover:scale-105"
                            >
                                {content.spotlight.requestText} ({content.spotlight.price})
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Star Lineup */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-center">{content.starLineupSection.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {content.starLineupSection.stars.map((star) => (
                            <div
                                key={star.name}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover transition duration-300 flex flex-col"
                            >
                                <img
                                    src={star.imageSrc}
                                    alt={star.name}
                                    className="featured-star-image"
                                    onError={(e) => {
                                        // @ts-ignore
                                        e.currentTarget.src = star.imageFallback
                                    }}
                                />
                                <div className="p-6 flex-grow">
                                    <h3 className="text-2xl font-semibold mb-1 text-gray-800">{star.name}</h3>
                                    <p className="text-sm text-brand-secondary mb-3 font-medium">{star.role}</p>
                                    <p className="text-gray-600 text-sm mb-4">{star.description}</p>
                                    <p className="price-tag">{star.price}</p>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link
                                        href={star.profileLink}
                                        className="btn-primary text-sm font-semibold py-2.5 px-4 transition duration-300 w-full text-center block"
                                    >
                                        {content.starLineupSection.viewProfileText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link
                            href={content.starLineupSection.cta.href}
                            className="btn-secondary font-bold py-3.5 px-12 text-lg shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            {content.starLineupSection.cta.text}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Occasions */}
            <section id="occasions-home" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-center">{content.occasionsSection.title}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 text-center">
                        {content.occasionsSection.occasions.map((o) => (
                            <Link key={o.id} href={`${content.occasionsSection.baseHref}#${o.id}`} className="occasion-card p-6 shadow-lg">
                                <div className="text-5xl text-brand mb-3">
                                    <i className={o.iconClass}></i>
                                </div>
                                <h4 className="font-semibold text-gray-700 text-lg">{o.title}</h4>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href={content.occasionsSection.viewAll.href} className="text-brand hover:text-brand-secondary font-semibold text-lg">
                            {content.occasionsSection.viewAll.text} <i className="fas fa-arrow-right ml-1"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works-home" className="py-20 bg-blue-50">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-center">{content.howItWorksSection.title}</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        {content.howItWorksSection.steps.map((step, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow-xl card-hover">
                                <div className="how-it-works-icon-bg">
                                    <i className={step.iconClass}></i>
                                </div>
                                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href={content.howItWorksSection.learnMore.href} className="text-brand hover:text-brand-secondary font-semibold text-lg">
                            {content.howItWorksSection.learnMore.text} <i className="fas fa-arrow-right ml-1"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-white">
                <CategoriesSection {...content.categoriesSection} />
        </section >

            {/* Testimonials */ }
            < section className = "py-20 bg-blue-50" >
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-center">{content.testimonialsSection.title}</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {content.testimonialsSection.testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card p-8 rounded-xl shadow-xl card-hover">
                                <div className="flex items-center mb-5">
                                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mr-5 border-2 border-blue-300 p-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-xl text-gray-800">{t.name} - {t.location}</h4>
                                        <div className="text-yellow-400 text-lg mt-1">
                                            {Array.from({ length: t.rating.full }).map((_, idx) => (
                                                <i key={idx} className="fas fa-star"></i>
                                            ))}
                                            {t.rating.half && <i className="fas fa-star-half-alt"></i>}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-md italic">{t.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

        {/* Final CTA */ }
        < section className = "py-24 hero-bg text-white" >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{content.finalCta.heading}</h2>
                <p className="text-xl md:text-2xl mb-10 text-blue-200">{content.finalCta.subheading}</p>
                <div className="space-y-5 md:space-y-0 md:space-x-6">
                    <Link
                        href={content.finalCta.find.href}
                        className="btn-secondary font-bold py-4 px-12 text-lg shadow-xl transform hover:scale-105 transition duration-300 inline-block"
                    >
                        {content.finalCta.find.text}
                    </Link>
                    <Link
                        href={content.finalCta.signup.href}
                        className="bg-white text-brand font-bold py-3.5 px-10 rounded-full hover:bg-blue-100 transition duration-300 text-lg shadow-xl inline-block transform hover:scale-105"
                    >
                        {content.finalCta.signup.text}
                    </Link>
                </div>
            </div>
            </section >

        {/* Footer */ }
        < footer className = "bg-gray-900 text-gray-300 py-16" >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 gradient-text">{content.footer.brand}</h3>
                        <p className="text-sm mb-4">{content.footer.description}</p>
                        <div className="flex space-x-5">
                            {content.footer.social.map((s) => (
                                <Link key={s.platform} href={s.href} className="text-gray-400 hover:text-white text-xl">
                                    <i className={s.iconClass}></i>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">{content.footer.quickLinksTitle}</h4>
                        <ul className="space-y-2 text-sm">
                            {content.footer.quickLinks.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="hover:text-blue-300 transition duration-300">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">{content.footer.newsletter.title}</h4>
                        <p className="text-sm mb-3">{content.footer.newsletter.description}</p>
                        <form>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder={content.footer.newsletter.placeholder}
                                    className="w-full px-4 py-2.5 text-sm text-gray-800 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="submit" className="btn-secondary px-6 py-2.5 rounded-r-full transition duration-300 -ml-1">
                                    {content.footer.newsletter.buttonText}
                                </button>
                            </div>
                        </form>
                        <p className="text-xs mt-4">{content.footer.newsletter.note}</p>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-10 text-center text-sm">
                    <p>
                        &copy; {year} {content.footer.brand}. {content.footer.rights}{' '}
                        <i className="fas fa-heart text-blue-400"></i> {content.footer.craftedFor}
                    </p>
                </div>
            </div>
            </footer >
        </>
    )
}
