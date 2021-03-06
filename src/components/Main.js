import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/JW_LOGO_White.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
          JW Detail &amp; Valet is a mobile vehicle cleaning service owned and run by me, Josh Williams.
          Born from a lifelong passion for cars, my company is built on experience of valeting vehicles
          for over 10 years before setting up professionally.</p>
          <p>
          JW Detail &amp; Valet provides a personable, convenient premium mobile motor vehicle
          cleaning service. Our top priority is a happy client- after all, every successful business runs on
          customer satisfaction! </p>
          <p>We are only as good as our last job.</p>
          <p>
          We understand that choosing a valeting service for your car can be confusing, as there are
          many levels of service within the industry, with prices to match.
          JW Detail &amp; Valet is a solo owner run company whose services range from 2 to 7 hours,
          using only premium grade products and equipment. Perfection requires time and patience-
          and as such this is not comparable to a 5 man/5 minute/ 5 pound clean. Our quality
          equipped van makes us fully mobile with only access to a power source required. Prices
          shown reflect the care and attention to detail we offer, using products that last and ensure
          the best possible finish. We also provide our services 7 days a week with weekends and
          evenings at no extra cost!</p>
          <p>
          We are more than happy to offer bespoke quotations, and if there is a service you require
          that isn???t shown please do not hesitate to ask. Our company is constantly evolving to keep
          up to date with everything in the industry, We offer refer a friend and loyalty discounts, as
          well as timed promotional deals so keep an eye on our social media for updates!
          </p>

         
          {close}
        </article>
        <article
          id="faq"
          className={`${this.props.article === 'faq' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <h2 className="major">FAQ</h2>
          <p><b>Why choose JW Detail &amp; Valet when I can use an automated car wash?</b></p>
          <p>
          We like to use the analogy of a birthday cake (after all, who doesn???t love cake?!). 
          You have a few options:<br />
          <p><li>You could go to a budget supermarket and purchase a basic sponge -
          cheap and convenient but probably not the best quality.<br /></li>
          <li>Or Maybe as a treat you could go to a bakery and buy a decorated cake from the shelf - higher standard but not personalised, is quick and "will do".</li>
          <li>But then you could also choose to purchase a bespoke highly decorated triple layer masterpiece from an independent baker that uses the best ingredients - it takes time to create but you are blown away by the end product.</li></p>
          <p>This is much the same as how our services compare to other car cleaning options available.
          We all have the choice of using an automated car wash for the low cost, or the supermarket
          car park hand washes for convenience. But when only the best will do and you require a
          personal service that leaves no mat unturned - JW Detail &amp; Valet are here to help.</p>
          
          <p>A few
          examples of why our services stand out:

          <li>Use of purified Spotless water- no unsightly water marks on your paint or glass work.</li>
          <li>Use of premium professional grade valeting products that provide a lasting finish.</li>
          <li>Extra services such as headlight restoration and ceramic glass coating not offered by more
          basic providers.</li>
          <li>Gazebo so your service can be carried out whatever the weather.</li>
          <li>Mobile fully equipped van that requires access to electricity only- Absolutely everything else
          supplied by us.</li>
          <li>No time constraints- we will keep going until the service is completed to highest possible
          standard.</li>
          </p></p>
          <p><b>Are you insured?</b></p>
          <p>
          Yes. We hold Public liability insurance up to the value of ??1,000,000
          </p>
          <p><b>I have booked a service but the weather isn???t favourable - will I have to reschedule?</b></p>
          <p>Absolutely not! We provide a weather proof gazebo to carry out your service come rain or
          shine, why not upgrade to our premium plus or executive service to include water repellent
          wax?
          </p>
          <p><b>Do you offer any discounts/promotions?</b></p>
          <p>
          We offer a refer a friend (RAF) discount of 10% for both parties when quoted at booking.
          We also offer a loyalty discount of 25% off your 4 th service booked, as well as 10% off
          vehicles from the same household booked to be completed at the same time. We also run
          time limited promotional offers so keep an eye out on our social media pages. Please
          noteonly one promotion can be applied per booking</p>

          <p><b>What methods of payment do you accept?</b></p>
          <p>We accept payment via cash (preferred) or bank transfer</p>
          <p><b>Do you provide a traditional ???in and out service????</b></p>
          <p>
          Yes! The price for this is found by combining the cost of premium/premium plus and
          executive services. For an exceptional top of the range finish select our exclusive package
          which includes premium detailing of all exterior and interior surfaces- see our available
          packages here</p>
          {close}
        </article>
        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
{/*      <span className="image main">
            <img src={pic02} alt="" />
          </span>
*/}
          <p>
          <h3><b>PREMIUM</b> - <b>S</b>??32 <b>M</b>??35 <b>L</b>??38 <b>XL</b>??41 </h3>
          <h4><i>Exterior Only</i></h4>
          </p>
          <p>
            <ul>
              <li>Citrus Prewash</li>
              <li>Snowfoam</li>
              <li>Outer Wheel Clean</li>
              <li>PH Neutral Shampoo and Jetwash</li>
              <li>Microfibre Hand Dry</li>
              <li>Exterior Glass Polish</li>
            </ul>
          </p>
          <p>
          <h3><b>PREMIUM PLUS</b> - <b>S</b>??48 <b>M</b>??51 <b>L</b>??54 <b>XL</b>??57 </h3>
          <h4><i>INCLUDES ALL FROM <b>PREMIUM</b> PLUS</i>:</h4>
          </p>
          <p>
            <ul>
              <li>Tar Remover</li>
              <li>Deep Clean and Dress of All Exterior Trims and Badging <i>Including</i> Bumpers</li>
              <li>Full Wheel Clean Including Arches and Tyres Dressed</li>
              <li>Liquid Water Repellent Wax</li>
            </ul>
          </p>
          <hr />
          <p>
          <h3><b>CAR CLASSES</b></h3>
          <h5>
            <br />SMALL <b>S</b>:<h6><i>FIAT 500 SMART, KA, CORSA, MATIZ ETC</i></h6>
            <br />MEDIUM <b>M</b>:<h6><i>FOCUS, MEGANE, GOLF, A CLASS ,AUDI A3, BMW 1 SERIES, ASTRA ETC</i></h6>
            <br />LARGE <b>L</b>: <h6><i>MERCEDES S CLASS, MONDEO, INSIGNIA, C MAX, QASHQAI ETC</i></h6>
            <br />EXTRA LARGE <b>XL</b>: <h6><i>SMAX, 7 SEATERS, ESTATES, RANGE ROVER, MERCEDES GLC VW TOUREG, NEVARA ETC</i></h6>
          </h5>
          </p>
          {close}
        </article>

        <article
          id="gallery"
          className={`${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gallery</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact"/>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/JwDetailAndValet/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jwdetailandvalet/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
