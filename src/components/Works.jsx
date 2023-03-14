import React from 'react'

import work1 from '../images/work1.png'
import work2 from '../images/work2.png'
import work3 from '../images/work3.png'

const Works = () => {
  return (

    <div id='works' className='section min-h-screen'>

      <div className='text-center'>
        <h2 className='text-3xl font-bold border-b-4 border-accent inline-block'>WORKS</h2>
      </div>

      <div className='box'>
        <div className='flex justify-center gap-8'>
          <div className="works-image">
            <a href="https://github.com/R216YU/Portfolio-site-react" target="_blank" rel="noopener noreferrer"><img src={work1} alt="works" className='' /></a>
          </div>

          <div className="works-text">
            <h3 className='text-2xl mb-8'>Portfolio site <span className='text-sm'>(here)</span> </h3>
            <p className='leading-7 font-notoSans'>
              当サイトです。主に私のプロフィール、開発アプリ、私自身の技能について記載しています。 <br />
              HTMLとCSSのみで作成したポートフォリオサイトを、ReactとTailwindCSSを用いて1から完全リニューアル。 <br />
            </p>
          </div>
        </div>
      </div>

      <div className='box'>
        <div className='flex justify-center gap-8'>
          <div className="works-image">
            <a href="https://github.com/R216YU/portfolio_app" target="_blank" rel="noopener noreferrer"><img src={work2} alt="works" className='' /></a>
          </div>

          <div className="works-text">
            <h3 className='text-2xl mb-8'>TeamBalanceApp <span className='text-sm'>(not deployed)</span> </h3>
            <p className='leading-7 font-notoSans'>
              私の趣味であるオンラインゲームに関するwebアプリです。 <br />
              チームバランスを考慮しながら、複数のプレイヤーを2チームに分けられます。 <br />
              利用言語はPython3 Django, HTML, CSS <br />
            </p>
          </div>
        </div>
      </div>

      <div className='box'>
        <div className='flex justify-center gap-8'>
          <div className="works-image">
            <a href="https://r216yu.pythonanywhere.com/" target="_blank" rel="noopener noreferrer"><img src={work3} alt="works" className='' /></a>
          </div>

          <div className="works-text">
            <h3 className='text-2xl mb-8'>勤怠管理アプリケーション <span className='text-sm'>(deployed)</span> </h3>
            <p className='leading-7 font-notoSans'>
              企業課題で勤怠管理webアプリを作成しました。<br />
              従業員は自らアカウントを作成し、打刻することができます。<br />
              管理者はそれらのデータを一覧で見たり、一部のユーザーのデータを詳細に見ることができます。 <br />
              利用言語はPython3 Django, HTML, CSS(tailwind css) <br />
            </p>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Works