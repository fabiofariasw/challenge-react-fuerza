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
        <h1>Lorem Ipsum is simply dummy!</h1>
        <div className="main">
          <img src={arrowLeft} alt="" />
          <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          </p>
          <img src={arrowRight} alt="" />
        </div>
          <Button className="primary"/>
      </section>

      <section className="container">
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

      <section className="container">
          <div className="c-card">
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

          <div className="c-card">
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

          <div className="c-card">
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
      </section>

      <section className="random">
        <div className="container">
          <div className="c-random">
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
