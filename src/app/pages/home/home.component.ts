import { Component } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  showAnswer?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  faqs: FAQ[] = [
    { question: 'How can I track my order?', answer: 'You can track your order by logging into your account and navigating to the order history section.' },
    { question: 'What payment methods do you accept?', answer: 'We accept credit/debit cards, PayPal, and other secure payment methods. You can view the available options during the checkout process.' },
    { question: 'How do I return an item?', answer: 'To return an item, go to your account, select the order containing the item, and follow the instructions for returns. Make sure the item is in its original condition.' },
    { question: 'Is international shipping available?', answer: 'Yes, we offer international shipping. Shipping fees and delivery times vary depending on the destination.' },
    { question: 'Do you provide customer support?', answer: 'Yes, our customer support team is available 24/7. You can reach us through the contact page or by emailing support@example.com.' },
    { question: 'How can I reset my password?', answer: 'To reset your password, click on the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.' }
  ];

  toggleAnswer(faq: FAQ): void {
    faq.showAnswer = !faq.showAnswer;
  }

}
