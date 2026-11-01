import { MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../lib/i18n'
import { BUSINESS, wa } from '../lib/site'
import { LanguageSwitch, Logo, WhatsAppIcon } from './ui'

export default function Footer() {
  const { t, lang } = useLanguage()

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'training', label: t.nav.training },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo asLink={false} />
            <p>{t.footer.tagline}</p>
          </div>

          <nav aria-labelledby="footer-explore">
            <p className="footer__title" id="footer-explore">
              {t.footer.explore}
            </p>
            <div className="footer__links">
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer__title" id="footer-contact">
              {t.footer.contact}
            </p>
            <div className="footer__contact">
              <a href={BUSINESS.phoneHref} dir="ltr">
                <Phone size={15} aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={wa(t.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                {t.actions.whatsapp}
              </a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={15} aria-hidden="true" />
                {lang === 'ar' ? BUSINESS.addressAr : BUSINESS.addressEn}
              </a>
            </div>

            <div className="footer__lang">
              <span className="footer__lang-label">{t.langLabel}</span>
              <LanguageSwitch className="lang-switch--footer" />
            </div>
          </div>
        </div>

        <div className="footer__watermark" aria-hidden="true">
          Fitness Park
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            {t.footer.demo} <strong>{t.footer.notAffiliated}</strong>
          </p>
          <span className="footer__credit">
            {t.footer.credit.replace('TRIBAL³', '')}
            <strong>TRIBAL³</strong>
          </span>
        </div>
      </div>
    </footer>
  )
}
