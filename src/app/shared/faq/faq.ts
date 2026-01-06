import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topbutton } from '../topbutton/topbutton';

@Component({
  selector: 'app-faq',
  imports: [CommonModule,Topbutton],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
 faqs = [
    {
      question: 'How do I apply for a job at IT Panda?',
      answer: 'Use the Careers page and click Apply, or email info@itpanda.org with your CV and portfolio.',
    },
    {
      question: 'Do you offer internships?',
      answer: 'Yes — We offer internships. Check the Careers page for current openings.',
    },
    {
      question: 'What is the interview process?',
      answer: 'Screening call → skills task → panel interview → offer. We move fast and respect your time.',
    },
    {
      question: 'What benefits do you offer?',
      answer: 'Flexible work, learning budget, inclusive culture, and enterprise-grade tools to support your growth.',
    },
    {
      question: 'What technologies does IT Panda work with?',
      answer: 'We specialize in React, Angular, Node.js, and modern web technologies. We also work with UI/UX design tools like Figma and Canva.',
    },
    {
      question: 'What is the typical work schedule?',
      answer: 'Standard hours are Monday to Friday, with flexibility for different time zones and project needs.',
    },
    {
      question: 'Do you provide training and development opportunities?',
      answer: 'Absolutely! We invest in our team with training programs, workshops, conferences, and online learning platforms.',
    },
    {
      question: 'What is the company culture like?',
      answer: 'Collaborative, innovative, and inclusive. We value creativity, continuous learning, and work-life balance.',
    },
    {
      question: 'How long does the hiring process take?',
      answer: 'Typically 1-2 weeks from application to offer, depending on the role and candidate availability.',
    },
    {
      question: 'What kind of projects will I work on?',
      answer: 'You will work on diverse projects including enterprise web applications, e-commerce platforms, mobile apps, and UI/UX design for local and international clients.',
    },
 
  ];
}

