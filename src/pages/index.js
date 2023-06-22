import Link from 'next/link'
import Image from 'next/image'
import hero from '../../public/assets/hero.png'

export default function HomePage() {
  return (
    <div className="grid-halves h-screen-navbar">
      <div className="bg-teal border-right">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="content-grid home-hero">
              <h1>
                O melhor e <br />mais épico dos produtos.
              </h1>
              <p className="section-subtitle">
                {"Todas os melhores e épicas coisas da internet em um só lugar."}
              </p>
              <Link href="/products" className="large-button">
                <div className="large-button-text">Explore mais</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-salmon">
        <div className="column-padding centered">
          <callout-wrap>
            <Image src={hero} alt="" placeholder="blur" className="callout-image"></Image>
          </callout-wrap>
        </div>
      </div>
    </div>
  )
}