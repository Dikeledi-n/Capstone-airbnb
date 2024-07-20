import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      {/* Section 1: Cards Section */}
      <div className="cards-section">
        <h2>Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card Ballito">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53209476/original/bb67d81e-8a2c-42fa-a005-6b010e71b6fd.jpeg?im_w=1200" alt="Entire villa in Dolphin Coast" />
            <div className="card-info">
              <h3>Entire villa in Dolphin Coast</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card Kingfisher">
            <img src="https://a0.muscache.com/im/pictures/387f52bb-2f75-485a-be43-ae3a0242abec.jpg?im_w=1200" alt="Kingfisher River Lodge" />
            <div className="card-info">
              <h3>Kingfisher River Lodge in Mjejane</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card Sky Light Apt 2">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-53817695/original/ac3e78cb-a394-4655-90bb-003b0609ef6f.jpeg?im_w=960" alt="Sky Light Apt 2" />
            <div className="card-info">
              <h3>unit in Wilderness</h3>
              <p>230 miles away</p>
            </div>
          </div>
          <div className="city-card Johannesburg">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-17352041/original/b6a3cfe7-ff98-41b2-9d2d-642929632976.jpeg?im_w=960" alt="Splice White Penthouse" />
            <div className="card-info">
              <h3>Splice White Penthouse</h3>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Discover Airbnb Experiences */}
      <div className="discover-experiences">
        <h2>Discover Airbnb Experiences</h2>
        <div className="experiences-row">
          <div className="experience-image trip">
            <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4656593-media_library/original/9cb783e9-a9e0-4842-b9dd-6e69b6eaedf7.jpeg?im_w=1200" alt="Things to do on your trip" />
            <div className="experience-info">
              <h3>Things to do on your trip</h3>
              <button>Experiences</button>
            </div>
          </div>
          <div className="experience-image home">
            <img src="https://www.mashvisor.com/blog/wp-content/uploads/2020/05/Airbnb-Online-Experiences-A-Guide-for-Hosts.jpg" alt="Things to do from home" />
            <div className="experience-info">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Shop Airbnb Gift Cards */}
      <div className="gift-cards-section">
        <div className="gift-cards-content">
          <div className="left-content">
            <p>Shop Airbnb gift cards</p>
            <button>Learn more</button>
          </div>
           <img src="https://cdn.images.express.co.uk/img/dynamic/25/590x/secondary/Airbnb-3906241.jpg?r=1644406120862" /> 
        </div>
      </div>

      {/* Section 4: Questions about Hosting */}
      <div className="hosting-section">
        <img src="https://www.igms.com/wp-content/uploads/2021/07/airbnb-hosting-guide-pic5-.jpeg" alt="Questions about hosting?" />
        <div className="hosting-content">
          <h4>Questions about hosting?</h4>
          <button>Ask a Superhost</button>
        </div>
      </div>

      {/* Section 5: Pre-footer */}
      <div className="pre-footer">
        <h2>Inspiration for future getaways</h2>
         <div className="getaways-links">
          <a href="#">Destinations for arts & culture</a>
          <a href="#">Destinations for outdoor adventure</a>
          <a href="#">Mountain cabins</a>
          <a href="#">Beach destinations</a>
          <a href="#">Popular destinations</a>
          <a href="#">Unique Stays</a>
        </div> 
        <div className="destinations">
          <div>
            <h3>Kuta Utara</h3>
            <p>Bali</p>
          </div>
          <div>
            <h3>Ksamil</h3>
            <p>Albania</p>
          </div>
          <div>
            <h3>Barcelona</h3>
            <p>Spain</p>
          </div>
          <div>
            <h3>Gotland</h3>
            <p>Sweden</p>
          </div>
          <div>
            <h3>San Francisco</h3>
            <p>California</p>
          </div>
          <div>
            <h3>Bangkok</h3>
            <p>Thailand</p>
          </div>
          <div>
            <h3>Prague</h3>
            <p>Czechia</p>
          </div>
          <div>
            <h3>Toronto</h3>
            <p>Canada</p>
          </div>
          <div>
            <h3>Rome</h3>
            <p>Italy</p>
          </div>
          <div>
            <h3>Marrakesh</h3>
            <p>Morocco</p>
          </div>
          <div>
            <h3>Mykonos</h3>
            <p>Greece</p>
          </div>
          <div>
            <h3><a href="#">Show more</a></h3>
          </div>
        </div>
      </div>

      {/* Section 6: Footer */}
      <div className="footer">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety information</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Our COVID-19 Response</a></li>
            <li><a href="#">Supporting people with disabilities</a></li>
            <li><a href="#">Report a neighborhood concern</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Airbnb.org: disaster relief housing</a></li>
            <li><a href="#">Support: Afghan refugees</a></li>
            <li><a href="#">Celebrating diversity & belonging</a></li>
            <li><a href="#">Combating discrimination</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li><a href="#">Try hosting</a></li>
            <li><a href="#">AirCover: protection for Hosts</a></li>
            <li><a href="#">Explore hosting resources</a></li>
            <li><a href="#">Visit our community forum</a></li>
            <li><a href="#">How to host responsibly</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Learn about new features</a></li>
            <li><a href="#">Letter from our founders</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Airbnb Luxe</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Inspiration;