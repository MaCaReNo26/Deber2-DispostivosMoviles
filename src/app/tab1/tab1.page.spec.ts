
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { cartOutline, arrowForwardOutline } from 'ionicons/icons';

import { CompraService } from '../services/compra';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonText
  ]
})
export class Tab1Page {

  nombreProducto = '';
  cantidad: number | null = null;
  precioUnitario: number | null = null;

  mensajeError = '';
  subtotal = 0;

  constructor(
    private compraService: CompraService,
    private router: Router
  ) {
    addIcons({
      cartOutline,
      arrowForwardOutline
    });
  }

  registrarCompra(): void {
    this.mensajeError = '';

    const nombre = this.nombreProducto.trim();
    const cantidad = Number(this.cantidad);
    const precio = Number(this.precioUnitario);

    if (!nombre) {
      this.mensajeError = 'El nombre del producto es obligatorio.';
      return;
    }

    if (
      this.cantidad === null ||
      this.cantidad === undefined ||
      !Number.isInteger(cantidad) ||
      cantidad <= 0
    ) {
      this.mensajeError = 'La cantidad debe ser un entero mayor que cero.';
      return;
    }

    if (
      this.precioUnitario === null ||
      this.precioUnitario === undefined ||
      !Number.isFinite(precio) ||
      precio <= 0
    ) {
      this.mensajeError = 'El precio unitario debe ser mayor que cero.';
      return;
    }

    this.subtotal = this.redondear(cantidad * precio);

    this.compraService.guardarCompra({
      nombreProducto: nombre,
      cantidad,
      precioUnitario: precio,
      subtotal: this.subtotal
    });

    void this.router.navigateByUrl('/tabs/tab2');
  }

  formatearDinero(valor: number): string {
    return valor.toFixed(2);
  }

  private redondear(valor: number): number {
    return Math.round((valor + Number.EPSILON) * 100) / 100;
  }
}
