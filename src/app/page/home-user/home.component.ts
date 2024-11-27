import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {MenuItem, MessageService} from "primeng/api";
import {MegaMenuModule} from "primeng/megamenu";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MegaMenuModule, ButtonModule, CommonModule, AvatarModule, MenubarModule, CardModule
  ],
  providers:[MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;

  constructor(private _router: Router, private _service: AuthServiceService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Meus Dados',
        icon: 'pi pi-user-edit'
      },
      {
        label: 'Pedidos',
        icon: 'pi pi-shop',
        items: [
          {
            label: 'Fazer Pedidos',
            icon: 'pi pi-cart-arrow-down',
            command: () => this.placeOrder()
          },
          {
            label: 'Lista de Pedidos',
            icon: 'pi pi-receipt',
            command: () => this.listOrder()
          },
          {
            label: 'Avaliar Pedidos',
            icon: 'pi pi-clipboard',
            command: () => this.avaliationOrder()
          }
        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog'
      },
      {
        label: 'Contact',
        icon: 'pi pi-whatsapp',
        items: [
          {
            label: 'Sobre nós',
            icon: 'pi pi-face-smile'
          },
          {
            label: 'Nosso Telefone',
            icon: 'pi pi-phone'
          },
          {
            label: 'Nossa Localização',
            icon: 'pi pi-warehouse'
          }
        ]
      },
      {
        label: 'Logout',
        icon: 'pi pi-user-minus',
        command: () => this.logout()
      }
    ]
  }

  private logout() {
    this._service.logout();
  }

  private placeOrder() {
    this._router.navigate(['/place-order']);
  }

  private listOrder() {
    this._router.navigate(['/list-order']);
  }

  private avaliationOrder() {
    this._router.navigate(['/avaliation-delivery']);
  }
}
