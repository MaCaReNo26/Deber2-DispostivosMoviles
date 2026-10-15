
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Compra {
  nombreProducto: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compraSubject = new BehaviorSubject<Compra | null>(null);

  readonly compra$ = this.compraSubject.asObservable();

  guardarCompra(compra: Compra): void {
    this.compraSubject.next({ ...compra });
  }

  obtenerCompraActual(): Compra | null {
    return this.compraSubject.value;
  }

  limpiarCompra(): void {
    this.compraSubject.next(null);
  }
}
