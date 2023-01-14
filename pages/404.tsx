import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Landing.module.scss'
import Router from 'next/router'

function How_it_Works() {
  return (
    <div className={style.body}>
    <Head>
        <title>How it Works</title>
    </Head>
      <div className={style.c1} />
    <section className={style.cont}>
        <center className={style.cent}>
            <h1 className={style.error_num}>404</h1>
            <h1 className={style.error_txt}>Хуудас Олдсонгүй</h1>
            <div className={style.back} onClick={() => Router.back()}><svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>Буцах</div>
        </center>
    </section>
    <div className={style.c2} />
  </div>
  );
}

export default How_it_Works;