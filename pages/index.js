import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>CITY MART</title>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <meta name="description" content="City Mart Token
The Best Crypto Currency to Invest in The World.
Time to Invest in Crypto Currency. City Mart Token (CTMT) is Transactional token and can used as a Currency. City Mart Token Can be used for Online Shopping at Super Market all Over the World.
City Mart Token is a BEP-20 Cypto Token build on The Binnance Block Chain Technology." />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <Cover />

      {/* feature-section-------- */}
      <section className={styles.featureSection}>
        <div className={styles.featureBlock}>

          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-cube"></i></p>
            <h4 className={styles.featureHead}>DECENTRALISED SYSTEM</h4>
            <p className={styles.featureText}>
              A technical failure can paralyze all affiliate networks on a centralized platfotrm,
              until the cause is detected and rectified the system.
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-shield-alt"></i></p>
            <h4 className={styles.featureHead}>BANKS PAYMENT SYSTEMS</h4>
            <p className={styles.featureText}>
              Up to 45% of a merchant&apos;s budget is spent on commissions charged by a number
              of brokers, including banks, payment systems.
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-project-diagram"></i></p>
            <h4 className={styles.featureHead}>CPA NETWORKS</h4>
            <p className={styles.featureText}>
              Affiliate networks have to pay for using existing platforms on a monthly basis or
              spend money on developing proprietary platforms
            </p>
          </div>

        </div>
      </section>
      {/* feature-section-------- */}

      {/* about-section------ */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageSection}>
          <img src="/about.gif" alt="image" />
        </div>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Meet Future CITY MART</h3>
          <p className={styles.aboutText}>
            We will strive to make CITY MARTChain as one of the prominent
            way Blockchain will be used in different areas of business
            and economy as well as social welfare and other major areas
            of technology
          </p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>CITY MART Chain Blockchain</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Multicurrency Wallet</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Defi Exchange</p>
        </div>
      </section>
      <section className={styles.futureSection}>
        <h3>Future Products</h3>
        <div className={styles.futureItemBlock}>
          <ul className={styles.futureColumn}>
            <li><i className="las la-star"></i>CITY MART Chain Blockchain</li>
            <li><i className="las la-star"></i>Multicurrency Wallet</li>
            <li><i className="las la-star"></i>Defi Exchange</li>
            <li><i className="las la-star"></i>MultiVerse and MetaVerse</li>
            <li><i className="las la-star"></i>Audit Platform for KREDICTChain</li>
            <li><i className="las la-star"></i>NFT Marketplace</li>
          </ul>
          <ul className={styles.futureColumn}>
            <li><i className="las la-star"></i>P2P Exchange</li>
            <li><i className="las la-star"></i>Decentralized Marketplace for Products</li>
            <li><i className="las la-star"></i>Social Networking Platform with Short videos feature</li>
            <li><i className="las la-star"></i>Online Education Platform</li>
            <li><i className="las la-star"></i>Dating App</li>
            <li><i className="las la-star"></i>Browser</li>
          </ul>
          <ul className={styles.futureColumn}>
            <li><i className="las la-star"></i>Financial and Insurance Services Platform</li>
            <li><i className="las la-star"></i>Travel, Hotel and Holiday Booking Platform</li>
            <li><i className="las la-star"></i>Payment Wallet</li>
            <li><i className="las la-star"></i>Taxi, Bike and Vehicle Hailing Platform</li>
            <li><i className="las la-star"></i>Asset Based Platform for Real State and other assets</li>
            <li><i className="las la-star"></i>Services Platform</li>
          </ul>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Vision and Mission</h3>
          <p className={styles.aboutText}>
          </p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Vision</h2>
            To be at the forefront of new era of technology and innovations which serves next generation of human life , so they can live with more freedom and less fear.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Mission</h2>
            Is to give best products and services to users by exploring all possible frontiers in new technology and innovations, and also being socially responsible to our planet and our societies.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Solution</h2>
            We have planned a ecosystem of new solutions which will help users to save their assets as well as trade and use them for different services in the coming years. Also we will keep on researching on how we can reinvent the wheel in a way that blockchain can be used in most of the areas of day to day life and how it can be used for betterment of humankind and users of the technology.
          </p>
        </div>
        <div className={styles.aboutImageSection}>
          <img src="/vision-illustration.svg" alt="image" />
        </div>
      </section>
      {/* about-section------ */}
      {/* rail-section-- */}
      <section className={styles.railSection}>

        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>HIGH SPEED AND LOW COSTS</h3>
              <p className={styles.railText}>
                Immediate funding without third-parties. Smart contracts autonomously
                perform funding - collect and release payments
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>FAIR DEALS ONLY</h3>
              <p className={styles.railText}>
                Open-source smart contract ensures fair and transparent deals between merchants and affiliates
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>PROTECTION FROM HACKING</h3>
              <p className={styles.railText}>
                On a decentralized platform, all user accounts are independent; if one account is hacked, this won&apos;t breach the security of.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>COST EFFECTIVE</h3>
              <p className={styles.railText}>
                Scale economy through decentralization leading to significant decrease in transaction fees
              </p>
            </div>
          </div>
        </div>
        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>NO MORE MIDDLE MEN</h3>
              <p className={styles.railText}>
                Transactions are verified by distributed nodes, and anyone can join or leave the network as they please without disrupting the network&apos;s ability to form consensus on transactions.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>EASY ENTRY AND FAIR COMPETITION</h3>
              <p className={styles.railText}>
                Any one can join, and Fair for everyone without any partiality
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>GLOBAL P2P TRADE FINANCING</h3>
              <p className={styles.railText}>
                The peer-to-peer architecture of blockchain allows all cryptocurrencies to be transferred worldwide, without the need of any middle-man or intermediaries or central server
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>REAL-TIME DATABASE</h3>
              <p className={styles.railText}>
                Every Transaction and Updates are real time and directly pulled from Smart Contracts lying on Blockchain
              </p>
            </div>
          </div>
        </div>

      </section>
      {/* rail-section-- */}

      {/* tokenomics-section-- */}
      <section className={styles.tokenomicsSection} id="token">
        <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
        <div className={styles.tokenomicsDetailsHolder}>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Token Name</h4>
            <p className={styles.tokenDetailText}>CITY MART</p>
            <h4 className={styles.tokenDetailHead}>Total Supply</h4>
            <p className={styles.tokenDetailText}>2600000</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale Start Date</h4>
            <p className={styles.tokenDetailText}>1st Feb 2023</p>
            <h4 className={styles.tokenDetailHead}>Currencies Accepted</h4>
            <p className={styles.tokenDetailText}>BNB</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>ICO Pre- Sale CITY MART Supply Launch</h4>
            <p className={styles.tokenDetailText}>2600000</p>
            <h4 className={styles.tokenDetailHead}>ICO Supply OF CITY MART launch</h4>
            <p className={styles.tokenDetailText}>2600000</p>
            <h4 className={styles.tokenDetailHead}>Soft cap</h4>
            <p className={styles.tokenDetailText}>1000 BNB</p>
            <h4 className={styles.tokenDetailHead}>ICO Start Date</h4>
            <p className={styles.tokenDetailText}>1st of Feb 2023</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 1st Phase</h4>
            <p className={styles.tokenDetailText}>1 BNB = 2500 CTMT</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 2nd Phase</h4>
            <p className={styles.tokenDetailText}>1 BNB = 1250 CTMT</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 3rd Phase</h4>
            <p className={styles.tokenDetailText}>1 BNB = 650 CTMT</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale- 4th phase</h4>
            <p className={styles.tokenDetailText}>	1 BNB = 325 CTMT</p>
          </div>
        </div>
        <p><small><i>*All above Data is only for Sample</i></small></p>
      </section>
      {/* tokenomics-section-- */}

      <section className={styles.chartSection}>
        <div>
          <h3>Tokenomics</h3>
          <img src="/tokenomics-chart.png" alt="chart" />

        </div>
        <div>
          <h3>Fund Allocation</h3>
          <img src="/allocation-chart.png" alt="chart" />
        </div>
      </section>

      {/* roadmap-section---------- */}
      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Nov-Dec 2022</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Ideation of CITY MART Blockhain and CITY MART
                  </li>
                  <li>White paper, Future Goals and Road Map preparation.
                  </li>
                  <li>ICO Website Designing.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-Feb 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>ICO website Development For CITY MART
                  </li>
                  <li>Contract Deployment
                  </li>
                  <li>ICO website Launch
                  </li>
                  <li>
                    Pre-Sale of CITY MART Stage-1
                  </li>
                  <li>
                    Promotion through Partnerships and Affliates and Initial Buyers
                  </li>
                  <li>
                    Building Team for Future Projects
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Oct-Dec 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Start CITY MART Chain Development
                  </li>
                  <li>Pre-Sale Stage 2
                  </li>
                  <li>InFluencer Promotion
                  </li>
                  <li>Start MultiCurrency crypto wallet development
                  </li>
                  <li>Pre-Sale Stage 3
                  </li>
                  <li>Pre-Sale Stage 4
                  </li>
                  <li>Team Expansion
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-March 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>CITY MART Launch to general Public
                  </li>
                  <li>dApp Wallet Launch
                  </li>
                  <li>Major Dex Listing
                  </li>
                  <li>
                    Audit Solutions Platform Development
                  </li>
                  <li>
                    Metaverse and Multiverse Platform Developmet Start
                  </li>
                  <li>
                    Dex Platform Development Start
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Blockchain Release Beta testing
                  </li>
                  <li>Dex Platform Launch and Integration in dApp
                  </li>
                  <li>Rvenue Sharing Staking Programme
                  </li>
                  <li>NFT marketplace Development Start
                  </li>
                  <li>P2P Exchange Development Start
                  </li>
                  <li>Blockchain Main net Release
                  </li>
                  <li>Smart Contract Integration support with Blockchain
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>July-Sep 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>CITY MART Exchange Beta Version Release
                  </li>
                  <li>Exchange and Wallet and Mobile Version Development
                  </li>
                  <li>Exchange Release
                  </li>
                  <li>
                    Tier 1 listings on Exchange
                  </li>
                  <li>
                    Invite Projects on our Blockcahin and Invite selected projects
                  </li>
                  <li>
                    Finance and Lending Platform Development Start
                  </li>
                  <li>Multverse Metaverse Alpha Version
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Oct-Dec 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>NFT Market Place Launch
                  </li>
                  <li>P2P Exchange launch
                  </li>
                  <li>DeFi platform launch
                  </li>
                  <li>Start Development of - Decentralised Market Place , Social App, Education App , Browser , Dating App
                  </li>
                  <li>Launch of Mobile version of Wallent and Exchange
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-March 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Startup Studio and Launchapad Development
                  </li>
                  <li>New Partnerships
                  </li>
                  <li>Finance , Insurance and Lending Platform Launch
                  </li>
                  <li>
                    Dervatives Platcorm Launch
                  </li>
                  <li>
                    Payment wallet first version Launch
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Social Networking and Short Video app Launch
                  </li>
                  <li>Education App launch
                  </li>
                  <li>Browser Launch
                  </li>
                  <li>Dating app Launch
                  </li>
                  <li>Travel booking Platform and app Launch
                  </li>
                  <li>Education App launch
                  </li>
                  <li>Dervatives Platform first version test
                  </li>
                  <li>Decentralised Market place Launch
                  </li>
                  <li>Payment App Launch
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>July-Sept 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Online and Offline Services Platform Development start
                  </li>
                  <li>Taxi, Bike and Vehicle Hailing renting Platform Development start
                  </li>
                  <li>Asset Based Platform Development Start
                  </li>
                  <li>Game Platform development Start
                  </li>
                  <li>Matrimonial Platform Development Start
                  </li>
                  <li>Multiverse Metaverse and App Launch with NFT Integration
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Nov-Dec 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Start Development of Job Portal and app
                  </li>
                  <li>Start development of Real estate buy- sale and rental app
                  </li>
                  <li>Start R&amps;D in areas like Artificial intelligence, Machine Learning and Robotics
                  </li>
                  <li>
                    Start R&amps;D in area of Hardware , computers , mobiles and and automobile Industry .
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-March 2026</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Derivatives Platform and app launch
                  </li>
                  <li>Services Platform and App Launch
                  </li>
                  <li>Multiverse Metaverse New Services Launch
                  </li>
                  <li>Taxi Hailing app and Platform launch
                  </li>
                  <li>Game Platform first version Launch
                  </li>
                  <li>Asset based platform First version launch
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2026</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Matrimonial Website and app Launch
                  </li>
                  <li>Asset based Platform public version Launch
                  </li>
                  <li>Game platform final version launch
                  </li>
                  <li>
                    JobPortal and app launch
                  </li>
                  <li>
                    Real Estate app and website launch
                  </li>

                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>July-Sept 2026</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Start Decentalied crowdfunding platform Development
                  </li>
                  <li>Start Decentralised Charity Platform Development
                  </li>
                  <li>Go be Continued -----------------
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* roadmap-section-------- */}


      {/* why-section-- */}
      <section className={styles.whySection}>
        <div className={styles.whyTextSection}>
          <h2 className={styles.whyHeader}>Why choose us?</h2>
          <p className={styles.whyAnswer}>
            As we all know that any company thrives on its Mission and Vision and
            can only become successful when it gets support of the people who believe
            in their Mission and Vision. We have put forward our Vision of future in
            front of you and we are very passionate to make a difference for current
            and future generation of humanity.
          </p>
          <div className={styles.whyAnswerPoint}>
            <h3>Authentic Brand</h3>
            <p>
              Our aim will be to be able to provide genuine value to the community
              is the first step toward developing a meaningful products and services
              and, as a result, a successful organisation.
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Comprehensive Platform</h3>
            <p>
              We prefer comprehensive platform for cryptocurrency enthusiasts rather
              than having too many platforms to achieve their goal of growing funds
              in the world of Blockchain
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Simple To Use</h3>
            <p>
              Our platform will be extremely simple to use, with only the necessary
              options for users and other stakeholders.
            </p>
          </div>
        </div>
        <div className={styles.whyImageSection}>
          <img src="/kredict-k.png" alt="KREDICT icon" />
        </div>
      </section>
      {/* why-section-- */}
      {/* team-section------ */}
      <section className={styles.teamSection} id="team">
        <h3 className={styles.teamHeader}>Team</h3>
        <div className={styles.teamBlock}>
          <div className={styles.teamCard}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Devid </h4>
            <p className={styles.teamDes}>CEO </p>
            <p>
              Entrepreneur with zeal and passion for blockchain and solutions it can bring for the brave new world
            </p>
          </div>
          <div className={styles.teamCard}>
            <img src="/rabbit.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Lina robert</h4>
            <p className={styles.teamDes}>Blockchain Developer </p>
            <p>
              With immense knowledge in blockchain, Web 3 and Web 2  technologies .
            </p>
          </div>
          <div className={styles.teamCard}>
            <img src="/wolf.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Andrew thomas </h4>
            <p className={styles.teamDes}>Finance and Market</p>
            <p>
              Creative mind with enthusiastic new view and aproach towards the new blockchain maarket needs.
            </p>
          </div>
        </div>
      </section>
      {/* team-section------ */}
      {/* whitepaper-section------- */}
      <section className={styles.whitepaperSection} id="whitepaper">
        <div className={styles.whitepaperBlock}>
          <div className={styles.whitepaperTextSection}>
            <h2 className={styles.whitepaperHead}>Whitepaper</h2>
            <p className={styles.whitepaperText}>
              Total of 2.6 Million (2600000) CITYMART will be minted through
              Smart contract and deployed through Binance Smart Chain . We will be selling 20% of the
              tokens in presale which will be done in 4 phases which will run max for 92 days . 1st
              presale for 45 days and rest 3 pre-sales for 15 days each. If the Pre-Sale phases goals
              are reached before time, we will start next phase of pre sale within 24 hours. We have
              kept the investment amount to minimum 0.1 BNB for our presale which will make easy for
              most of the retail investors to invest.
              We will not accept any FIAT currencies during the Pre-Sale as we firmly believe in digital
              currencies and that&apos;s why working on building a ecosystem based on blockchain and
              crypto assets and crypto currencies.
            </p>
          </div>
          <div className={styles.whitepaperActionSection}>
            <Link href="#"><a target="_blank" rel="noreferrer">Read Online</a></Link>
            <Link href="#"><a target="_blank" rel="noreferrer" download>Download</a></Link>
          </div>
        </div>
      </section>
      {/* whitepaper-section------- */}

      {/* contact-section-- */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactSocialSide}>
          <h3 className={styles.contactHeader}>Contact Us</h3>
          <div className={styles.contactSocialBlock}>
            <Link href="mailto:admin@citymarttoken.com"><a target="_blank" rel="noreferrer"><i className="las la-envelope"></i>admin@citymarttoken.com</a></Link>
            <Link href="https://t.me/+2NVDbbOFvZszNWRl"><a target="_blank" rel="noreferrer"><i className="lab la-telegram"></i>Telegram</a></Link>
            <Link href="https://twitter.com/CITYMART13?t=ILjl9nb5WzVeWqO1OGQLHw&s=08"><a target="_blank" rel="noreferrer"><i className="lab la-twitter-square"></i>Twitter</a></Link>
            <Link href="https://instagram.com/citymart2023?igshid=ZDdkNTZiNTM="><a target="_blank" rel="noreferrer"><i className="lab la-instagram"></i>Instagram</a></Link>
            <Link href="https://www.youtube.com/@citymarttoken"><a target="_blank" rel="noreferrer"><i className="lab la-youtube"></i>YouTube</a></Link>
          </div>
        </div>
        <div className={styles.contactFormSide}>
          <div className={styles.contactForm}>
            <input type="text" id='name' required autoComplete='off' placeholder='Full Name' />
            <input type="email" id='email' required autoComplete='off' placeholder='Email' />
            <input type="text" id='telegram' required autoComplete='off' placeholder='Telegram' />
            <input type="text" id='message' required autoComplete='off' placeholder='Message' />
            <button className={styles.submitBtn} onClick={submitForm}>Send Message</button>
          </div>
        </div>
      </section>
      {/* contact-section-- */}

      {/* footer--------- */}
      <section className={styles.footerSection}>
        <div className={styles.brandFooter}>
          <p className={styles.brandText}>Designed with</p>
          <p className={styles.heart}><i className="las la-heart"></i></p>
          <p className={styles.brandText}>by</p>
          <p className={styles.brandText}><Link href="https://www.citymarttoken.com"><a target="_blank" rel="noreferrer">CITY MART</a></Link></p>
        </div>
      </section>
      {/* footer--------- */}


    </>
  )
}


function submitForm() {
  let name = document.getElementById("name").value;
  let telegram = document.getElementById("telegram").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let data = {
    name,
    telegram,
    email,
    message
  }

  fetch('/api/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    alert("Application Submitted!");

    document.getElementById("name").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
  })
}
