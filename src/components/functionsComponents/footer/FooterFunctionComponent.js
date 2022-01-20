import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


function FooterFunctionComponent () {

    return (
      <div className="footer">
          <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
              <MDBContainer className='p-3'>
                <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Ingrealm.com</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
                            pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
                            cumque eum delectus sint!
                        </p>
                    </MDBCol>
                    <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>About Ingrealm</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Help & FAQs</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Community</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
              </MDBContainer>

              <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  &copy; {new Date().getFullYear()}{' '}
                  <a className='text-dark' href='https://mdbootstrap.com/'>
                      Ingrealm Society
                  </a>
              </div>
          </MDBFooter>
      </div>
    );
}

export default FooterFunctionComponent