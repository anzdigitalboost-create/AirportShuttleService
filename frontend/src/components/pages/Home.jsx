import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, PlaneTakeoff, PlaneLanding, Plane, Radar, Hourglass, Lock, BadgeCheck, Baby, Clock, Shield, Check } from 'lucide-react'
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

      {/* ── HERO: yellow, with a drive-time board ── */}
      <section className="hero-surface overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
            <div>
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <div className="hero-chip mb-6">
                  <Plane className="w-4 h-4" /> {t('hero.badge')}
                </div>
              </motion.div>
              <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="hero-title text-[2.6rem] sm:text-6xl lg:text-7xl mb-7">
                {t('hero.title1')}
                <br />
                <span className="hero-accent">{t('hero.title2')}</span>
              </motion.h1>
              <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="hero-lead text-xl max-w-xl mb-9">
                {t('hero.subtitle')}
              </motion.p>
              <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                <HeroActions />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="board"
            >
              <div className="board-head">
                <span>{t('home.boardTitle')}</span>
                <PlaneTakeoff className="w-4 h-4 shrink-0" />
              </div>
              {Object.entries(AREAS).map(([slug, a]) => (
                <Link key={slug} to={`/areas/${slug}`} className="board-row group">
                  <span className="font-semibold">{t(`areas.${slug}.name`)}</span>
                  <span className="flex items-center gap-3">
                    <span className="board-time">{t('common.minutes', { range: a.driveTime })}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
              <div className="board-note">{t('home.boardNote')}</div>
            </motion.div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="trust-strip">
          <ul className="container-max px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm font-bold">
            {chips.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 shrink-0" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DIRECTIONS ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.dirEyebrow')} title={t('home.dirTitle')} />
          <div className="grid md:grid-cols-2 gap-6">
            {t('home.dirs').map(({ title, text }, i) => {
              const Icon = DIR_ICONS[i]
              return (
                <Link key={title} to={DIR_PATHS[i]} className={`card card-lg card-link group ${i === 0 ? 'card-featured' : ''}`}>
                  <div className="card-icon"><Icon className="w-6 h-6" /></div>
                  <h3 className="card-title text-3xl">{title}</h3>
                  <p className="card-text mb-6">{text}</p>
                  <span className="card-action">
                    {t('common.learnMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────── */}
      <section className="section-padding band-alt">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.incEyebrow')} title={t('home.incTitle')} />
          <FeatureGrid items={withIcons(t('home.inc'), INC_ICONS)} cols={3} />
        </div>
      </section>

      {/* Live Google reviews of our operator */}
      <GoogleReviews />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('home.faqTitle')} />
          <Faq items={t('home.faqs')} />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
