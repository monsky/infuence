import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private currentState = new BehaviorSubject<string>('');
  public readonly currentState$ = this.currentState.asObservable();
  public undoStack: string[];
  public redoStack: string[];
  private readonly MAX_UNDO = 20;
  public saved = false;

  public get state(): string {
    return this.currentState.getValue();
  }

  public set state(newState: string) {
    this.currentState.next(newState);
  }

  public saveState = (newState: string) => {
    this.saved = true;
    if (this.undoStack.length === this.MAX_UNDO) {
      this.undoStack.shift();
    }
    this.undoStack.push(this.state);
    this.state = newState;
    this.redoStack = [];
  }

  public undo = () => {
    this.saved = false;
    this.redoStack.push(this.currentState.getValue());
    this.state = this.undoStack.pop();
    console.log(this.undoStack.length);
  }

  public redo = () => {
    this.saved = false;
    this.undoStack.push(this.state);
    this.state = this.redoStack.pop();
  }



  constructor() { 
    this.undoStack = [];
    this.redoStack = [];
  }
}
