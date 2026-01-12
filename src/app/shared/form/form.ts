import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {
  formData = {
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all required fields correctly!',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      confirmButtonColor: '#0d6efd' 
    });

    form.resetForm();
  }
}
