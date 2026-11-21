import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, PlaneTakeoff, PlaneLanding, Plane, Radar, Hourglass, Lock, BadgeCheck, Baby, Clock, Shield, Check, MapPin } from 'lucide-react'
import GoogleReviews from '../GoogleReviews'
import PageMeta from '../PageMeta'
import { fadeUp, SectionHeading, FeatureGrid, Faq, CtaBand, HeroActions, withIcons } from '../Sections'
import { AREAS } from '../../data/site'

// Icons and links pair with the translated items in locales/*.js by position.
const DIR_ICONS = [PlaneTakeoff, PlaneLanding]
const DIR_PATHS = ['/to-auckland-airport', '/from-auckland-airport']
const INC_ICONS = [Radar, Hourglass, Lock, BadgeCheck, Baby, Clock]

export default function Home() {
  const { t } = useTranslation()
  const chips = [
    { icon: Shield, label: t('chips.insured') },
    { icon: Clock, label: t('chips.always') },
    { icon: Check, label: t('chips.fixed') },
    { icon: Plane, label: t('chips.flight') },
  ]

  return (
    <div>
      <PageMeta title={null} description={t('meta.home.desc')} />

      {/* ── HERO: centred, friendly ─────────────────────────── */}
      <section className="hero-surface">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="hero-chip mb-6">
              <Clock className="w-4 h-4" /> {t('hero.badge')}
            </div>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="hero-title text-[2.5rem] sm:text-6xl max-w-3xl mx-auto mb-5">
            {t('hero.title1')}
            <span className="hero-accent">{t('hero.title2')}</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="hero-lead text-lg sm:text-xl max-w-xl mx-auto mb-8">
            {t('hero.subtitle')}
          </motion.p>
          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
            <HeroActions className="justify-center" />
          </motion.div>
        </div>

        {/* Two directions, as pastel panels */}
        <div className="container-max px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid md:grid-cols-2 gap-5">
            {t('home.dirs').map(({ title, text }, i) => {
              const Icon = DIR_ICONS[i]
              return (
                <Link key={title} to={DIR_PATHS[i]} className="card card-link group min-h-[220px] flex flex-col">
                  <div className="card-icon"><Icon className="w-6 h-6" /></div>
                  <h2 className="card-title">{title}</h2>
                  <p className="card-text mb-4">{text}</p>
                  <span className="card-action mt-auto">
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Trust chips */}
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="pill">
                <Icon className="w-4 h-4 shrink-0" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DRIVE TIMES BY AREA ─────────────────────────────── */}
      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading title={t('home.boardTitle')}>{t('home.boardNote')}</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Object.entries(AREAS).map(([slug, a]) => (
              <Link key={slug} to={`/areas/${slug}`} className="area-chip !rounded-3xl flex-col !items-start !gap-1.5">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand shrink-0" /> {t(`areas.${slug}.name`)}</span>
                <span className="text-brand font-black text-lg">{t('common.minutes', { range: a.driveTime })}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.incEyebrow')} title={t('home.incTitle')} />
          <FeatureGrid items={withIcons(t('home.inc'), INC_ICONS)} cols={3} />
        </div>
      </section>

      {/* Live Google reviews of our operator */}
      <GoogleReviews />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('home.faqTitle')} />
          <Faq items={t('home.faqs')} />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
