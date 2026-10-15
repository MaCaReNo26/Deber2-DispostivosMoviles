
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  cardOutline,
  arrowBackOutline,
  calculatorOutline
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
export class Tab2Page implements OnInit, OnDestroy {

  compra: Compra | null = null;

  descuento: number | null = 0;
  dineroRecibido: number | null = 0;

  totalFinal = 0;
  cambio = 0;
  saldoPendiente = 0;

  mensajeError = '';
  pagoCalculado = false;

  private compraSubscription?: Subscription;

  constructor(
    private compraService: CompraService,
    private router: Router
  ) {
    addIcons({
      cardOutline,
      arrowBackOutline,
      calculatorOutline
    });
  }

  ngOnInit(): void {
    this.compraSubscription = this.compraService.compra$.subscribe(
      (compra) => {
        this.compra = compra;
        this.pagoCalculado = false;

        if (compra === null) {
          this.totalFinal = 0;
          this.cambio = 0;
          this.saldoPendiente = 0;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.compraSubscription?.unsubscribe();
  }

  calcularPago(): void {
    this.mensajeError = '';

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
      this.pagoCalculado = false;
      return;
    }

    if (
      this.dineroRecibido === null ||
      !Number.isFinite(Number(this.dineroRecibido)) ||
      Number(this.dineroRecibido) < 0
    ) {
      this.mensajeError = 'El dinero recibido debe ser mayor o igual a cero.';
      this.pagoCalculado = false;
      return;
    }

    const porcentaje = Number(this.descuento);
    const recibido = Number(this.dineroRecibido);

    const descuentoAplicado = this.compra.subtotal * porcentaje / 100;

    this.totalFinal = this.redondear(
      this.compra.subtotal - descuentoAplicado
    );

    const diferencia = this.redondear(recibido - this.totalFinal);

    this.cambio = diferencia > 0 ? diferencia : 0;
    this.saldoPendiente = diferencia < 0 ? -diferencia : 0;

    this.pagoCalculado = true;
  }

  nuevaCompra(): void {
    this.compraService.limpiarCompra();

    this.descuento = 0;
    this.dineroRecibido = 0;
    this.totalFinal = 0;
    this.cambio = 0;
    this.saldoPendiente = 0;
    this.mensajeError = '';
    this.pagoCalculado = false;

    void this.router.navigateByUrl('/tabs/tab1');
  }

  formatearDinero(valor: number): string {
    return valor.toFixed(2);
  }

  private redondear(valor: number): number {
    return Math.round((valor + Number.EPSILON) * 100) / 100;
  }
}
