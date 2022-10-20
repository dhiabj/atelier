import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css'],
})
export class ListProduitsComponent implements OnInit {
  list: Produit[] = [
    {
      idProduit: 1,
      code: 'P147852P',
      libelle: 'Produit1',
      prixUnitaire: 12.5,
      tauxTVA: 0.02,
    },
    {
      idProduit: 2,
      code: 'P147552P',
      libelle: 'Produit1',
      prixUnitaire: 30,
      tauxTVA: 0.198,
    },
    {
      idProduit: 3,
      code: 'D14785CC',
      libelle: 'Produit1',
      prixUnitaire: 20,
      tauxTVA: 0.198,
    },
    {
      idProduit: 4,
      code: 'E147852P',
      libelle: 'Produit1',
      prixUnitaire: 50,
      tauxTVA: 0.197,
    },
    {
      idProduit: 5,
      code: 'F147852P',
      libelle: 'Produit1',
      prixUnitaire: 70,
      tauxTVA: 0.02,
    },
  ];

  message: string = '';
  pId: Number = 0;

  changeTVA(id: Number) {
    const newList = this.list.map((produit) => {
      if (produit.idProduit === id) {
        return { ...produit, tauxTVA: 0.02 };
      }
      return produit;
    });
    this.list = newList;
    this.message = 'TVA modifiée';
    this.pId = id;
    console.log(newList);
  }

  searchProducts = (value: any) => {
    const searchedProducts = this.list.filter((produit) => {
      return produit.code.includes(value);
    });
    this.list = searchedProducts;
    console.log(this.list);
  };

  constructor() {}

  ngOnInit(): void {}
}
