import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import personApi from '../hooks/personApi';
import '../assets/styles/App.scss';
import '../assets/styles/components/Profile.scss';

const API = 'https://torre-back.herokuapp.com/api/bios/diegocruz';

const Profile = () => {
  const initialState = personApi(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <Layout>
      <Header />
      <div className="ProfileDetails">
        <div className="ProfileDetails-Header row">

          <div className="p-2 mb-3">
            <img src={initialState.person.pictureThumbnail} alt="" width="120px" />


          </div>
          <div className="col text-left">

            <div className='h4'>{initialState.person.name}</div>
            <div className='h5'>
              {' '}
              @
              {initialState.person.publicId}
            </div>

            <div className='h5 text-muted'>
              {initialState.person.location.name}
            </div>
            <div className="col">
              <div className='ProfileDetails-StatsCard text-center'>

                {initialState.stats.strengths && (
                  <div>
                    <div className="h3">{initialState.stats.strengths}</div>
                    <label>Fortalezas</label>
                  </div>
                )}

                {initialState.stats.education && (
                  <div>
                    <div className="h3">{initialState.stats.education}</div>
                    <label>Educación</label>
                  </div>
                )}

                {initialState.stats.interests && (
                  <div>
                    <div className="h3">{initialState.stats.interests}</div>
                    <label>Intereses</label>
                  </div>
                )}

                {initialState.stats.jobs && (
                  <div>
                    <div className="h3">{initialState.stats.jobs}</div>
                    <label>Trabajos</label>
                  </div>
                )}

                {initialState.stats.projects && (
                  <div>
                    <div className="h3">{initialState.stats.projects}</div>
                    <label>Proyectos</label>
                  </div>
                )}

              </div>
            </div>

            <div className='text-muted'>{initialState.person.professionalHeadline}</div>
          </div>
          <div className='mt-4 mb-5' style={{ display: 'flex', flexDirection: 'column' }}>

            <div className='h4 ml-3 text-left'>Fortalezas</div>

            <div className='mb-4'>
              <div className='m-2'>
                {initialState.strengths.map((item, i) => {
                  return (
                    <div className='h5 m-1 text-muted' style={{ float: 'left' }} key={i}>
                      <span className='badge badge-pill badge-secondary text-muted'>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='h4 ml-3 text-left'>Educación</div>

            <div className='mb-4'>
              <div className='m-2'>
                {initialState.education.map((item, i) => {
                  return (
                    <div className='h5 m-1' style={{ float: 'left' }} key={i}>
                      <span className='badge badge-pill badge-secondary text-muted'>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='h4 ml-3 text-left'>Intereses</div>

            <div className='mb-4'>
              <div className='m-2'>
                {initialState.interests.map((item, i) => {
                  return (
                    <div className='h5 m-1' style={{ float: 'left' }} key={i}>
                      <span className='badge badge-pill badge-secondary text-muted'>{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='h4 ml-3 text-left'>Trabajos</div>

            <div className='mb-4'>
              <div className='ProfileDetails-Section m-2'>
                {initialState.jobs.map((item, i) => {
                  return (
                    <Card key={i}>
                      <div>
                        {item.name}
                      </div>
                      <div className='text-muted'>
                        {item.organizations[0].name}
                      </div>
                      <div>
                        {item.fromYear}
                        {' '}
                        -
                        {item.toYear}
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className='h4 ml-3 text-left'>Proyectos</div>

            <div className='mb-4'>
              <div className='ProfileDetails-Section m-2'>
                {initialState.projects.map((item, i) => {
                  return (
                    <Card key={i}>
                      <div>
                        {item.name}
                      </div>
                      <div className='text-muted'>
                        {item.organizations && item.organizations.length > 0 && item.organizations[0].name}
                      </div>
                      <div>
                        {item.fromYear}
                        {' '}
                        -
                        {item.toYear}
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Profile;
