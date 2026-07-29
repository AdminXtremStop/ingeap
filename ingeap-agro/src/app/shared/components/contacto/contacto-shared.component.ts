import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto-shared',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  templateUrl: './contacto-shared.component.html',
  styleUrl: './contacto-shared.component.scss'
})
export class ContactoSharedComponent {
  @Input() eyebrowNumber: string | null = null;
  @Input() eyebrowText: string | null = null;
  @Input() title: string = 'CONTÁCTENOS';
  @Input() subtitle: string = '';
  @Input() address: string = 'Ariztia 1050 Quillota';
  @Input() email: string | null = null;
  @Input() phone: string | null = null;
  @Input() accentColor: string = '#31a5b3'; // Turquesa por defecto
  @Input() accentColorHover: string = '#278f9b';
  @Input() buttonLabel: string = 'ENVIAR';
  @Input() successConfirmColor: string = '#31a5b3';
  
  // Credenciales EmailJS
  @Input() emailjsServiceId: string = environment.emailjs.defaultServiceId;
  @Input() emailjsTemplateId: string = environment.emailjs.defaultTemplateId;
  @Input() emailjsPublicKey: string = environment.emailjs.publicKey;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSending: boolean = false;

  private validarFormulario(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor, completa todos los campos antes de enviar.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: this.accentColor
      });
      return false;
    }
    if (!emailRegex.test(this.formData.email.trim())) {
      Swal.fire({
        icon: 'warning',
        title: 'Correo inválido',
        text: 'Por favor, ingresa una dirección de correo electrónico válida.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: this.accentColor
      });
      return false;
    }
    return true;
  }

  public async enviarMail() {
    if (!this.validarFormulario()) {
      return;
    }

    this.isSending = true;

    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        this.emailjsServiceId, 
        this.emailjsTemplateId, 
        {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          reply_to: this.formData.email
        }, 
        this.emailjsPublicKey
      );

      Swal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: 'Tu mensaje ha sido enviado correctamente.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: this.successConfirmColor
      });

      this.limpiarFormulario();
    } catch (error: any) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: this.accentColor
      });
    } finally {
      this.isSending = false;
    }
  }

  public limpiarFormulario() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
