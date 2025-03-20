import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <p>© {{currentYear}} FromSoftware Review Collection. Todos os direitos reservados a Roger.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: rgba(0, 0, 0, 0.3);
      padding: 1.5rem 0;
      width: 100%;
      position: relative;
      bottom: 0;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      
      p {
        color: var(--ds-text);
        font-size: 0.9rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
