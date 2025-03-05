import { Component } from '@angular/core';
import { RealStateService } from '../../service/real-state.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-real-state',
  imports: [CommonModule],
  providers:[MessageService],
  templateUrl: './real-state.component.html',
  styleUrl: './real-state.component.scss'
})
export class RealStateComponent {
     realStates: any[] = [];
     filteredRealStates: any[] = [];
    
      constructor(private realState: RealStateService,
        private router: Router,
        private route: ActivatedRoute,
        private messageService: MessageService,
      ) {}
    
      ngOnInit() {
          this.realState.getRealState().subscribe(response => {
            this.realStates = response;
            
            this.filteredRealStates = [...this.realStates];
          });
        }
      

}
