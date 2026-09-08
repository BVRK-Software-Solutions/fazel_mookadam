import Header from './components/Header'
import Hero from './components/Hero'
import { About, Care } from './components/AboutCare'
import BackToTop from './components/BackToTop'
import { Contact, Hours } from './components/HoursContact'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <a
                href="#main"
                className="bg-brand-950 fixed -top-24 left-4 z-[100] rounded-lg px-4 py-3 text-white focus:top-4"
            >
                Skip to content
            </a>
            <Header />
            <main id="main">
                <Hero />
                <About />
                <Care />
                <Hours />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}
