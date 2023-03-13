import React from 'react'

import thumb from '../images/thumb.jpg'

const Profile = () => {
  return (

    <div id='profile' className='section min-h-screen font-notoSans'>

      <div className='py-20'>

        <div className='mx-auto md:flex justify-center gap-20 items-center'>

          <div className="profile-image">
            <img src={thumb} alt="Profile thumbnail" className='thumb' />
          </div>

          <div>
            <h2 className='font-poppins text-2xl font-bold mb-5'>Ryu Suzuki <span className='text-sm font-normal'>(Nihon Univ. Economics)</span> </h2>
            <p className='text-xl leading-loose'>
              日本大学経済学部3年(23年3月時点)の鈴木と申します。 <br />
              主にPython3とJavaScript、HTML、CSSを学習しています。 <br />
              最近はFastAPI、Reactに力を入れています。 <br />
              将来的にはフルスタックのwebエンジニアを目指しています。 <br />
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile