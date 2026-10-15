
import { Component, OnInit } from '@angular/core';
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
import {
  calculatorOutline,
  arrowBackOutline,
  walletOutline
} from 'ionicons/icons';

import {
  Compra,
  CompraService
} from '../services/compra';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
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
export class Tab2Page implements OnInit {

  compra: Compra | null = null;

  descuento: number | null = 0;
  dineroRecibido: number | null = 0;

  totalFinal = 0;
  cambio = 0;
  saldoPendiente = 0;

  pagoCalculado = false;
  mensajeError = '';

  constructor(
    private compraService: CompraService,
    private router: Router
  ) {
    addIcons({
      calculatorOutline,
      arrowBackOutline,
      walletOutline
    });
  }

  ngOnInit(): void {
    this.compra = this.compraService.obtenerCompraActual();

    if (!this.compra) {
      void this.router.navigateByUrl('/tabs/tab1');
    }
  }

  get descuentoAplicado(): number {
  if (!this.compra) {
    return 0;
  }

  return this.redondear(
    this.compra.subtotal * Number(this.descuento ?? 0) / 100
  );
}

  calcularPago(): void {
    this.mensajeError = '';
    this.pagoCalculado = false;

    if (!this.compra) {
      this.mensajeError = 'Primero debes registrar una compra.';
      return;
    }

    if (
      this.descuento === null ||
      !Number.isFinite(Number(this.descuento)) ||
      Number(this.descuento) < 0 ||
      Number(this.descuento) > 100
    ) {
      this.mensajeError = 'El descuento debe estar entre 0 y 100.';
      return;
    }

    if (
      this.dineroRecibido === null ||
      !Number.isFinite(Number(this.dineroRecibido)) ||
      Number(this.dineroRecibido) < 0
    ) {
      this.mensajeError =
        'El dinero recibido debe ser mayor o igual a cero.';
      return;
    }

    const porcentaje = Number(this.descuento);
    const recibido = Number(this.dineroRecibido);

    const descuentoAplicado =
      this.compra.subtotal * porcentaje / 100;

    this.totalFinal = this.redondear(
      this.compra.subtotal - descuentoAplicado
    );

    this.cambio = this.redondear(
      Math.max(0, recibido - this.totalFinal)
    );

    this.saldoPendiente = this.redondear(
      Math.max(0, this.totalFinal - recibido)
    );

    this.pagoCalculado = true;
  }

  formatearDinero(valor: number): string {
    return valor.toFixed(2);
  }

  nuevaCompra(): void {
    this.compraService.limpiarCompra();
    void this.router.navigateByUrl('/tabs/tab1');
  }

  private redondear(valor: number): number {
    return Math.round((valor + Number.EPSILON) * 100) / 100;
  }
}
