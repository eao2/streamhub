import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Landing.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Landing() {
  return (
    <div className={style.body}>
      <Head>
        <title>Streamhub mongolia</title>
      </Head>
      <Navbar/>
    <section className={style.con}>
      <div className={style.T}>
        <div className={style.s1}>
        <div className={style.c1} />
          <p className={style.p_1}>- for streamers</p>
          <h1 className={style.H}>The Next<br /> Generation<br /> <a>Donation</a> Method.</h1>
          <p className={style.descriptionv}>Made by streamers. Made for streamers.</p>
        </div>
      </div>
      <div className={style.indi}>
        <span>1241+ <p>DONATION</p></span>
        <div />
        <span>123+ <p>TRUSTED BY STREAMERS</p></span>
        <div />
        <span>₮69M+ <p>TRANSACTION</p></span>
      </div>
      <div className={style.introduction}>
        <section className={style.sec}>
          <div className={style.c2} />
          <div className={style.txt}>
            <h1 className={style.title}>Бүртгэлийн хураамжгүй
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c10.6 1.6 42.1 6.7 55.1 10c17.1 4.3 27.5 21.7 23.2 38.9s-21.7 27.5-38.9 23.2c-9.3-2.4-37.6-7-48.9-8.7c-32.1-4.8-59.6-2.4-78.5 4.9c-18.3 7-25.9 16.9-27.9 28c-1.9 10.7-.5 16.8 1.3 20.6c1.9 4 5.6 8.5 12.9 13.4c16.2 10.8 41.1 17.9 73.3 26.7l2.8 .8c28.4 7.7 63.2 17.2 89 34.3c14.1 9.4 27.3 22.1 35.5 39.7c8.3 17.8 10.1 37.8 6.3 59.1c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.2-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.4 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.7 .5-16.8-1.3-20.6c-1.9-4-5.6-8.5-12.9-13.4c-16.2-10.8-41.1-17.9-73.3-26.7l-2.8-.8c-28.4-7.7-63.2-17.2-89-34.3c-14.1-9.4-27.3-22.1-35.5-39.7c-8.3-17.8-10.1-37.8-6.3-59.1C25 114.1 53 89.3 86 76.7c13-5 27.2-8.2 42-10V32c0-17.7 14.3-32 32-32z"/></svg>
            </h1>
            <p>
              Streamhub нь ямар ч бүртгэлийн хураамжгүй. Цоо шинээр стрийм хийж эхлэж байгаа залуучууд анхныхаа стриймнээсээ л алерт, goal, marathon widget болон манай бүх үйлчилгээг ашиглаад эхлэх боломжтой.
            </p>
          </div>
          <div className={style.imgs}>
          </div>
        </section>
        <section className={style.sec}>
          <div className={style.txt}>
            <h1 className={style.title}>Аюулгүй
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
            </h1>
            <p>
            Бусад ойролцоо үйлчилгээ үзүүлдэг сайтууд шиг таны банкны нэвтрэх нэр, нууц үгийг шаардахгүй. Орсон гарсан гүйлгээ, дансны үлдэгдэл болон дансны хуулгыг тань хором бүр татаад, хянаад байх боломжгүй. 
            </p>
          </div>
          <div className={style.imgs}>
          </div>
        </section>
        <section className={style.sec}>
          <div className={style.c3}/>
          <div className={style.txt}>
            <h1 className={style.title}>Хурдан
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/></svg>
            </h1>
            <p>
              Бид бусад ойролцоо үйлчилгээ үзүүлдэг сайтууд шиг таны дансны хуулгыг тодорхой интервалаар татаад шинийг нь ялгаад байдаггүй. Үзэгч qpay ашиглан мөнгө илгээхэд л тэр дороо стриймэн дээр тань алерт гарч байх болно.
            </p>
          </div>
          <div className={style.imgs}>
          </div>
        </section>
        <section className={style.sec}>
          <div className={style.c4} />
          <div className={style.txt}>
            <h1 className={style.title}>Made by streamers
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M345.3 472.1C347.3 479.7 350.9 486.4 355.7 491.8C325.1 504.8 291.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 285.3 507.1 313.4 498 339.7C486.9 334.1 474.5 333.1 461.8 334.6C459.7 329.4 457 324.6 453.9 320.1C460.5 299.9 464 278.4 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C285.4 464 313.5 457.9 338.9 446.8L345.3 472.1zM288.7 334.3C284.4 339.5 278.5 344 271.9 347.7C269.2 349.3 266.3 350.7 263.2 352C266.3 353.3 269.2 354.7 271.9 356.3C278.5 359.1 284.4 364.5 288.7 369.7C292.9 374.8 296 381.1 296 388C296 394.9 292.9 401.2 288.7 406.3C284.4 411.5 278.5 416 271.9 419.7C258.7 427.1 241.4 432 224 432C220.4 432 217.2 429.5 216.3 426C215.3 422.5 216.9 418.8 220.1 417L220.1 417L220.3 416.9C220.5 416.8 220.8 416.6 221.2 416.3C222 415.9 223.2 415.1 224.6 414.2C227.4 412.4 231.2 409.7 234.8 406.6C238.6 403.5 242 400 244.5 396.6C246.1 393 248 390.2 248 388C248 385.8 246.1 382.1 244.5 379.4C242 375.1 238.6 372.5 234.8 369.4C231.2 366.3 227.4 363.6 224.6 361.8C223.2 360.9 222 360.1 221.2 359.7C220.8 359.4 220.5 359.2 220.3 359.1L220.1 358.1L220.1 358.1C217.6 357.6 216 354.9 216 352C216 349.1 217.6 346.4 220.1 345L220.1 345L220.3 344.9C220.5 344.8 220.8 344.6 221.2 344.3C222 343.9 223.2 343.1 224.6 342.2C227.4 340.4 231.2 337.7 234.8 334.6C238.6 331.5 242 328.1 244.5 324.6C246.1 321 248 318.2 248 316C248 313.8 246.1 310.1 244.5 307.4C242 303.1 238.6 300.5 234.8 297.4C231.2 294.3 227.4 291.6 224.6 289.8C223.2 288.9 222 288.1 221.2 287.7C220.8 287.4 220.5 287.2 220.3 287.1L220.1 286.1L220.1 286.1C216.9 285.2 215.3 281.5 216.3 277.1C217.2 274.5 220.4 272 224 272C241.4 272 258.7 276.9 271.9 284.3C278.5 287.1 284.4 292.5 288.7 297.7C292.9 302.8 296 309.1 296 316C296 322.9 292.9 329.2 288.7 334.3V334.3zM144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM335.6 220C324.1 220 315.7 223.8 310.2 229.7C302.7 237.7 290 238.1 281.9 230.6C273.9 223 273.5 210.4 281 202.3C295.6 186.8 316.3 180 335.6 180C354.1 180 375.7 186.8 390.2 202.3C397.8 210.4 397.4 223 389.3 230.6C381.2 238.1 368.6 237.7 361 229.7C355.6 223.8 346.3 220 335.6 220zM439.4 373.3L459.5 367.6C481.7 361.4 504.6 375.2 510.6 398.4C516.5 421.7 503.3 445.6 481.1 451.8L396.1 475.6C387.5 478 378.6 472.9 376.3 464.2L353.4 374.9C347.5 351.6 360.7 327.7 382.9 321.5C405.2 315.3 428 329.1 433.1 352.3L439.4 373.3z"/></svg>
            </h1>
            <p>
            Хамгийн гол нь бид стриймэрүүдэд юу хэрэгтэй, стриймэрүүд юу хүсэж байгааг мэдэж байгаа. Манай багт стрийм үздэг, стрийм хийдэг, гадаадад стриймэрүүд ямар зүйл ашиглаж байгааг мэддэг, тэрийг ашиглахыг, бүтээхийг хүсдэг залуучууд бий. Стриймэрүүдэд хэрэгтэй бүх зүйлсийг нэг дор бүтээж өгөх, үзэгчдэд хамгийн хялбараар дуртай стриймэртээ мөнгө илгээх боломжийг нээж өгч байна.
            </p>
          </div>
          <div className={style.imgs}>
          </div>
        </section>
      </div>
    </section>
    <section className={style.con_2}>
      <div className={style.rev}>
        <h1 className={style.title}>Review
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
        </h1>
        <Swiper
            centeredSlides={true}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{delay:3000}}
            speed={1000}
            modules={[Pagination,Autoplay]}
            slidesPerView={"auto"}
            breakpoints={{
            480: {
              spaceBetween: 32,
            },
            768: {
              spaceBetween: 64,
            },
            1200: {
              spaceBetween: 120,
            },
          }}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
              <div className="card">
                <div className="pro">
                  <div className="photo">
                    <img src="https://yt3.ggpht.com/cGpA6PPKMKfn3az5gfubRsPSJUGHomzgRusdWQxU3dJ2gwrs6G7MTFp3hK9hod858uOOsMWWvj8=s88-c-k-c0x00ffffff-no-rj" alt="CTS" />
                  </div>
                  <div className="txt">
                    <div className="name">CTS Live</div>
                    <div className="occupation">Youtube streamer &amp; content creator</div>
                  </div>
                </div>
                <div className="com">
                  Би shroud, xqc, Pokimane юу ашиглаж байгаа тэрэнтэй адилхан, боловсронгүй зүйл ашиглахыг л хүссэн. Би хэн нь мэдэгдэхгүй танихгүй сайтад банкныхаа бүх мэдээлэл, нэвтрэх нэр нууц үгээ өгмөөргүй байна шүү дээ. UBcab утсаараа дуудаад утсаараа төлбөрөө төлчихдөг шиг хэрэглэхэд амархан зүйлийг бүтээе, бусад стриймэрүүд маань тийм зүйл л хүснэ гээд анх streamhub-г төсөөлж байсан. Одоо тэрийгээ бүтээчихсэн байна :)
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="card">
                <div className="pro">
                  <div className="photo">
                    <img src="https://yt3.googleusercontent.com/MIV4cIKSRi-jyMt591K8EqU4L4EVv-EuK7JAyXGMDb_9fcXOvqVBXw4-IdD7qz3VJfanY95C=s88-c-k-c0x00ffffff-no-rj" alt="Mio" />
                  </div>
                  <div className="txt">
                    <div className="name">Mio</div>
                    <div className="occupation">Youtube streamer &amp; content creator</div>
                  </div>
                </div>
                <div className="com">
                Streamhub бол бусад монголд байсан алертуудаас хамгийн түрүүнд алхаж байгаа алерт мөнөөсөө мөн, Дэлхийн том том стриймэрүүдтэй ижилхэн түвшинд техникийн талаас бидэнд боломж өгж байгаа юм.
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="card">
                <div className="pro">
                  <div className="photo">
                    <img src="https://yt3.googleusercontent.com/lDS99Db-rPoTUJNM4jxpdk87ucvU-LDtY9PPHLNQE_I7JvqLsTUI4UjNfVhbHixMSxzZVWZEXQ=s88-c-k-c0x00ffffff-no-rj" alt="Yuratchka" />
                  </div>
                  <div className="txt">
                    <div className="name">Yuratchka</div>
                    <div className="occupation">Youtube streamer &amp; content creator</div>
                  </div>
                </div>
                <div className="com">
                  Streamhub нь бусад алертуудыг бодвол GIGACHAD санагдсан xD Стриймэр үзэгч хоёрыг илүү ойрхон болгож өгч байгаа, илүү олон төрлийн widget-тэй нь маш том давуу тал нь. Дээрээс нь сар болгоны сунгах хураамж шаардахгүй нь гоёээлээ. Буух эзэнтэй буцах хаягтай SAVE xD. Streamhub-д баярлалаа.
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section className={style.con}>
      {/* <div className={style.try}>
        <div className={style.txt}>
          <h1>
            Let's try our service now!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </p>
        </div>
        <a href='' className={style.btn} type="button"><p>contact</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM224 160c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4H120c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"/></svg>
        </a>
      </div> */}
    </section>
      <div className={style.c5} />
      <div className={style.c6} />
    <Footer/>
  </div>
  );
}

export default Landing;