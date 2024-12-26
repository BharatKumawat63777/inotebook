import React from "react";
import "../components/style.css";
import { Link } from "react-router-dom";

import header from "../assets/header.jpg";
import why from "../assets/why.jpg";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
// import icon5 from "../assets/icon-5.png";
// import icon6 from "../assets/icon-6.png";

import class1 from "../assets/classes-1.jpg";
import class2 from "../assets/classes-2.jpg";
import class3 from "../assets/classes-3.jpg";
import class4 from "../assets/classes-4.jpg";
import class5 from "../assets/classes-5.jpg";
import class6 from "../assets/classes-6.jpg";

import story1 from "../assets/stories-1.jpg";
import story2 from "../assets/stories-2.jpg";
import story3 from "../assets/stories-3.jpg";

import photo1 from "../assets/photos-1.jpg";
import photo2 from "../assets/photos-2.jpg";

import photo3 from "../assets/photos-3.jpg";
import photo4 from "../assets/photos-4.jpg";

export const Footer = () => {
  const socials = [
    { id: 1, href: "#", icon: "ri-twitter-fill", label: "Twitter" },
    { id: 2, href: "#", icon: "ri-facebook-fill", label: "Facebook" },
    { id: 3, href: "#", icon: "ri-instagram-line", label: "Instagram" },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <Link href="#">AdiYogi</Link>
          </div>
        </div>
        <div className="footer__col">
          <p>Jodhpur, Rajasthan, India</p>
        </div>
        <div className="footer__col">
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.id} href={social.href} aria-label={social.label}>
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section__container footer__bar">
        Copyright © 2024 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export const Gallery = () => {
  const photos = [
    { id: 1, src: photo1, alt: "Photo 1" },
    { id: 2, src: photo2, alt: "Photo 2" },
    { id: 3, src: photo3, alt: "Photo 3" },
    { id: 4, src: photo4, alt: "Photo 4" },
  ];

  return (
    <section className="section__container photos__container">
      <p className="section__subheader">GALLERY</p>
      <h2 className="section__header">See The Latest Photos</h2>
      <div className="photos__grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photos__card">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const Header = () => (
  <header id="home">
    <div className="section__container header__container">
      <div className="header__content">
        <h1>Effective YOGA</h1>
        <h2>Do yoga today for better tomorrow</h2>
        <button className="btn">15 Days free trial</button>
      </div>
      <div className="header__image">
        <img src={header} alt="header" />
      </div>
    </div>
  </header>
);

export const WhyYoga = () => (
  <section className="section__container why__container">
    <div className="why__image">
      <img src={why} alt="why yoga" />
    </div>
    <div className="why__content">
      <h2 className="section__header">Why You Should Go To Yoga</h2>
      <p>
        Engaging in yoga offers a holistic approach to wellness, encompassing
        both physical and mental benefits. Through a series of poses, stretches,
        and muscle strength. Its meditative aspects encourage mindfulness,
        reducing stress and anxiety while promoting a sense of inner peace.
      </p>
      <ul>
        {[
          "Yoga boosts brain power",
          "Yoga helps you to breathe better",
          "Yoga improves your strength",
          "Yoga helps you to focus",
          "Yoga helps give meaning to your day",
        ].map((benefit) => (
          <li key={benefit}>
            <span>
              <i className="ri-checkbox-circle-fill"></i>
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const Hero = () => (
  <section className="hero" id="hero">
    <div className="section__container hero__container">
      {[
        {
          icon: icon1,
          title: "Healthy Lifestyle",
          description:
            "Embrace a healthy lifestyle through the transformative power of yoga and cultivate physical vitality and inner peace.",
        },
        {
          icon: icon2,
          title: "Body & Mind Balance",
          description:
            "Through purposeful poses and mindful breathing, yoga cultivates a strong, flexible body while nurturing inner calm.",
        },
        {
          icon: icon3,
          title: "Meditation Practice",
          description:
            "Discover inner serenity and mindfulness as you cultivate a profound connection with the present moment.",
        },
        {
          icon: icon4,
          title: "Self-Care",
          description:
            "Discover the transformative power of self-care through yoga and embrace moments of tranquility and mindfulness.",
        },
      ].map(({ icon, title, description }) => (
        <div className="hero__card" key={title}>
          <span>
            <img src={icon} alt="hero" />
          </span>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export const Classes = () => (
  <section className="section__container classes__container" id="classes">
    <p className="section__subheader">YOGA CLASSES</p>
    <h2 className="section__header">Choose Your Level & Focus</h2>
    <div className="classes__grid">
      <div className="classes__image">
        <img src={class1} alt="classes" />
        <div className="classes__content">
          <button className="btn classes__btn">View More</button>
        </div>
      </div>

      <div className="classes__image">
        <img src={class2} alt="classes" />
        <div className="classes__content">
          <button className="btn classes__btn">View More</button>
        </div>
      </div>

      <div className="classes__image">
        <img src={class3} alt="classes" />
        <div className="classes__content">
          <button className="btn classes__btn">View More</button>
        </div>
      </div>

      <div className="classes__image">
        <img src={class4} alt="classes" />
        <div className="classes__content">
          <button className="btn classes__btn">View More</button>
        </div>
      </div>

      <div className="classes__image">
        <img src={class5} alt="classes" />
        <div className="classes__content">
          <button className="btn classes__btn">View More</button>
        </div>
      </div>

      <div className="classes__image">
        <img src={class6} alt="classes" />
        <div className="classes__content">
          <button className="btn classes__btn">View More</button>
        </div>
      </div>
    </div>
  </section>
);

export const Stories = () => {
  const stories = [
    {
      id: 1,
      quote:
        "This yoga website has been a game-changer for me. The variety of classes and guided sessions have not only improved my flexibility but also brought a sense of calm to my hectic days.",
      authorImage: story1,
      authorName: "Emily Williams",
      authorRole: "Trainer",
    },
    {
      id: 2,
      quote:
        "The tailored sessions and expert guidance have not only eased my discomfort but also boosted my overall well-being. A fantastic resource for both beginners and experienced yogis.",
      authorImage: story2,
      authorName: "Ava Johnson",
      authorRole: "Member",
    },
    {
      id: 3,
      quote:
        "The on-demand classes allow me to practice whenever I can, and the mindfulness exercises have brought a new level of clarity to my life. A must-visit for anyone seeking holistic wellness.",
      authorImage: story3,
      authorName: "Sophia Smith",
      authorRole: "Member",
    },
  ];

  return (
    <section className="section__container stories__container" id="stories">
      <p className="section__subheader">TESTIMONY</p>
      <h2 className="section__header">Successful Stories</h2>
      <div className="stories__grid">
        {stories.map((story) => (
          <div key={story.id} className="stories__card">
            <div className="stories__content">
              <span>
                <i className="ri-double-quotes-l"></i>
              </span>
              <p>{story.quote}</p>
            </div>
            <div className="stories__author">
              <img src={story.authorImage} alt={story.authorName} />
              <div className="stories__author__details">
                <h4>{story.authorName}</h4>
                <h6>{story.authorRole}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
