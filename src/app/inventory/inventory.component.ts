import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
import { MatButtonModule } from '@angular/material/button';

interface InventoryItem {
  ItemId: number;
  Name: string;
  Price: number;
  Quantity: number;
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.inventoryService.getItems().subscribe(items => {
      this.inventoryItems = items;
    });
  }

  addItem(): void {
    const dialogRef = this.dialog.open(AddItemModalComponent, {
      width: '50%', // Set the width to 50%
      panelClass: 'custom-dialog-container' // Custom CSS class for styling
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newItem: InventoryItem = { ItemId: 0, Name: result.Name, Price: result.Price, Quantity: result.Quantity };
        this.inventoryService.createItem(newItem).subscribe(item => {
          this.inventoryItems.push(item);
        });
      }
    });
  }

  editItem(ItemId: number): void {
    const updatedItem: InventoryItem = { ItemId, Name: 'Updated Item',  Price: 1, Quantity: 1};
    this.inventoryService.updateItem(ItemId, updatedItem).subscribe(() => {
      this.loadItems();
    });
  }

  deleteItem(ItemId: number): void {
    this.inventoryService.deleteItem(ItemId).subscribe(() => {
      this.inventoryItems = this.inventoryItems.filter(item => item.ItemId !== ItemId);
    });
  }
}
