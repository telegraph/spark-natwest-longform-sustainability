import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import { responsibilityTimeline, trendsImpacting } from './data';
import analytics from './helpers/analytics';

// Components
import Loader from './components/Loader';
import Header from './components/Header';
import Share from './components/Share';
import Hero from './components/Hero';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import PullQuoteSpecial from './components/Pullquote/subcomponents/PullQuoteSpecial';
import CTA from './components/CTA';
import Button from './components/Button';
import Title from './components/Title';
import Timeline from './components/Timeline';
import Slider from './components/Slider';
import BasicSlider from './components/BasicSlider';
import VerticalSlider from './components/VerticalSlider';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import AnimationTrigger from './components/AnimationTrigger';

// Assets
import heroImg from './assets/hero_desktop.svg';
import heroImgMobile from './assets/hero_mobile.svg';
import csrTitle from './assets/titles/house_light.svg';
import whydoTitle from './assets/titles/doomsday_light.svg';
import howcanTitle from './assets/titles/bricks_dark.svg';
import barriersTitle from './assets/titles/oil_light.svg';
import lookingTitle from './assets/titles/car_light.svg';
import Broughttyb from './components/Broughttyb';

function App() {
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    window.requestAnimationFrame(() => {
      let progressState = progress;
      const docHeight = document.body.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight;
      const difference = docHeight + scrolled;
      const percentage = difference / docHeight - 1;
      progressState = percentage;
      setProgress(progressState);
    });
  };

  useEffect(() => {
    // on mount
    document.addEventListener('scroll', changeProgress);
    return function cleanup() {
      document.removeEventListener('scroll', changeProgress);
    };
  });

  useEffect(() => {
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header progress={progress} />
      <Hero img={heroImg} imgMobile={heroImgMobile}>
        <div className="hero__content">
          <h1>The future of sustainability</h1>
          <p>
            Corporate social responsibility is big business — but how can UK
            business-owners embed sustainability into their workplace cultures?
          </p>
        </div>
      </Hero>
      <PullQuoteSpecial>
        <Pullquote specialQuote>
          <h3>If we damage the natural world, we damage ourselves</h3>
          <p>
          Sir David Attenborough during an interview with Prince William at the World Economic Forum at Davos in January
          </p>
        </Pullquote>
      </PullQuoteSpecial>
      <Pagebody noPadding>
        <AnimationTrigger>
          <p>
            <Dropcap>T</Dropcap>
            hanks to television shows such as Sir David’s <em>Blue Planet II</em>, public
            awareness of issues like sustainability has never been higher.
          </p>
          <p>
            This poses a new challenge and opportunity for businesses, as
            customers and investors judge companies on their ethical and
            sustainable credentials.
          </p>
          <p>
            Dr Peter Jansen, principal lecturer at the London School of Business
            and Finance, says: “Businesses are increasingly aware their reputation
            depends on how socially and environmentally responsible they are
            perceived to be.”
          </p>
          <p>
            Research by NatWest found that Britain’s medium-sized businesses are
            responding to this trend, with 57.5pc saying that sustainability is
            “extremely” or “very” influential in their decision making*.
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Timeline
        title="Corporate and social responsibility timeline"
        items={responsibilityTimeline}
      />
      <Pagebody title="Corporate social responsibility" img={csrTitle}>
        <AnimationTrigger>
          <p>
            The mindset of companies has shifted since the emergence of corporate
            social responsibility (CSR) programmes, says Rob Cameron, of
            SustainAbility, a business consultancy.
          </p>
          <p>
          “Business thinking about its role in society is not new,” says Mr
            Cameron. “We might not have approved of the paternalistic approach of
            Cadbury’s in the Victorian era, but it took a broad view of its
            responsibilities, for instance housing workers.”
          </p>
          <p>
            But in recent years, the movement towards corporate sustainability has
            boomed. Fortune 500 companies spent $19.9bn (£15.08bn) on CSR in 2015,
            according to Unesco.
          </p>
          <Pullquote>
            <h3>
              More than 90% of the world’s top 250 companies now produce an annual
              report on CSR
            </h3>
            <p>according to KPMG</p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <p>
            This change initially came from the environmental movement, Mr Cameron
            says, but CSR now takes in social concerns, and is increasingly
            central to the way that companies work.
          </p>
          <p>
            He says: “The original idea of corporate social responsibility
            programmes wasn’t actually philanthropy. It was to have companies
            think deeply about their responsibilities.
          </p>
          <p>
            In Britain, almost two-thirds of companies already invest in corporate
            social responsibility programmes, research by NatWest shows, with 64pc
            of midsized businesses having committed to ethical behaviour through
            corporate social responsibility.
          </p>
          <p>
            “Corporate social responsibility almost isn’t a ‘thing’ any more,”
            says Giles Gibbons, founder of Good Business, which has advised
            corporations such as Nike, Microsoft and McDonald’s.
          </p>
          <p>
            “Increasingly all businesses act that way: responsibility is
            integrated into the core of the business,” he says.
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Slider />
      <Pagebody
        title="Why do modern businesses need to be more sustainable?"
        img={whydoTitle}
      >
        <AnimationTrigger>
          <p>
            When scientists moved the hands of the Doomsday Clock to two minutes
            to midnight this year, it was the closest the hands have stood to 12
            (symbolising the end of the world) since the height of the Cold War
            nuclear arms race.
          </p>
          <p>
            We are running out of time to address climate change, the scientists
            warned – so concerns about sustainability are becoming mainstream,
            says James Robey, global head of sustainability at analyst firm
            Capgemini.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Edelman’s 2019 Trust barometer has shown an 11-point increase to 76%
            of the general population agreeing that business leaders should take
            a lead on these issues
          </h3>
          <p>James Robey, global head of sustainability, Capgemini</p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            The impact of climate change has featured in the World Economic
            Forum’s top five global risks every year since 2011.
          </p>
          <p>
            All this means that large companies increasingly see sustainability as
            a way to add value, says Mr Cameron. “It’s no longer just start-ups.
            We’re seeing large well-established companies looking into low-carbon
            solutions as we transition to a low-carbon economy.”
          </p>
          <p>
            And now it is not only consumers who are demanding that sustainability
            be baked in to businesses, but also investors, Mr Cameron says. “We’re
            also seeing interest from the investment community in a really
            substantial way.”
          </p>
          <p>
            As sustainability has become more important to companies, it has
            caused a shift in mindset.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <p>
            Companies have moved beyond perceiving it as a risk agenda to seeing
            opportunities for value creation – to a way to create purpose.
          </p>
          <h3>
            What is the purpose of our business, beyond the pursuit of profit? A
            cultural shift is taking place in boardrooms
          </h3>
          <p>Rob Cameron, SustainAbility</p>
        </Pullquote>
      </Pagebody>
      <VerticalSlider />
      <Pagebody
        title="How can mid-market businesses become more sustainable?"
        img={howcanTitle}
      >
        <AnimationTrigger>
          <p>
            The steps that companies can take to become more sustainable are not
            enormously different to how businesses work day-to-day, says business
            innovation expert Erica Wolfe-Murray.
          </p>
          <p>
            The author of Simple Tips, Smart Ideas says: “Companies can apply
            similar steps to address sustainability as they would normally take to
            protect profits. The first step has to be an audit, looking at
            internal systems before reviewing external supply. Heating, power
            generation, water supply are all key areas.”
          </p>
          <p>
            One of the first steps that companies should take is to audit their
            supply chain, says Dr Jansen.
          </p>
          <p>
            “Supply chains are responsible for most of the emissions that
            aggravate climate change impacts,” he says.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            About 60% of the carbon footprint of a manufacturing company is in
            the supply chain
          </h3>
          <p>
            and for retailers this is as high as 80%. The supply-chain exposure
            to human rights and social issues is equally high
          </p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            Many companies have adopted a “triple bottom line” accounting system,
            taking into account not only financial but environmental and social
            results. Such initiatives are popular with consumers, with 85pc of SME
            bosses saying that they believe customers want them to embrace
            sustainability, according to NatWest research.
          </p>
          <p>
            Simply starting to monitor such numbers often spurs companies to
            engage with sustainability in a meaningful way, says Mr Gibbons.
            “Fundamentally, business people are project-managing,” he says. “The
            moment you get them to measure something, they have to manage that
            measurement. If you’re going to measure something like your carbon
            impact, the next natural thing is to make it lower.”
          </p>
        </AnimationTrigger>
        <Pullquote>
          <p>
            Among larger companies that export globally, sustainability is
            becoming ever more important, with
          </p>
          <h3>
            73.5% agree that sustainability is important, according to
            NatWest research
          </h3>
        </Pullquote>
        <AnimationTrigger>
          <p>
            Even for medium-sized businesses, frameworks such as the UN
            Sustainable Development Goals (SDGs) are a useful yardstick, says Prof
            Wendy Chapple, of Nottingham Business School.
          </p>
          <p>
            The SDGs are a set of 17 goals developed by the United Nations that
            set out targets for a more sustainable world by 2030.
          </p>
          <p>
            Prof Chapple says: “Small and medium-sized businesses are often
            surprised to see that what they are currently doing is in line with
            the goals. It is a good way to start asking, ‘What could we do
            better?’ ”
          </p>
        </AnimationTrigger>
      </Pagebody>
      <Timeline
        title="Sustainability trends that are impacting businesses"
        items={trendsImpacting}
      />
      <Pagebody
        title="Barriers and opportunities for sustainability in midsized companies"
        img={barriersTitle}
      >
        <AnimationTrigger>
          <p>
            Becoming sustainable is not without pitfalls. Last year, supermarket
            chain Iceland partnered with Greenpeace on an advert about palm oil,
            but campaigners then claimed that the chain had not removed palm oil
            from all its own products.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <p>Martin Newman, chairman of the Customer First Group, says:</p>
          <h3>Practise what you preach</h3>
          <p>
            When you stick your head above the parapet and claim to be socially
            responsible, you need to ensure you are delivering this across the
            board
          </p>
        </Pullquote>
        <AnimationTrigger>
        <p>
          Staff training in these issues is key, NatWest research has shown.
          Among medium-sized businesses that have embraced sustainability,
          86.3pc had invested in training for staff.
        </p>
        <p>
          Some businesses can be reluctant to commit to sustainable policies
          owing to the perceived cost, says Peter Kelly, managing director,
          Virgin Media Business, but technology can help.
        </p>
        <p>
          He says: “Businesses feel pressure to balance their short-term bottom
          line. Technology can help bridge this gap by delivering cost
          efficiencies while also helping to reduce a company’s environmental
          impact. For example, connected devices can control environmental
          conditions in food supply chains to stop food spoiling and reduce
          waste.”
        </p>
        </AnimationTrigger>
        <Pullquote>
          <h3>
            NatWest research shows that 72.7% of midsized British companies have
            invested in new technology for efficiency
          </h3>
        </Pullquote>
        <AnimationTrigger>
        <p>
          British businesses are also embracing energy audits as a way to
          improve sustainability, with 74.7pc having conducted an energy
          efficiency audit, NatWest research has shown.
        </p>
        <p>
          NatWest offers business financing based on independent energy audits,
          with energy-saving proposals financed on the basis of future cost
          savings.
        </p>
        <p>
          Sustainability also makes good financial sense, and many companies
          will see instant savings, says Laura Timlin, director at the Carbon
          Trust, which certifies businesses on their carbon use. She says:
          “Sustainability is a journey. We know from experience that most
          businesses will have lots of quick wins that bring immediate cost
          savings, especially through energy efficiency opportunities.”
        </p>
        </AnimationTrigger>
      </Pagebody>
      <BasicSlider />
      <Pagebody title="Looking to the future" img={lookingTitle}>
        <AnimationTrigger>
          <p>
            “I could never understand why we were having the conversation. If you
            can do things a better way, why not?
          </p>
          <p>
            “But the resistance has broadly gone away. Millennials are now the
            decision makers as well as the consumers, and they are saying, ‘We
            want to take this seriously.’ ”
          </p>
          <p>
            In fact, by next year millennials will make up more than a third of
            the workforce worldwide, according to research by ManpowerGroup.
          </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            I can’t believe how much time I have spent in the past 25 years
            discussing whether sustainability is good or bad for business
          </h3>
          <p>Giles Gibbons, founder of Good Business</p>
        </Pullquote>
        <AnimationTrigger>
        <p>
          Ethical and sustainable businesses will inspire other companies in
          coming decades, says Chris Turner, executive director of B Lab UK. It
          works with “B corporations”, which are certified every two years for
          their ethical credentials.
        </p>
        <p>
          Mr Turner says: “Ultimately we see these businesses as the leaders,
          showing that you can have a really positive impact on the world, and
          still be really profitable and sustainable over the long term.”
        </p>
        </AnimationTrigger>
        <Pullquote quote>
          <h3>
            Our aim is for these leaders toinspire others that business can bea
            force for good
          </h3>
          <p>Chris Turner, executive director of B Lab UK</p>
        </Pullquote>
        <AnimationTrigger>
          <p>
            He points out that the British Government has already set out
            ambitious climate goals for 2050. “So far, we’re not doing
            fantastically well on keeping to these goals, but at least we have
            something written in law.
          </p>
          <p>
            “The idea of sustainability is really becoming mainstream. As a pillar
            of society, business will increasingly be involved. We’ll see
            sustainability switch to an ‘everything agenda’, dealing with
            everything from environmental issues to inequality. The issues that we
            today understand as sustainability – these will become everyday issues
            of corporate life.”
          </p>
          <p className="footnote">
            *Based on interviews in 2018 with 861 midsized businesses, with turnovers of £5m to £250m
          </p>
        </AnimationTrigger>
      </Pagebody>
      <CTA>
        <p>For more information visit the NatWest Rethinking Business Hub</p>
        <Button link="https://ad.doubleclick.net/ddm/trackclk/N8083.124621MSNUK/B22370404.240723500;dc_trk_aid=443465896;dc_trk_cid=105350124;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=" />
      </CTA>
      <Socials />
      <Broughttyb />
      <Credits />
      <Related />
      <Footer />
    </>
  );
}

export default App;
