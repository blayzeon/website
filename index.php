<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Website</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <header class="sticky">
        <nav class="flex-space">
          <span>🐟 Kate's</span>
          <div class="set" data="info-set">
            <button id="nav-button" class="dark-button toggle-button">
              Menu ☰
            </button>
            <ul id="nav-menu" class="display-none">
              <li>
                <a href="https://www.facebook.com/KFCamp" target="_blank">
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.visitgainesville.com/explore/"
                  target="_blank"
                >
                  visit gainesville
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section id="brand-container">
          <div>
            <h1>Kate's Fish Camp</h1>
            <p>
              Located at the cross roads of SR 20, Prairie Creek and The
              Gainesville Bike-Hawthorne trail, Kates Fish Camp makes an ideal
              place for outdoor adventures, canoeing, boating, camping, biking,
              bird watching and more.
            </p>
          </div>
        </section>
        <section id="main-content">
          <article>
            <h2 id="amenitites">Amenities</h2>
            <p>
              Kate's Fish Camp is more than just a place to park your RV, it is
              an exclusive campground completely surrounded by extraordinary
              wilderness such as Paynes Prairie and Newnan's Lake, and many
              trails to explore along the nearby Gainesville-Hawthorne State
              Bike Trail.
            </p>
            <p>Our amenities include:</p>
            <ul>
              <li>Pull-through sites</li>
              <li>Electricity (20, 30, and 50 amp)</li>
              <li>Water hookups</li>
              <li>High-speed Wi-Fi</li>
              <li>Guest bathroom</li>
              <li>Outdoor Shower</li>
              <li>Outdoor grills</li>
              <li>Picnic tables</li>
            </ul>
            <p>
              <small>
                🌱 <strong>Note:</strong> All campers must be self-contained,
                and only RV camping is available as Kate's Fish Camp does not
                offer sewage hookups because of the surrounding land's
                recognized natural, ecological and cultural values. There is a
                Love's Travel Stops about 15 minutes away that offers RV septic
                services.
              </small>
            </p>
          </article>
          <article>
            <h2 id="pricing">Prices and Availabity</h2>
            <p>RV, travel trailer, and pop-up Camping welcome</p>
            <ul>
              <li>
                Class B Recreational Vehicles or Travel Trailers less than 25'
                are $40.00
              </li>
              <li>
                Class C Recreational Vehicles or Travel Trailers less than 30'
                are $45.00
              </li>
              <li>
                Class A Recreational Vehicles or Travel Trailers more than 30'
                are $50.00
              </li>
              <li>
                We only offer nightly rates. Campers/RVs can have up to four
                adults; additional adults are $10 each
              </li>
            </ul>
            <p>
              We allow stays of up to 2 weeks. To book your site, please give us
              a call at <a href="tel">(352) 372-1026</a> or use the contact form
              below.
            </p>
            <p>
              All cancellations and rain checks must be made five workdays
              before your reservation.
            </p>
          </article>
          <article>
            <h2 id="rules">Happy Campers Rule</h2>
            <ul>
              <li>Quiet hours are between 10 PM and 7 AM</li>
              <li>
                No loud music, barking dogs, or disturbing other campers allowed
              </li>
              <li>No dogs tied up outside or left unattended</li>
              <li>
                You are welcome to make campfires, firewood is available, but no
                cutting standing green trees or burning trash
              </li>
            </ul>
          </article>
          <article>
            <h2 id="faq">Frequently Asked Questions</h2>
            <div id="faq-grid">
              <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  Do you offer sewage?
                </button>
                <div class="display-none">
                  Loves Travel Stop is located about 15 minutes away and
                  provides RV dump services.
                </div>
              </div>
              <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  How do I book?
                </button>
                <div class="display-none">
                  Please give us a call at <a href="tel">(352) 372-1026</a> or
                  use the <a href="#contact">contact form</a> below.
                </div>
              </div>
              <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  Are there pull-through sites?
                </button>
                <div class="display-none">
                  We do, all of our sites are pull-through plus we have a large
                  area for turning around.
                </div>
              </div>
              <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  Do you sell bait/products?
                </button>
                <div class="display-none">
                  We sell homemade artisanal soap exclusively at
                  <a href="https://www.soapmakermonica.com/" target="_blank">
                    here.
                  </a>
                </div>
              </div>
              <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  Do you offer rentals?
                </button>
                <div class="display-none">
                  Although we used to rent boats, canoes, and kayaks, now we are
                  solely focused on providing an excellent experience for RV and
                  travel trailer campers.
                </div>
              </div>
              <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  Can I tent camp?
                </button>
                <div class="display-none">
                  We only offer spots for RVs, campers, and travel trailers at
                  this time.
                </div>
              </div>
              <!-- 
                add more:
                <div class="set" data="info-set">
                <button class="dark-button toggle-button">
                  Click me for more information!
                </button>
                <div class="display-none">
                  Here is the additional information!
                </div>
              </div>
              -->
            </div>
          </article>
          <article>
            <h2 id="contact">Contact</h2>
            <p>
              This form is currently non-fuctioning but will send an email when
              submitted once completed.
            </p>
            <form action="contactform.php" method="post">
              <div>
                <label for="form-name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label for="form-email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  placeholder="john.doe@email.com"
                  required
                />
              </div>
              <div>
                <label for="form-phone">Phone: </label>
                <input
                  type="tel"
                  name="phone"
                  id="form-phone"
                  placeholder="352-555-1234"
                />
              </div>
              <div class="flex">
                <label for="form-date1">Date: </label
                ><input type="date" id="form-date1" />-<label
                  for="form-date2"
                ></label
                ><input type="date" id="form-date2" />
              </div>
              <div>
                <label for="form-size">Unit Size: </label>
                <select name="size" id="form-size">
                  <option value="" selected disabled hidden></option>
                  <option value="~25">Up to 25'</option>
                  <option value="26-29">Between 26' and 29'</option>
                  <option value="30+">30' or larger</option>
                </select>
              </div>
              <div>
                <label for="form-msg">Message: </label>
                <textarea
                  name="message"
                  id="form-message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Your message"
                ></textarea>
              </div>
              <button class="dark-button">Send</button>
            </form>
          </article>
        </section>
      </main>
      <footer id="footer">
        <div>
          <p>Open from daylight to dusk</p>
          <p>
            <a href="https://www.facebook.com/KFCamp" target="_blank"
              ><img
                width="15"
                alt="2021 Facebook icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png"
            /></a>
            Visit us on
            <a href="https://www.facebook.com/KFCamp" target="_blank">
              Facebook!
            </a>
          </p>
          <p>Reserve: <a href="tel">(352) 372-1026</a></p>
          <address>
            6518 SE Hawthorne RD <br />
            Gainesville, FL 32641
          </address>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.7118227171386!2d-82.25134058489505!3d29.61206248204167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a0f84cc8168f%3A0x7169385a6dc58faa!2sKATE&#39;S%20FISH%20CAMP!5e0!3m2!1sen!2sus!4v1687305952968!5m2!1sen!2sus"
            width="370"
            height="250"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </div>
    <script src="scripts.js"></script>
  </body>
</html>
