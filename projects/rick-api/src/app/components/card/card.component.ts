import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../model/character';

@Component({
  selector: 'trial-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() character!: Character;
  editMode = false;
  disabled = false;

  @Output() saveChanges = new EventEmitter<Character>();
  newName: string = '';
  newLocation: string = '';
  newStatus: 'Alive' | 'Dead' | 'unknown' | '' = '';

  handleEdit() {
    this.editMode = true;
    this.disabled = true;
  }

  wrongStatus = false;
  handleSave() {
    this.editMode = false;
    this.disabled = false;
    if (this.newName === '') this.newName = this.character.name;
    this.character.name = this.newName;
    if (this.newStatus === '') this.newStatus = 'unknown';
    this.character.status = this.newStatus;
    if (this.newLocation === '')
      this.newLocation = this.character.location.name;
    this.character.location.name = this.newLocation;
  }
}
