import { Suspense, lazy } from 'react'

import { ComponentLoader, SectionSkeleton } from '../loading/Loading'

const BonusSection = lazy(() => import("./BonusSection"))
const CasinoGameSection = lazy(() => import("./CasinoGameSection"))
const MainAccordion = lazy(() => import("./MainAccordion"))
const MainBetLive = lazy(() => import("./MainBetLive"))
const MainContentHeader = lazy(() => import("./MainHeader"))
const MainHotMatch = lazy(() => import("./MainHotMatch"))
const MainLiveMatch = lazy(() => import("./MainLiveMatch"))
const MenuTab = lazy(() => import("./MenuTab"))
const RegistrationGuide = lazy(() => import("./RegisterGuide"))
const ResponsibleGamblingAccordion = lazy(() => import("./ResponsibleGamblingAccordion"))

const Main = () => {
    return (
        <main className="flex flex-col gap-8 bg-black">
            {/* Critical above-the-fold content - load immediately */}
            <Suspense fallback={<SectionSkeleton height="h-64" />}>
                <MainContentHeader />
            </Suspense>

            <Suspense fallback={<SectionSkeleton height="h-48" />}>
                <MainAccordion />
            </Suspense>

            {/* Below-the-fold content - lazy load */}
            <Suspense fallback={<SectionSkeleton height="h-56" />}>
                <MainHotMatch />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
                <MainBetLive />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
                <MainLiveMatch />
            </Suspense>

            <Suspense fallback={<SectionSkeleton height="h-40" />}>
                <MenuTab />
            </Suspense>

            <Suspense fallback={<SectionSkeleton height="h-40" />}>
                <RegistrationGuide />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
                <BonusSection />
            </Suspense>

            <Suspense fallback={<ComponentLoader />}>
                <CasinoGameSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton height="h-64" />}>
                <ResponsibleGamblingAccordion />
            </Suspense>
        </main>
    )
}

export default Main