import './styles/global.scss';
import './styles/_background.scss';
import './styles/_card.scss';
import './styles/_random.scss';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { Footer } from './components/Footer';


import bgImg from './assets/backgroundImg.png';
import arrowLeft from './assets/icon-arrow-left.svg';
import arrowRight from './assets/icon-arrow-right.svg';

import footballImg from './assets/icon-football.svg';
import rayImg from './assets/icon-ray.svg';
import steamImg from './assets/icon-steam.svg';

import laptopImg from './assets/image-laptop-code.png';
import monitorImg from './assets/image-monitor.png';
import screensCodeImg from './assets/image-screens-code.png';


export function App() {
  return (
    <>
      <Header />
      <section className="c-background">
        <img className="__image" src={bgImg} alt="" />
        <div className="main">
          <img className="arrowLeft" src={arrowLeft} alt="" />
          <div className="c-main">
            <h1>Lorem Ipsum is simply dummy!</h1>
            <p>
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
            </p>
            <Button className="primary" />
          </div>
          <img className="arrowRight" src={arrowRight} alt="" />
        </div>
      </section>

      <section className="c1-card container">
        <div className="__item">
          <img src={footballImg} alt="" />
          <h2>Lorem Ipsum is simply dummy!</h2>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
          </p>
        </div>

        <div className="__item">
          <img src={rayImg} alt="" />
          <h2>Nam tortor quaeget</h2>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since
          </p>
        </div>

        <div className="__item">
          <img src={steamImg} alt="" />
          <h2>Maecenas vehicula tincidunt</h2>
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
          </p>
        </div>
      </section>

      <section className="cards">
          <div className="c2-card container">
            <div className="card">
              <img src={laptopImg} alt="" />
              <div className="info-category">
                <span className="label">Category</span>
                <span className="date">02/12/2021</span>
              </div>
              <h2>Lorem Ipsum is simply dummy!</h2>
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
              </p>
            </div>

            <div className="card">
              <img src={monitorImg} alt="" />
              <div className="info-category">
                <span className="label">Category</span>
                <span className="date">02/12/2021</span>
              </div>
              <h2>Lorem Ipsum is simply dummy!</h2>
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
              </p>
            </div>

            <div className="card">
              <img src={screensCodeImg} alt="" />
              <div className="info-category">
                <span className="label">Category</span>
                <span className="date">02/12/2021</span>
              </div>
              <h2>Lorem Ipsum is simply dummy!</h2>
              <p>
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
              </p>
            </div>
          </div>
      </section>

      <section className="random">
        <div className="c-random container">
          <div className="conteudo-random">
            <div className="info-sub-footer">
              <h2>Lorem Ipsum is simply dummy!</h2>
              <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>
            </div>
            <Button className="secondary" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
