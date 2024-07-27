import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-add-item-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule], // Include necessary modules
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent {
  Name: string = '';
  Price: number = 1;
  Quantity: number = 1;

  constructor(public dialogRef: MatDialogRef<AddItemModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.dialogRef.close({ title: this.Name, Price: this.Price, Quantity: this.Quantity });
  }
}
