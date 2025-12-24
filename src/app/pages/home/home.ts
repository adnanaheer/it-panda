import { Component, OnInit, OnDestroy} from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';

@Component({
  selector: 'app-home',
  imports: [Testimonial],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  words: string[] = ['Reality', 'Success', 'Innovation', 'Growth', 'Excellence', 'Impact', 'Achievement', 'Results'];
  activeWord: string = '';

  private wordIndex = 0;
  private charIndex = 0;
  private typingInterval: any;
  private deleting = false;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping() {
    this.typingInterval = setInterval(() => {

      const currentWord = this.words[this.wordIndex];

      if (!this.deleting) {
        // typing letters
        this.activeWord = currentWord.slice(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentWord.length) {
          setTimeout(() => (this.deleting = true), 800);
        }
      } else {
        // deleting letters
        this.activeWord = currentWord.slice(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.deleting = false;
          this.wordIndex = (this.wordIndex + 1) % this.words.length;
        }
      }

    }, 120); // typing speed
  }

  ngOnDestroy(): void {
    clearInterval(this.typingInterval);
  }
}