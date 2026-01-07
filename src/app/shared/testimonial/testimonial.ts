import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
   styleUrls: ['./testimonial.css'], 
})
export class Testimonial implements OnInit, OnDestroy {

  currentIndex = 0;
  interval: any;

testimonials = [
  {
    text: 'IT Panda transformed our online presence with a lightning-fast website that loads in under 2 seconds. Their performance-driven approach has increased our conversions by 40%.',
    name: 'Hassan Ahmed'
  },
  {
    text: 'Working with IT Panda feels like having an in-house team. They understand our business needs and consistently deliver high-quality solutions on time.',
    name: 'Fatima Khan'
  },
  {
    text: 'The team delivered a flawless e-commerce platform with 99.9% uptime. Their attention to detail and post-launch support has been exceptional.',
    name: 'Ali Raza'
  },
  {
    text: 'Professional, responsive, and highly skilled developers. They optimized our website and improved our page speed score from 60 to 95. Highly recommended!',
    name: 'Sara Malik'
  },
  {
    text: 'IT Panda built our mobile app with stunning UI and smooth 60fps performance. Their technical expertise and creative vision exceeded all expectations.',
    name: 'Usman Tariq'
  },
  {
    text: 'Best decision we made was partnering with IT Panda. Their SEO strategies increased our organic traffic by 150% in just 4 months.',
    name: 'Ayesha Noor'
  },
  {
    text: 'From concept to deployment, the entire experience was seamless. They provided 24/7 support and ensured our platform runs flawlessly.',
    name: 'Bilal Hassan'
  },
  {
    text: 'Their Angular development skills are top-notch. They built a scalable enterprise application that handles thousands of users without any performance issues.',
    name: 'Zainab Ali'
  },
  {
    text: 'IT Panda is our go-to partner for all digital solutions. Reliable, innovative, and committed to delivering measurable results every single time.',
    name: 'Kamran Sheikh'
  },
  {
    text: 'Outstanding graphic design and branding services. They captured our vision perfectly and delivered creatives that truly represent our brand identity.',
    name: 'Maria Siddiqui'
  }
];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 4000);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}