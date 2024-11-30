import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MegaMenuModule} from "primeng/megamenu";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {AvatarModule} from "primeng/avatar";
import {MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";

@Component({
  selector: 'app-home-adm',
  standalone: true,
  imports: [
    MenubarModule,
    MegaMenuModule,
    ButtonModule,
    CommonModule,
    AvatarModule,
    MenubarModule
  ],
  providers:[MessageService],
  templateUrl: './home-adm.component.html',
  styleUrl: './home-adm.component.css'
})
export class HomeAdmComponent implements OnInit{
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
            label: 'Lista de Entregas',
            icon: 'pi pi-clipboard',
            command: () => this.listDelivery()
          },
          {
            label: 'Avaliação de Pedidos',
            icon: 'pi pi-clipboard',
            command: () => this.avaliationDelivery()
          }
        ]
      },
      {
        label: 'Configurações',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Cadastrar Adm',
            icon: 'pi pi-user-plus',
            command: () => this.registerAdm()
          },
          {
            label: 'Cadastrar User',
            icon: 'pi pi-user',
            command: () => this.registerUser()
          },
          {
            label: 'Lista de Usuários',
            icon: 'pi pi-address-book',
            command: () => this.listUser()
          }
        ]
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

  private registerAdm() {
    this._router.navigate(['/register-adm']);
  }

  private registerUser() {
    this._router.navigate(['/register-user']);
  }

  private listUser() {
    this._router.navigate(['/list-user']);
  }

  private avaliationDelivery() {
    this._router.navigate(['/list-avaliation']);
  }

  private listDelivery() {
    this._router.navigate(['/list-delivery']);
  }
}
